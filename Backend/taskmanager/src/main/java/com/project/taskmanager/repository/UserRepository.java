package com.project.taskmanager.repository;



import com.project.taskmanager.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<Users, Long> {

    Users findByEmail(String email);
}
