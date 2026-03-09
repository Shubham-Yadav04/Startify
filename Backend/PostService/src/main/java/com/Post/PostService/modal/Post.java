package com.Post.PostService.modal;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Post {

    @Id
    private String postId= UUID.randomUUID().toString();

private String thumbnail;
    private String HTML;
    private String userId;
    private String slug;
    private List<String> tags;
    private String industry;
    private String title;

private Date postedAt= new Date();
    @Transient
    List<CommentModal> comments;
}
