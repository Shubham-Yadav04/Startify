package com.UserService.UserService.services;


import com.UserService.UserService.models.User;
import com.UserService.UserService.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User getByUsername(String username){
        try {
            return userRepository.findByUsername(username);
        }
        catch (Exception e){
            System.out.println("error in user fetching "+e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public User getByEmail(String email){
        try{
            return userRepository.findByEmail(email);
        }catch (Exception e){
            System .out.println("error in user fetching through email"+ e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public User createUser(User user){
        try{
            return userRepository.save(user);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
