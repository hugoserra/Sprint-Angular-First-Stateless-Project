package com.cozinhahub.cozinhahub.Controllers;

import org.springframework.web.bind.annotation.RestController;

import com.cozinhahub.cozinhahub.Entitys.UserEntity;
import com.cozinhahub.cozinhahub.Services.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;




@RestController
public class UserController {
    
    @Autowired
    private UserService userService;

    @PostMapping("register")
    public String register(@RequestBody UserEntity user) 
    {
        userService.register(user);
        return "Usuário registrado!";
    }
    
    @PostMapping("get_users_by_name")
    public ResponseEntity<List<UserEntity>> get_users_by_name(@RequestBody UserEntity request) 
    {
        return ResponseEntity.ok(userService.find_by_name(request.getName()));
    }
    
}
