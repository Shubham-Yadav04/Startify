package com.Post.PostService.modal;

import lombok.*;

@Data
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class CommentModal {
    private String userId;
    private String content;
    private Long likes;

}
