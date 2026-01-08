package com.project.taskmanager.service;

import com.project.taskmanager.entity.Tasks;
import org.springframework.stereotype.Service;


import java.text.ParseException;
import java.util.List;

public interface TaskService {

    public List<Tasks> getAllTasks(long id);
    public List<Tasks> getTasksByUserId(long userId);
    public void addTask() throws ParseException;
}
