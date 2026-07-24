package com.project.taskmanager.service.impl;

import com.project.taskmanager.dto.TaskDto;
import com.project.taskmanager.dto.TaskResponseDto;
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
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
@Service
public class TaskServiceImpl implements TaskService {
    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    private UserRepository userRepository;

    private TaskResponseDto mapToDto(Tasks tasks){
        TaskResponseDto dto = new TaskResponseDto();
        dto.setId(tasks.getId());
        dto.setTaskName(tasks.getName());
        dto.setPriority(tasks.getPriority());
        dto.setStatus(tasks.getStatus());
        dto.setDescription(tasks.getDescription());
        dto.setStartDate(tasks.getCreationDate());
        dto.setEndDate(tasks.getDueDate());

        return dto;
    }

    @Override
    public List<Tasks> getAllTasks(long id) {
        return taskRepository.findAll();
    }

    @Override
    public List<TaskResponseDto> getTasksByUserId(long userId) {

        List<Tasks> tasks = taskRepository.findTaskByUserId(userId);
        return tasks.stream().map(this::mapToDto).toList();
    }
    @Transactional
    @Override
    public void addTask(TaskDto taskDto) throws ParseException {
        Tasks task = new Tasks();
        task.setDescription(taskDto.getDescription());
        task.setPriority(taskDto.getPriority());
        task.setName(taskDto.getTaskName());
        task.setDueDate(LocalDate.parse(taskDto.getEndDate()));
        task.setCreationDate(LocalDate.now());
        task.setStatus(taskDto.getStatus());

        task.setUser(taskDto.getUser());
        taskRepository.save(task);

    }
}
