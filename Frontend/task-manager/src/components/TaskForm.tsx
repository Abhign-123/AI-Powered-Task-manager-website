import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import type { Task } from '../types/Task';
import { tasksApi } from "../api/taskApi";

const initialFormState = {
    taskName: "",
    description: "",
    endDate: "",
    priority: "medium",
    status: "pending"
};

const TaskForm: React.FC<{ isOpen: boolean; onClose: () => void, task?: Task | null }> = ({ isOpen, onClose, task = null }) => {

    const [form, setForm] = useState(() => {
        if (task) {
            return {
                taskName: task.taskName || "",
                description: task.description || "",
                endDate: task.endDate || "",
                priority: task.priority || "medium",
                status: task.status || "pending"
            };
        }
        return initialFormState;
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        tasksApi.addTask({
            taskName: form.taskName,
            description: form.description,
            endDate: form.endDate,
            priority: form.priority,
            status: form.status,
            id: 12,
            startDate: new Date().toISOString().split('T')[0] // Assuming startDate is today
        }).then(response => {   
            console.log("Task added successfully:", response.data); }
        )
        onClose();
    }

    if (!isOpen) return null;

    // The main container is the fixed overlay for the popup
    return (

        <div
            className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-10 p-4 sm:p-6"

        >

            {/* Form Card: Theme colors, maximum width, and shadow */}
            <div
                className="bg-[#f2e3ce] rounded-xl shadow-2xl w-full max-w-lg mx-auto transform transition-all duration-300"
            >
                {/* Form structure */}
                <form className="p-6 sm:p-8" onSubmit={handleSubmit}>

                    {/* Header with Placeholder Close Button */}
                    <div className="flex justify-between items-center mb-1 border-b border-gray-300 pb-3">
                        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                            <span className="text-[#e09440] text-3xl font-bold">
                                {task ? "✎" : "+"}
                            </span>
                            {task ? "Edit Task" : "Create New Task"}
                        </h2>
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 transition duration-150 p-1 rounded-full hover:bg-[#e7d4b8]"
                        >
                            {/* Close Icon (X) */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Task Title Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="taskTitle">Task Title</label>
                        <input
                            type="text"
                            id="taskTitle"
                            name="taskName"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e09440] focus:border-[#e09440] bg-white text-gray-800 shadow-sm"
                            placeholder="Enter task title"
                            value={form.taskName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Task Description Textarea */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="taskDescription">Task Description</label>
                        <textarea
                            id="taskDescription"
                            name="description"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e09440] focus:border-[#e09440] bg-white text-gray-800 shadow-sm resize-none"
                            placeholder="Enter task description"
                            rows={3}
                            value={form.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    {/* Due Date & Priority */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full sm:w-1/2">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="dueDate">Due Date</label>
                            <input
                                type="date"
                                id="dueDate"
                                name="endDate"
                                value={form.endDate}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e09440] focus:border-[#e09440] bg-white text-gray-800 shadow-sm"
                            />
                        </div>

                        <div className="w-full sm:w-1/2">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="priority">Priority</label>
                            <select
                                id="priority"
                                name="priority"
                                value={form.priority}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e09440] focus:border-[#e09440] bg-white text-gray-800 shadow-sm"
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>

                    {/* Status of Task Dropdown */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="status">Status</label>
                        <select
                            id="status"
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e09440] focus:border-[#e09440] bg-white text-gray-800 shadow-sm"
                        >
                            <option value="pending">Pending</option>
                            <option value="in-progress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>

                    {/* Action Buttons (Footer) */}
                    <div className="flex justify-end gap-3 pt-4 border-t border-gray-300">
                        {/* Cancel Button */}
                        <button
                            type="reset"

                            className="px-5 py-2 text-sm font-semibold text-gray-700 border border-gray-400 rounded-md hover:bg-gray-100 transition duration-300"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"

                            className="px-5 py-2 text-sm font-semibold text-white bg-[#e09440] rounded-md shadow-md hover:bg-[#c97b35] transition duration-300"
                        >
                            {task ? "Save Changes" : "Add Task"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskForm;