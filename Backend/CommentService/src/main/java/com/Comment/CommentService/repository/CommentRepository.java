package com.Comment.CommentService.repository;

import com.Comment.CommentService.modal.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends MongoRepository<Comment,String> {
    public List<Comment> findAllByPostId(String postId);

}
