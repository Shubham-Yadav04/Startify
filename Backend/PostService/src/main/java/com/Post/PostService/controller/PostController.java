package com.Post.PostService.controller;

import com.Post.PostService.modal.CommentModal;
import com.Post.PostService.modal.Post;
import com.Post.PostService.service.PostService;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.xml.stream.events.Comment;
import java.util.List;

@RestController
@RequestMapping("/post")
public class PostController {
@Autowired
RestTemplate restTemplate;
    private final PostService postService;

    PostController(PostService postService) {
        this.postService = postService;

    }

    @GetMapping("health-check")
    public ResponseEntity<?> healthCheck(){
        return new ResponseEntity<>("Success || everything is ok ", HttpStatus.OK);
    }

//    @CircuitBreaker(name="POSTCall")
//    @Retry(name = "POSTCallRetry")
    @GetMapping("/user/{userId}")
    public List<Post> getUserPosts(@PathVariable("userId") String userId){
        try{
            return postService.getPostsByUserId(userId);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            throw new RuntimeException(e);
        }
    }

    @GetMapping("/{postId}")
    public ResponseEntity<?> getPostById(@PathVariable("postId") String postId) {
        try {

            Post post= postService.getPostById(postId);
            System.out.println(postId);
            return new ResponseEntity<>(post,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/")
    public ResponseEntity<?> createPost(@RequestBody Post post) {
        try {
            Post createdPost= postService.createPost(post);
            return new ResponseEntity<>(createdPost, HttpStatus.CREATED);
        } catch (Exception e) {
            System.out.println("error while creating the post "+ e.getMessage());
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{postId}")
    public ResponseEntity<?> updatePost(@RequestBody Post post){
        try{
           Post updatedPost= postService.updatePost(post);
            return new ResponseEntity<>(updatedPost,HttpStatus.CREATED);
        } catch (Exception e) {
            System.out.println("error occured while updating "+ e.getMessage());
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{postId}")
    public ResponseEntity<String> deletePost(@PathVariable("postId") String postId){
        try{
            postService.deleteById(postId);
            return new ResponseEntity<>("Deleted Post",HttpStatus.OK);
        } catch (Exception e) {
            System.out.println("error occur while deleting post "+ postId+ e.getMessage()) ;
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{postId}/comments")
    public ResponseEntity<?> getAllComments(String postId ){
        try{
            List<CommentModal> comments= postService.getPostComment(postId);
            return new ResponseEntity<>(comments,HttpStatus.OK);
        } catch (Exception e) {
            System.out.println("error in comment fetching " + e.getMessage());
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
