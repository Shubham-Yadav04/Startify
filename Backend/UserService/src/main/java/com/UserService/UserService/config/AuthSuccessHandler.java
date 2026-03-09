package com.UserService.UserService.config;

import com.UserService.UserService.models.User;
import com.UserService.UserService.services.JwtService;
import com.UserService.UserService.services.UserService;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class AuthSuccessHandler implements AuthenticationSuccessHandler {

    private final JwtService jwtService;
    private final UserService userService;
    AuthSuccessHandler(JwtService jwtService,UserService userService){
        this.userService=userService;
        this.jwtService=jwtService;
    }
    @Value("${Jwt.accessExpiry}")
    private int access_expiry;

    @Value("${Jwt.refreshExpiry}")
    private int refresh_expiry;

    @Value("${frontend.URL}")
    private String frontend_Url;
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        // get the authentication object
        OAuth2AuthenticationToken token =
                (OAuth2AuthenticationToken) authentication;

        Map<String,Object> userDetail= token.getPrincipal().getAttributes();
//        System.out.println("urletekt"+userDetail.toString());
        String email= (String)userDetail.get("email");
        String username=(String) userDetail.get("name");
        // let's check the existence of this user
        try{


        Map<String,Object> attribute= new HashMap<>();
        attribute.put("email",email);
        attribute.put("username",username);

        String access_token= jwtService.generateToken(email,attribute,access_expiry);

        String refresh_token=jwtService.generateToken(email,attribute,refresh_expiry);

            User user = userService.getByEmail(email);
            if (user == null) {
                user = new User();
                user.setEmail(email);
                // Set other user fields if needed
            }
            user.setRefreshToken(refresh_token);
            userService.createUser(user);  // Save or update user with refresh token

            // Create cookies
            Cookie accessCookie = new Cookie("access_token", access_token);
            accessCookie.setHttpOnly(true);
            accessCookie.setSecure(true);
            accessCookie.setPath("/");
            accessCookie.setMaxAge(access_expiry);

            Cookie refreshCookie = new Cookie("refresh_token", refresh_token);
            refreshCookie.setHttpOnly(true);
            refreshCookie.setSecure(true);
            refreshCookie.setPath("/");
            refreshCookie.setMaxAge(refresh_expiry);


        response.addCookie(accessCookie);
        response.addCookie(refreshCookie);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        response.sendRedirect(frontend_Url);
    }
}
