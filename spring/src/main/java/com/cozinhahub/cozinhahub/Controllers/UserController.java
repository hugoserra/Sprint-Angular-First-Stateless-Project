package com.cozinhahub.cozinhahub.Controllers;

import org.springframework.web.bind.annotation.RestController;

import com.cozinhahub.cozinhahub.Entitys.UserEntity;
import com.cozinhahub.cozinhahub.Services.UserService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
public class UserController {
    
    @Autowired
    private UserService userService;

    @PostMapping("user")
    public ResponseEntity<UserEntity> save(@RequestBody UserEntity user) 
    {
        return ResponseEntity.ok(userService.save(user));
    }
    
    @GetMapping("users/{id}")
    public ResponseEntity<Optional<UserEntity>> get_users_by_name(@PathVariable Long id) 
    {
        return ResponseEntity.ok(userService.findById(id));
    }

    @GetMapping("users")
    public ResponseEntity<List<UserEntity>> get_users() 
    {
        return ResponseEntity.ok(userService.findAll());
    }
    
}
