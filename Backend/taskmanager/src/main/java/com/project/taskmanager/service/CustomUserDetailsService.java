package com.project.taskmanager.service;

import com.project.taskmanager.entity.Users;
import com.project.taskmanager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Users user= userRepository.findByEmail(username);
        if(user==null){
            throw new UsernameNotFoundException("User not found with email: " + username);
        }
        return User.builder()
               .username(user.getEmail())
               .password(user.getPassword())
               .build();
    }
}
