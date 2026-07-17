package com.project.taskmanager.service;

import com.project.taskmanager.entity.Users;

import java.util.List;
import java.util.Optional;

public interface UserService {

    List<Users> getAllUsers();

    Optional<Users> getUserById(long id);
}
