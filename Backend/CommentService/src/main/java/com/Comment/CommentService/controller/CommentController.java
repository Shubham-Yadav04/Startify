package com.Comment.CommentService.controller;

import com.Comment.CommentService.modal.Comment;
import com.Comment.CommentService.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comment")
public class CommentController {
    private final CommentService commentService;


    CommentController(CommentService commentService){
        this.commentService=commentService;
    }
    @GetMapping("health-check")
    public String healthCheck(){
        return "Comment Service working";
    }

    @PostMapping("/")
    public ResponseEntity<Comment> createComment(@RequestBody Comment comment){
        try{
            Comment createdComment= commentService.createComment(comment);
            return new ResponseEntity<>(createdComment,HttpStatus.OK);
        } catch (Exception e) {
           return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/post/{postId}")
    public ResponseEntity<List<Comment>> getPostComments(@PathVariable("postId") String postId){
        try{
            List<Comment> comments= commentService.getCommentsOnPost(postId);
            return new ResponseEntity<>(comments,HttpStatus.OK);
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{commentId}")
    public ResponseEntity<?> updateComment(@PathVariable("commentId") String commentId,@RequestBody Comment comment){
        try{
            Comment updatedComment= commentService.updateComment(commentId,comment);
            return new ResponseEntity<>(comment,HttpStatus.OK);
        } catch (Exception e) {
          return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/likes/{commentId}")
    public ResponseEntity<?> updateCommentLikes(@PathVariable("commentId") String commentId,@RequestBody Long likes){
        try{
            Comment updatedComment= commentService.updateCommentLikes(commentId,likes);
            return new ResponseEntity<>(updatedComment,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/{commentId}")
    public ResponseEntity<?> deleteComment(@PathVariable("commentId") String commentId){
        try{
            String deleteStatus= commentService.deleteComment(commentId);
            return new ResponseEntity<>(deleteStatus,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
