package com.project.taskmanager.repository;

import com.project.taskmanager.entity.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TaskRepository extends JpaRepository<Tasks, Long> {

    @Query("SELECT t FROM Tasks t WHERE t.userId.id = :userId")
    List<Tasks> findTaskByUserId(@Param("userId") long userId);
}
