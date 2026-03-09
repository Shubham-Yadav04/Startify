package com.Post.PostService.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class GeneralFilter extends OncePerRequestFilter {

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        String path = request.getRequestURI();
        return path.startsWith("/actuator")
                || path.startsWith("/eureka")
                || path.startsWith("/health")
                || path.startsWith("/auth");
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        System.out.println("inside the filter of post service");
        String token=request.getHeader("AUTHORIZATION");
        String subject=request.getHeader("X-SUBJECT");
        System.out.println(request.getHeader("AUTHORIZATION"));

        if (token == null || subject == null || !token.startsWith("Bearer ")) {
            response.setStatus(HttpStatus.UNAUTHORIZED.value());
            return;
        }

            // the inner service has to trust the gateway that the gateway will send the valid authorization in header always
            UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken= new UsernamePasswordAuthenticationToken(subject,null,null);
            SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);

         filterChain.doFilter(request,response);
    }
}
