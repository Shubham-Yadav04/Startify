package com.example.Gateway.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;

@Component
public class JwtUtils {
    @Value("${jwt.secret}")
    private String JwtSecret;

    private SecretKey getSingingKey(){
        return Keys.hmacShaKeyFor(JwtSecret.getBytes());
    }
    public boolean isTokenValid(String token) {
        return extractClaims(token).getSubject()!=null && !isTokenExpired(token);
    }
    private boolean isTokenExpired(String token){
        return extractClaims(token).getExpiration().before(new Date());
    }
    public Claims extractClaims(String token){
        return Jwts.parser()
                .verifyWith(getSingingKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }


}
