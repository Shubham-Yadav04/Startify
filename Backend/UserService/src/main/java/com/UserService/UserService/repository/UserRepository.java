package com.UserService.UserService.repository;


import com.UserService.UserService.models.User;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User,String> {
    public User findByUsername(String username);
    public User findByEmail(String email);

}
