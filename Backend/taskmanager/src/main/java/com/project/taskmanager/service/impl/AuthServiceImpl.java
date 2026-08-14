package com.project.taskmanager.service.impl;


import com.project.taskmanager.dto.LoginDto;
import com.project.taskmanager.dto.RegisterDto;
import com.project.taskmanager.entity.Users;
import com.project.taskmanager.repository.UserRepository;
import com.project.taskmanager.security.JwtUtil;
import com.project.taskmanager.service.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseCookie;
import org.springframework.security.authentication.AuthenticationManager;
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

    @Autowired
    private JwtUtil jwtUtil;

    @Value("${jwt.expiration}")
    private long jwtExpiration;


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
    public String login(LoginDto loginDto) {
//
        Authentication authenticate = authenticationManager.authenticate
                (new UsernamePasswordAuthenticationToken
                        (loginDto.getEmail(), loginDto.getPassword()));
        String jwtToken=  jwtUtil.generateToken(loginDto.getEmail());

        long cookieExpiration = jwtExpiration / 1000; // Convert milliseconds to seconds

        ResponseCookie jwtCookie= ResponseCookie.from("jwtToken", jwtToken)
                .httpOnly(true)
                .secure(false)
                .path("/")
                .maxAge(cookieExpiration) // 1 day
                .sameSite("None")
                .build();

        return jwtCookie.toString();
    }
}
