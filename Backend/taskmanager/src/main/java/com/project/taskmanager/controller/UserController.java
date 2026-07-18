package com.project.taskmanager.controller;

import com.project.taskmanager.entity.Users;
import com.project.taskmanager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserService userService;


    @GetMapping
    public List<Users> aLlUsers(){

         return userService.getAllUsers();

    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Users>> getUserbyId(@PathVariable long id){

        return new ResponseEntity<>(userService.getUserById(id), HttpStatus.OK);

    }






}
