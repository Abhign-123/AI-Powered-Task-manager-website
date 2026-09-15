export interface Task {
    id: number;
    taskName: string;
    description: string;
    status: string;
    priority: string;
    startDate: string;
    endDate: string;
}

export interface CreateTask {
    taskName: string;
    description: string;
    status: string;
    priority: string;
    startDate: string;
    endDate: string;
}