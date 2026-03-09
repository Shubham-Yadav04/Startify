package com.UserService.UserService.controller;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;


@FeignClient(name="POST-SERVICE")
public interface PostController {

    @GetMapping("/post/user/{userId}")
    public List<Object> getUserPosts(@PathVariable("userId") String userId);


}
