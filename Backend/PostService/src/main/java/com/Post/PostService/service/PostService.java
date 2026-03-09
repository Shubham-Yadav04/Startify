package com.Post.PostService.service;

import com.Post.PostService.controller.CommentController;
import com.Post.PostService.modal.CommentModal;
import com.Post.PostService.modal.Post;
import com.Post.PostService.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Date;
import java.util.List;
import java.util.Objects;

@Service
public class PostService {
@Autowired
    CommentController commentController;
    private final PostRepository postRespository;

    PostService (PostRepository postRespository){
        this.postRespository= postRespository;
    }

    public Post getPostById(String postId){
        try{
            Post post= postRespository.findById(postId).get();
            List<CommentModal> comments= getPostComment(post.getPostId());
            post.setComments(comments);
            return post;
        } catch (Exception e) {
            System.out.println("error while fetching post by Id"+e.getMessage());
           throw  new RuntimeException(e.getMessage());
        }
    }

    public List<Post> getPostsByUserId(String userId){
        try{
            List<Post> posts=postRespository.findByUserId(userId);
            for(Post post:posts ){
              List<CommentModal> comments= getPostComment(post.getPostId());
               post.setComments(comments);
            }
            return posts;
        } catch (Exception e) {
            System.out.println("error while fetching post by Id");
            return null;
        }
    }

    public Post createPost(Post post){
        try{
          return postRespository.save(post);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }

    public Post updatePost(Post post){
        try{
            return postRespository.save(post);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

public void deleteById(String postId){
        try{
            postRespository.deleteById(postId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
}

public List<CommentModal> getPostComment(String postId){
        try{
            ResponseEntity<List<CommentModal>> response = commentController.getPostComments(postId);
            return response.getBody();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
}

}
