package com.UserService.UserService.services;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.Map;

@Service
public class JwtService {

    @Value("${jwt.secret}")
    private String JwtSecret;

    private SecretKey getSingingKey(){
        return Keys.hmacShaKeyFor(JwtSecret.getBytes());
    }

    public String generateToken(String subject, Map<String,Object> attributes,int expiry ){

        return Jwts.builder()
                .claims(attributes)
                .subject(subject)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + expiry))
                .signWith(getSingingKey())
                .compact();
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
