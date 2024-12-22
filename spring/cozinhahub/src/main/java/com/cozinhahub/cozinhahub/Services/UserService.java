package com.cozinhahub.cozinhahub.Services;

import java.beans.JavaBean;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import com.cozinhahub.cozinhahub.Entitys.UserEntity;
import com.cozinhahub.cozinhahub.Repositorys.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void register(UserEntity user)
    {
        Optional<UserEntity> userOptional = userRepository.findByEmail(user.getEmail());

        if(userOptional.isEmpty())
            userRepository.save(user);
    }

    public List<UserEntity> find_by_name(String name)
    {
        List<UserEntity> users = userRepository.searchByNameContaining(name);
        return users;
    }
}
