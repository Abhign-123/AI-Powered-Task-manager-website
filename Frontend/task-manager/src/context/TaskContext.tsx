import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Task } from "../types/Task";
import { tasksApi } from "../api/taskApi";

interface TaskContextType {
    tasks: Task[];
    error: string | null;
    getTasks :()=> Promise<void>
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children } : { children: ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [error, setError] = useState<string | null>(null);

    const getTasks = async () => {
            try {
                const response = await tasksApi.getTasksByUser();
                setTasks(response.data);
            } catch (error) {
                setError((error as Error).message || "Failed to get Tasks");
            }
        }

    
    useEffect(() => {
        
        getTasks();
    }, []);

    return (
        <TaskContext.Provider
            value = {{ tasks, error, getTasks }}
        >
            {children}
        </TaskContext.Provider>
    )
}

export { TaskContext };