package com.project.taskmanager.controller;

import com.project.taskmanager.dto.LoginDto;
import com.project.taskmanager.dto.RegisterDto;
import com.project.taskmanager.entity.Users;
import com.project.taskmanager.service.AuthService;
import com.project.taskmanager.service.TaskService;
import com.project.taskmanager.service.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/auth")
public class AuthController {


    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public void addregisterDetails(@RequestBody RegisterDto registerDto)
    {
       authService.register(registerDto);
        //return  ResponseEntity.ok().body(registerDto);
    }

    @PostMapping("/login")
    public ResponseEntity<String> addloginDetails(@RequestBody LoginDto loginDto)
    {
        return ResponseEntity.ok(authService.login(loginDto));
    }
}
