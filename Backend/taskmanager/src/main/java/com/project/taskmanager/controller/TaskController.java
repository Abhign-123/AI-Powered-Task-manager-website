package com.project.taskmanager.controller;

import com.project.taskmanager.dto.TaskDto;
import com.project.taskmanager.dto.TaskResponseDto;
import com.project.taskmanager.entity.Tasks;
import com.project.taskmanager.entity.Users;
import com.project.taskmanager.repository.UserRepository;
import com.project.taskmanager.service.TaskService;
import org.springframework.security.core.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

@RestController
@RequestMapping("/users")
public class TaskController {
    @Autowired
    private TaskService task;

    @Autowired
    UserRepository userRepository;

    @GetMapping("/userTasks")
    public ResponseEntity<List<TaskResponseDto>> getUserTasks(Authentication authentication) {

        String email= authentication.getName();
        Users user = userRepository.findByEmail(email);

        return ResponseEntity.ok(task.getTasksByUserId(user.getId()));
    }

    @PostMapping("/addTask")
    public ResponseEntity<String> addTask(@RequestBody TaskDto taskDto) throws ParseException {
        System.out.println("DEBUG: PostMapping /addTask was reached!");
        task.addTask(taskDto);
        return ResponseEntity.ok("Task added successfully");
    }

}
