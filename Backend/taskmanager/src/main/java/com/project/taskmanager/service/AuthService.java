package com.project.taskmanager.service;

import com.project.taskmanager.dto.LoginDto;
import com.project.taskmanager.dto.RegisterDto;
import com.project.taskmanager.entity.Users;

import java.util.List;
import java.util.Optional;

public interface AuthService {



    void register(RegisterDto registerDto);

    LoginDto login(LoginDto loginDto);

}
