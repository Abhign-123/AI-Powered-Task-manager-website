package com.project.taskmanager.dto;

import com.project.taskmanager.entity.Users;

public class TaskDto {

    Users user;
    String taskName;
    String description;
    String status;
    String priority;
    String endDate;

    public TaskDto() {}
    public TaskDto(String taskName, String description, String status, String priority,  String endDate, Users user) {
        this.taskName = taskName;
        this.description = description;
        this.status = status;
        this.priority = priority;
        this.endDate = endDate;
        this.user = user;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }
}
