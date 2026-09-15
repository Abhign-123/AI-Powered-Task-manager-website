package com.project.taskmanager.service;

import com.project.taskmanager.dto.TaskDto;
import com.project.taskmanager.dto.TaskPatchRequest;
import com.project.taskmanager.dto.TaskResponseDto;
import com.project.taskmanager.entity.Tasks;
import com.project.taskmanager.entity.Users;

import java.text.ParseException;
import java.util.List;

public interface TaskService {

    public List<Tasks> getAllTasks(long id);
    public List<TaskResponseDto> getTasksByUserId(long userId);
    public void addTask( TaskDto taskDto, Users user) throws ParseException;
    public TaskResponseDto patchTask(Long id, TaskPatchRequest request);
    public void deleteTask(Long id);
}
