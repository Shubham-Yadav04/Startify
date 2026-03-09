package com.UserService.UserService.controller;


import com.UserService.UserService.models.User;
import com.UserService.UserService.services.UserService;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(originPatterns = {"http://localhost:5173/**","http://localhost:8081/**"},allowCredentials ="true",allowedHeaders = {"*"}) // i will add the other service address here
@RequestMapping("/user")

public class UserController {
    @Autowired
    UserService userService;
    PostController postController;
    @Autowired
    UserController(PostController postController){
        this.postController=postController;
    }
    @GetMapping("/health-check")
    public  ResponseEntity<?> healthCheck(){

        return new ResponseEntity<>("<h1>everything is OK</h1>", HttpStatus.OK);
    }


    @GetMapping("/username/{username}")
    public ResponseEntity<?> getUserByUsername(@PathVariable("username") String username){
        try{
            User user= userService.getByEmail(username);
            if(user==null) return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
            List<Object> posts= postController.getUserPosts(user.getUserId());
            user.setPosts(posts);
            return new ResponseEntity<>(user,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/email/{email}")
    public ResponseEntity<?> getUserByEmail(@PathVariable("email") String email){
        try{
            User user= userService.getByEmail(email);
            if(user==null) return new ResponseEntity<>("User Does Not Exist",HttpStatus.NOT_FOUND);
            List<Object> posts= postController.getUserPosts(user.getUserId());
            user.setPosts(posts);
            return new ResponseEntity<>(user,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    int count=0;


//    @CircuitBreaker(name = "POSTCall", fallbackMethod = "getPostByUserIdFallback")
    @Retry(name="POSTCallRetry", fallbackMethod = "RetryCallback")
    @GetMapping("/posts/{userId}")
    public ResponseEntity<List<Object>> getPostsByUserId (
            @PathVariable String userId) throws Exception{
        count++;
        List<Object> posts = postController.getUserPosts(userId);

        return ResponseEntity.ok(posts);
    }

    public ResponseEntity<List<Object>> getPostByUserIdFallback(
            String userId,
            Throwable ex) {

        // fallback response
        System.out.println("in fallback"+count);
        return ResponseEntity
                .status(HttpStatus.SERVICE_UNAVAILABLE)
                .body(new ArrayList<>());
    }
    public ResponseEntity<List<Object>> RetryCallback(
            String userId,
            Throwable ex) {

        // fallback response
        System.out.println("retrying .. the call");
        return ResponseEntity
                .status(HttpStatus.SERVICE_UNAVAILABLE)
                .body(new ArrayList<>());
    }

    @PostMapping("/")
    // create post routes to create the user
    public ResponseEntity<Object> createUser(@RequestBody User user){
        try{
            User createdUser = userService.createUser(user);
            return new ResponseEntity<>(createdUser,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
