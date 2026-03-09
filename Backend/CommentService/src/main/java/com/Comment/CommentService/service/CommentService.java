package com.Comment.CommentService.service;

import com.Comment.CommentService.modal.Comment;
import com.Comment.CommentService.repository.CommentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    private final CommentRepository commentRepository;

    CommentService (CommentRepository commentRepository){
        this.commentRepository=commentRepository;
    }

    public Comment getCommentById(String commentId){
        try{
            return commentRepository.findById(commentId).orElse(null);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    public List<Comment> getCommentsOnPost(String postId){
        try{
            return commentRepository.findAllByPostId(postId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    public Comment createComment(Comment comment){
        try{
            return commentRepository.save(comment);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    public Comment updateComment(String commentId,Comment comment){
        try{
            Comment currentComment= commentRepository.findById(commentId).get();
            if(comment.getLikes()>0) currentComment.setLikes(comment.getLikes());
            if(!comment.getContent().isEmpty()) currentComment.setContent(comment.getContent());
            return commentRepository.save(currentComment);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }
    public Comment updateCommentLikes(String commentId,Long likes){
        try{
            Comment currentComment = commentRepository.findById(commentId).get();
            currentComment.setLikes(likes);
            return commentRepository.save(currentComment);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }


    public String deleteComment(String commentId){
        try{
            commentRepository.deleteById(commentId);
            return "Deleted Comment";
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }
}
