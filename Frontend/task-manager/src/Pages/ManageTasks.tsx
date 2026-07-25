import { useState } from "react";
import TaskForm from "../components/TaskForm";
import Filters from "../components/Filters";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../hooks/useTasks";
import type { Task } from "../types/Task";

const ManageTasks = () => {

    const { tasks } = useTasks();
    const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
    const [filters, setFilters] = useState({ status: "", priority: [] as string[] });

    const filteredTasks = tasks.filter((task) => {
        const matchedPriority = filters.priority.length === 0 || filters.priority.includes(task.priority);
        const matchedStatus = filters.status === "" || filters.status.includes(task.status);

        return matchedPriority && matchedStatus;
    });

    const handleOpenCreate = () => {
        setTaskToEdit(null);
        setIsTaskFormOpen(true);
    };

    const handleOpenEdit = (task: Task) => {
        setTaskToEdit(task);
        setIsTaskFormOpen(true);
    };

    const handleCloseForm = () => {
        setTaskToEdit(null);
        setIsTaskFormOpen(false);
    };

    return (
        <div className="min-h-[calc(100vh-120px)] mx-[2vw] px-5">

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-black">Manage Tasks</h2>
                <button 
                    className="px-4 py-2 bg-[#d98917] text-white rounded-md hover:bg-yellow-700"
                    onClick={() => handleOpenCreate()}
                >
                    Add Task
                </button>
            </div>

            <TaskForm isOpen={isTaskFormOpen} onClose={handleCloseForm} task={taskToEdit} key={taskToEdit?.id || "new-task-form"}/>

            {/* MAIN CONTENT */}
            <div className="flex flex-col md:flex-row gap-8 h-[75vh]">

                {/* FILTERS — top on small screens, left on large screens */}
                <div className="w-full md:w-64">
                    <Filters page="managetasks" onFilterChange={setFilters} />
                </div>

                {/* TASK CARDS */}
                <div className="flex-1 bg-[#f2e3ce] h-full p-6 rounded-xl shadow-md">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2 h-full custom-scrollbar overflow-y-auto">
                        {filteredTasks.map((task) => (
                            <TaskCard
                                key={task.id}
                                task={task}
                            >
                                <div className="flex justify-center pt-4 gap-3">
                                    <button
                                        className="px-4 py-1 bg-[#d98917] text-white rounded-md text-sm hover:bg-yellow-600"
                                        onClick={() => handleOpenEdit(task)}
                                    >
                                        Edit
                                    </button>
                                    <button className="px-4 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600">
                                        Delete
                                    </button>
                                </div>
                            </TaskCard>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageTasks;