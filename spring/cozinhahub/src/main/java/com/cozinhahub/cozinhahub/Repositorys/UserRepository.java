package com.cozinhahub.cozinhahub.Repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cozinhahub.cozinhahub.Entitys.UserEntity;
import java.util.Optional;
import java.util.List;



@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long>{
    Optional<UserEntity> findByEmail(String email);
    List<UserEntity> findByName(String name);
    List<UserEntity> searchByNameContaining(String name);
    
}