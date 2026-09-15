package com.project.taskmanager.dto;

import java.time.LocalDate;

public class TaskResponseDto {

    Long id;
    String taskName;
    String description;
    String status;
    String priority;
    LocalDate endDate;
    LocalDate startDate;

    public TaskResponseDto() {}
    public TaskResponseDto(Long id, String taskName, String description, String status, String priority,  LocalDate endDate, LocalDate startDate) {
        this.taskName = taskName;
        this.id=id;
        this.description = description;
        this.status = status;
        this.priority = priority;
        this.endDate = endDate;
        this.startDate=startDate;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
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

    public LocalDate getStartDate() {
        return startDate;
    }
    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }
}

