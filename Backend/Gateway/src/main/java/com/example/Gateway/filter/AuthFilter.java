package com.example.Gateway.filter;

import com.example.Gateway.utils.JwtUtils;

import com.example.Gateway.utils.TokenResponse;

import io.jsonwebtoken.Claims;
import org.bouncycastle.util.Bytes;
import org.reactivestreams.Publisher;
import org.reactivestreams.Subscriber;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.http.*;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.ReactiveSecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.CoreSubscriber;
import reactor.core.publisher.Mono;

import javax.security.auth.Subject;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.Flow;


@Component
public class AuthFilter implements WebFilter
{
    @Autowired
    WebClient.Builder webClient;
    private final JwtUtils jwtUtils;
    AuthFilter(JwtUtils jwtUtils){
        this.jwtUtils=jwtUtils;
    }

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
        ServerHttpRequest request = exchange.getRequest();

        MultiValueMap<String, HttpCookie> cookies = request.getCookies();
        // Skip auth for public endpoints
        if (isPublicEndpoint(request.getPath().value())) {
            return chain.filter(exchange);
        }

        // get value from the cookies
        HttpCookie accessCookie = cookies.getFirst("access_token");
        HttpCookie refreshCookie = cookies.getFirst("refresh_token");
        if (accessCookie != null) {
            String token = accessCookie.getValue();
            //validate the access token
            Claims claims= jwtUtils.extractClaims(token);
            System.out.println(claims.getSubject());
            if (jwtUtils.isTokenValid(token)) {
                Authentication authentication =
                        new UsernamePasswordAuthenticationToken(
                                claims.getSubject(),
                                null,
                                List.of(new SimpleGrantedAuthority("ROLE_USER"))
                        );

                ServerHttpRequest mutated =
                        exchange.getRequest().mutate()
                                .header(HttpHeaders.AUTHORIZATION,
                                        "Bearer " + token)
                                .header("X-SUBJECT",claims.getSubject())
                                .build();
                return chain.filter(exchange.mutate().request(mutated).build()).contextWrite(
                        ReactiveSecurityContextHolder.withAuthentication(authentication)
                ) ;
            }
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();

        } else {
            //  there is no access cookie now everything depends on the refresh token stored in the db which will be validated by authservice so we have to call the authservice
            if (refreshCookie != null && jwtUtils.isTokenValid(refreshCookie.getValue())) {
                return webClient.build().post()
                        .uri("lb://USER-SERVICE/auth/verify-refresh")
                        .cookie("refresh_token", refreshCookie.getValue())
                        .retrieve()
                        .bodyToMono(TokenResponse.class)
                        .flatMap(tokens -> {

                                    // Set cookies for client
                                    exchange.getResponse().addCookie(
                                            ResponseCookie.from("access_token", tokens.getAccess_token())
                                                    .httpOnly(true)
                                                    .secure(true)
                                                    .path("/")
                                                    .build()
                                    );
                            exchange.getResponse().addCookie(
                                    ResponseCookie.from("refresh_token", tokens.getRefresh_token())
                                            .httpOnly(true)
                                            .secure(true)
                                            .path("/")
                                            .build()
                            );

Claims claims =jwtUtils.extractClaims(tokens.getAccess_token());
                            Authentication authentication =
                                    new UsernamePasswordAuthenticationToken(
                                           claims.getSubject(),
                                            null,
                                            List.of(new SimpleGrantedAuthority("ROLE_USER"))
                                    );
                                    // Forward header to internal service
                                    ServerHttpRequest mutated =
                                            exchange.getRequest().mutate()
                                                    .header(HttpHeaders.AUTHORIZATION,
                                                            "Bearer " + tokens.getAccess_token())
                                                    .header("X-SUBJECT", claims.getSubject())
                                                    .build();

                                    return chain.filter(
                                            exchange.mutate().request(mutated).build()
                                    ).contextWrite(
                                            ReactiveSecurityContextHolder.withAuthentication(authentication)
                                    );
                                }
                        )
                        .onErrorResume(ex -> unauthorized(exchange,ex.getMessage()));

            }
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();
        }

    }
    private boolean isPublicEndpoint(String path) {
        return path.startsWith("/auth/") || path.startsWith("/oauth2/")
                || path.startsWith("/login/");
    }

    private Mono<Void> unauthorized(ServerWebExchange exchange ,String message){
        System.out.println(message);
         exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
         exchange.getResponse().getHeaders().setContentType(MediaType.APPLICATION_JSON);

         String body= """
                 {
                 message:%s,
                 status:401,
                 }
                 """.formatted(message);

        byte[] bytes = body.getBytes(StandardCharsets.UTF_8);
        DataBuffer buffer= exchange.getResponse().bufferFactory().wrap(bytes);
         return exchange.getResponse().writeWith( Mono.just(buffer));
    }


}
