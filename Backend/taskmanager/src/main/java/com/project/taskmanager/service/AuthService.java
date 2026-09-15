package com.project.taskmanager.service;

import com.project.taskmanager.dto.LoginDto;
import com.project.taskmanager.dto.RegisterDto;

public interface AuthService {
    void register(RegisterDto registerDto);

    String login(LoginDto loginDto);

    String logout();

    String checkSession(String jwtToken);

}
