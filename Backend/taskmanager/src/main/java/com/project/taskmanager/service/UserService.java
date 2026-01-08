package com.project.taskmanager.service;

import com.project.taskmanager.dto.LoginDto;
import com.project.taskmanager.dto.RegisterDto;
import com.project.taskmanager.entity.Users;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

public interface UserService {

    List<Users> getAllUsers();

    Optional<Users> getUserById(long id);

    void register(RegisterDto registerDto);

    LoginDto login(LoginDto loginDto);

}
