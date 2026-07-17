package com.project.taskmanager.service.impl;

import com.project.taskmanager.entity.Users;
import com.project.taskmanager.repository.UserRepository;
import com.project.taskmanager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;

    @Override
    public List<Users> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<Users> getUserById(long id) {
        return userRepository.findById(id);
    }
}
