package com.project.taskmanager.service.impl;

import com.project.taskmanager.entity.Tasks;
import com.project.taskmanager.entity.Users;
import com.project.taskmanager.repository.TaskRepository;
import com.project.taskmanager.repository.UserRepository;
import com.project.taskmanager.service.TaskService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.config.Task;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
@Service
public class TaskServiceImpl implements TaskService {
    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<Tasks> getAllTasks(long id) {
        return taskRepository.findAll();
    }

    @Override
    public List<Tasks> getTasksByUserId(long userId) {
        return taskRepository.findTaskByUserId(userId);
    }
    @Transactional
    @Override
    public void addTask() throws ParseException {
        Tasks task = new Tasks();
        task.setDescription("Add Task low");
        task.setPriority("Low");
        task.setName("Add Task");
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        task.setDueDate(sdf.parse("2026-01-07"));
        task.setStatus("Open");
        Users user = userRepository.findById(1L)
                .orElseThrow(() -> new RuntimeException("User not found"));
        task.setUserId(user);
        taskRepository.save(task);

    }
}
