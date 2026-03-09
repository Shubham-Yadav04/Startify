package com.Post.PostService.controller;

import com.Post.PostService.modal.CommentModal;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



import java.util.List;

@FeignClient(name = "COMMENT-SERVICE")
public interface CommentController {

    @GetMapping("/comment/post/{postId}")

    public ResponseEntity<List<CommentModal>> getPostComments(@PathVariable("postId") String postId);
}
