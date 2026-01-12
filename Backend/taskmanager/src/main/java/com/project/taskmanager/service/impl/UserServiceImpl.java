package com.project.taskmanager.service.impl;

import com.project.taskmanager.dto.LoginDto;
import com.project.taskmanager.dto.RegisterDto;
import com.project.taskmanager.entity.Users;
import com.project.taskmanager.repository.UserRepository;
import com.project.taskmanager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {


    @Autowired
    private UserRepository userRepository;
    @Override
    public List<Users> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<Users> getUserById(long id) {
        return userRepository.findById(id);
    }

    @Override
    public void register(RegisterDto registerDto) {
        Users user = new Users();
        user.setFullName(registerDto.getFullName());
        user.setEmail(registerDto.getEmail());
        user.setPassword(registerDto.getPassword());
        user.setRole(registerDto.getRole());

        userRepository.save(user);
    }

    @Override
    public LoginDto login( LoginDto loginDto) {
        Users user = userRepository.findByEmail(loginDto.getEmail());
        if(user==null){
            throw new BadCredentialsException("Invalid Credentials");
        }
        if(!user.getPassword().equals(loginDto.getPassword())){
            throw new BadCredentialsException("Invalid Credentials");

        }
        return loginDto;
    }
}
