package com.cozinhahub.cozinhahub.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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

    public Optional<UserEntity> findById(Long id)
    {
        Optional<UserEntity> users = userRepository.findById(id);
        return users;
    }

    public List<UserEntity> findAll()
    {
        List<UserEntity> users = userRepository.findAll();
        return users;
    }
}
