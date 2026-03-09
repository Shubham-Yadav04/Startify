package com.example.Gateway.config;

import com.example.Gateway.filter.AuthFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.SecurityWebFiltersOrder;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;

import org.springframework.security.web.server.context.NoOpServerSecurityContextRepository;
import org.springframework.web.reactive.function.client.WebClient;


@EnableWebFluxSecurity
@Configuration
public class SecurityConfig {
    private final AuthFilter authFilter;
SecurityConfig(AuthFilter authFilter){
    this.authFilter=authFilter;
}
    @Bean
    public SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) throws Exception{
       return  http
                .csrf(ServerHttpSecurity.CsrfSpec::disable)
                .authorizeExchange(exchanges->exchanges
                        .pathMatchers(HttpMethod.GET,"/user/**").permitAll()
                        .pathMatchers("/oauth2/**").permitAll()
                        .pathMatchers("/login/**").permitAll()
                        .pathMatchers("/auth/**").permitAll()
                        .anyExchange().authenticated()

                )
               .addFilterBefore(authFilter, SecurityWebFiltersOrder.AUTHENTICATION)
               .formLogin(ServerHttpSecurity.FormLoginSpec::disable)
               .httpBasic(ServerHttpSecurity.HttpBasicSpec::disable)
               .logout(ServerHttpSecurity.LogoutSpec::disable)
               .securityContextRepository(NoOpServerSecurityContextRepository.getInstance())
               .exceptionHandling(ex -> ex
                       .authenticationEntryPoint((exchange, e) -> {
                           exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
                           return exchange.getResponse().setComplete();
                       })
                       .accessDeniedHandler((exchange, e) -> {
                           exchange.getResponse().setStatusCode(HttpStatus.FORBIDDEN);
                           return exchange.getResponse().setComplete();
                       })
               )

               .build();
    }


}
