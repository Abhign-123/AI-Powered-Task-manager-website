package com.project.taskmanager.controller;

import com.project.taskmanager.dto.TaskDto;
import com.project.taskmanager.dto.TaskPatchRequest;
import com.project.taskmanager.dto.TaskResponseDto;
import com.project.taskmanager.entity.Users;
import com.project.taskmanager.repository.UserRepository;
import com.project.taskmanager.service.TaskService;
import org.springframework.security.core.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

@RestController
@RequestMapping("/users")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @Autowired
    UserRepository userRepository;

    @GetMapping("/userTasks")
    public ResponseEntity<List<TaskResponseDto>> getUserTasks(Authentication authentication) {

        String email= authentication.getName();
        Users user = userRepository.findByEmail(email);

        return ResponseEntity.ok(taskService.getTasksByUserId(user.getId()));
    }

    @PostMapping("/addTask")
    public ResponseEntity<String> addTask(@RequestBody TaskDto taskDto, Authentication authentication) throws ParseException {
    	String email= authentication.getName();
        Users user = userRepository.findByEmail(email);
        
        taskService.addTask(taskDto, user);
        return ResponseEntity.ok("Task added successfully");
    }
    
    @PatchMapping("/{id}")
    public ResponseEntity<TaskResponseDto> patchTask(@PathVariable Long id, @RequestBody TaskPatchRequest request) {
    	return ResponseEntity.ok(taskService.patchTask(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
    	taskService.deleteTask(id);
    	return ResponseEntity.noContent().build();
    }
}
