package com.UserService.UserService.models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
@Id
    private String userId= UUID.randomUUID().toString();
@Field
    private String username;
@Field
private Date joinedAt= new Date();
@Transient
   private List<Object> posts;
@Field

private String refreshToken;
@Field
private String email;
}
