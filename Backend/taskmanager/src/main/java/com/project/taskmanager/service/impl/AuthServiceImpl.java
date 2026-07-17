package com.project.taskmanager.service.impl;


import com.project.taskmanager.dto.LoginDto;
import com.project.taskmanager.dto.RegisterDto;
import com.project.taskmanager.entity.Users;
import com.project.taskmanager.repository.UserRepository;
import com.project.taskmanager.service.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;



@Service
public class AuthServiceImpl implements AuthService {


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;


    @Override
    public void register(RegisterDto registerDto) {
        Users user = new Users();
        user.setFullName(registerDto.getFullName());
        user.setEmail(registerDto.getEmail());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));
        user.setRole(registerDto.getRole());

         userRepository.save(user);
    }

    @Override
    public LoginDto login( LoginDto loginDto) {
//
        Authentication authenticate = authenticationManager.authenticate
                (new UsernamePasswordAuthenticationToken
                        (loginDto.getEmail(), loginDto.getPassword()));
        return loginDto;
    }
}
