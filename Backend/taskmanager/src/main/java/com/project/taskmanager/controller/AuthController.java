package com.project.taskmanager.controller;

import com.project.taskmanager.dto.LoginDto;
import com.project.taskmanager.dto.RegisterDto;
import com.project.taskmanager.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        return ResponseEntity.ok().header(
                HttpHeaders.SET_COOKIE , authService.login(loginDto)).body("Login Successful");
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout() {

        return ResponseEntity.ok().header(
                HttpHeaders.SET_COOKIE , authService.logout()).body("Logout Successful");

    }

    @GetMapping("/me")
    public ResponseEntity<String> checkSession(@CookieValue (value = "jwtToken", required = false) String jwtToken) {

        String result = authService.checkSession(jwtToken);

        if (result.equals("No active session") || result.equals("Invalid session")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(result);
        }

        return ResponseEntity.ok(result);

    }
}
