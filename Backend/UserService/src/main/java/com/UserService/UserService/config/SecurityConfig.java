package com.UserService.UserService.config;

import jakarta.servlet.Filter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;

import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationFilter;


@Configuration
@EnableWebSecurity
public class SecurityConfig {
    private final AuthSuccessHandler authSuccessHandler;
    private final GeneralFilter generalFilter;
    SecurityConfig (AuthSuccessHandler authSuccessHandler,GeneralFilter generalFilter){
this.authSuccessHandler=authSuccessHandler;
this.generalFilter=generalFilter;
    }
@Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{

return http
        .csrf(csrf -> csrf.disable())
        .sessionManagement(session->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .authorizeHttpRequests(auth->
                auth
                        .requestMatchers("/user/post/**").authenticated()
//                        .requestMatchers(HttpMethod.GET,"/user/{username}/**").authenticated()
                        .anyRequest().permitAll()
                )
        .addFilterBefore( generalFilter, AuthenticationFilter.class)
        .formLogin(AbstractHttpConfigurer::disable)
        .httpBasic(AbstractHttpConfigurer::disable)
        .logout(logout->logout.invalidateHttpSession(true))
        .oauth2Login(oauth->
                oauth.successHandler(authSuccessHandler)
                )
        .build();
    }

//    @Bean
//    CorsConfigurationSource corsConfigurationSource(){
//    return new CorsConfiguration();
//    }
    @Bean
    public PasswordEncoder passwordEncoder(){
        return  new BCryptPasswordEncoder(12);
    }


}
