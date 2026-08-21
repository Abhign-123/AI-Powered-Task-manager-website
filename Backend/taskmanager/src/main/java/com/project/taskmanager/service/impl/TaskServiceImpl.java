package com.project.taskmanager.service.impl;

import com.project.taskmanager.dto.TaskDto;
import com.project.taskmanager.dto.TaskPatchRequest;
import com.project.taskmanager.dto.TaskResponseDto;
import com.project.taskmanager.entity.Tasks;
import com.project.taskmanager.entity.Users;
import com.project.taskmanager.repository.TaskRepository;
import com.project.taskmanager.service.TaskService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.time.LocalDate;
import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {
    @Autowired
    private TaskRepository taskRepository;

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
    public void addTask(TaskDto taskDto, Users user) throws ParseException {
        Tasks task = new Tasks();
        task.setDescription(taskDto.getDescription());
        task.setPriority(taskDto.getPriority());
        task.setName(taskDto.getTaskName());
        task.setDueDate(LocalDate.parse(taskDto.getEndDate()));
        task.setCreationDate(LocalDate.now());
        task.setStatus(taskDto.getStatus());

        task.setUser(user);
        taskRepository.save(task);

    }
    
    @Transactional
    @Override
	public TaskResponseDto patchTask(Long id, TaskPatchRequest request) {
    	Tasks task = taskRepository.findById(id)
    			.orElseThrow(() -> new RuntimeException("Task not Found"));
    	
    	if(request.getTaskName() != null) {
    		task.setName(request.getTaskName());
    	}
    	
    	if(request.getDescription() != null) {
    		task.setDescription(request.getDescription());
    	}
    	
    	if(request.getStatus() != null) {
    		task.setStatus(request.getStatus());
    	}
    	
    	if(request.getPriority() != null) {
    		task.setPriority(request.getPriority());
    	}
    	
    	if(request.getDueDate() != null) {
    		task.setDueDate(request.getDueDate());
    	}
    	
		taskRepository.save(task);
		
		return new TaskResponseDto(task.getId(), task.getName(), task.getDescription(), task.getStatus(), task.getPriority(), task.getDueDate(), task.getCreationDate());
	}

	@Transactional
    @Override
    public void deleteTask(Long id) {    	
    	taskRepository.deleteById(id);
    }
}
