package com.Comment.CommentService.modal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Comment{
    @Id
    private String commentId;
    private String content;
    private String postId;
    private String userId;
    private long likes;
}
