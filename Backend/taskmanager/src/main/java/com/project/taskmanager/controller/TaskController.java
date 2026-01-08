package com.project.taskmanager.controller;

import com.project.taskmanager.entity.Tasks;
import com.project.taskmanager.service.TaskService;
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

    @GetMapping("/userTasks/{userId}")
    public ResponseEntity<List<Tasks>> getUserTasks(@PathVariable long userId){
        return new ResponseEntity<>(task.getTasksByUserId(userId), HttpStatus.OK);
    }

    @PostMapping("/addTask")
    public ResponseEntity<String> addTask() throws ParseException {
        task.addTask();
        return ResponseEntity.ok("Task added successfully");
    }

}
