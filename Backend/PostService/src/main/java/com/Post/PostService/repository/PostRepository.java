package com.Post.PostService.repository;

import com.Post.PostService.modal.Post;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends MongoRepository<Post,String> {
   public  List<Post> findByUserId(String userId);
}
