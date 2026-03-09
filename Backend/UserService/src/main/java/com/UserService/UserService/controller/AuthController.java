package com.UserService.UserService.controller;

import com.UserService.UserService.models.TokenResponse;
import com.UserService.UserService.models.User;
import com.UserService.UserService.services.JwtService;
import com.UserService.UserService.services.UserService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {


    @Value("${Jwt.accessExpiry}")
    private int access_expiry;

    @Value("${Jwt.refreshExpiry}")
    private int refresh_expiry;

    private final UserService userService;
    private final JwtService jwtService;
    AuthController(JwtService jwtService , UserService userService){
        this.userService=userService;
        this.jwtService=jwtService;
    }
    @PostMapping("/verify-refresh")
    public ResponseEntity<?> verifyRefreshToken(@CookieValue(value = "refresh_token", required = true) String refreshToken) {
System.out.println("inside verify-refresh" + refreshToken);

        if (refreshToken == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Refresh token missing");
        }

        try {
            // Parse the JWT to extract user email or id
            String email = jwtService.extractClaims(refreshToken).getSubject();

            // Fetch user from DB
            User user = userService.getByEmail(email);
            if (user == null || user.getRefreshToken() == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid refresh token");
            }

            // Compare refresh token from request with stored one (simple equality or hashed compare)
            if (!refreshToken.equals(user.getRefreshToken())) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Refresh token does not match");
            }
            // Generate new tokens
            Map<String, Object> claims = new HashMap<>();
            // Add custom claims if needed

            String newAccessToken = jwtService.generateToken(email, claims,access_expiry);
            String newRefreshToken = jwtService.generateToken(email, claims, refresh_expiry);

            // Save new refresh token to DB (rotate)
            user.setRefreshToken(newRefreshToken);
            userService.createUser(user);

            // Return new tokens in response body
            TokenResponse tokenResponse = new TokenResponse(newAccessToken, newRefreshToken);
            return ResponseEntity.ok(tokenResponse);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid refresh token");
        }
    }

}
