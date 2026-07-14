package com.project.taskmanager.service.impl;

import com.project.taskmanager.dto.TaskDto;
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
import java.time.LocalDateTime;
import java.util.List;
@Service
public class TaskServiceImpl implements TaskService {
    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    private UserRepository userRepository;

    private TaskDto mapToDto(Tasks tasks){
        TaskDto dto = new TaskDto();
        dto.setId(tasks.getId());
        dto.setTaskName(tasks.getName());
        dto.setPriority(tasks.getPriority());
        dto.setStatus(tasks.getStatus());
        dto.setDescription(tasks.getDescription());
        dto.setStartDate(tasks.getCreationDate().toString());
        dto.setEndDate(tasks.getDueDate().toString());

        return dto;
    }

    @Override
    public List<Tasks> getAllTasks(long id) {
        return taskRepository.findAll();
    }

    @Override
    public List<TaskDto> getTasksByUserId(long userId) {

        List<Tasks> tasks = taskRepository.findTaskByUserId(userId);
        return tasks.stream().map(this::mapToDto).toList();
    }
    @Transactional
    @Override
    public void addTask() throws ParseException {
        Tasks task = new Tasks();
        task.setDescription("Add Task low");
        task.setPriority("Low");
        task.setName("Add Task");
        task.setDueDate(LocalDateTime.now());
        task.setStatus("Open");
        Users user = userRepository.findById(1L)
                .orElseThrow(() -> new RuntimeException("User not found"));
        task.setUserId(user);
        taskRepository.save(task);

    }
}
