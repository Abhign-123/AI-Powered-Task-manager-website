import React, { useState } from 'react';
import AddTaskForm from '../components/AddTaskForm.tsx';
import DoughnutChart from '../Charts/TaskStatsChart.tsx';
import Filters from '../components/Filters.tsx';
import TaskCard from '../components/TaskCard.tsx';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

interface Task {
    id: number;
    taskName: string;
    description: string;
    status: string;
    priority: string;
    startDate: string;
    endDate: string;
}
// Tailwind color mapping based on the screenshot:
// Main background: #f8f5ee
// Card/Section background: #f2e3ce
// Primary button color: #e09440
// Task Card color: #e7d4b8 (slightly darker than card background)

const Dashboard = () => {
    const [click, setClick] = React.useState(false)
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);

    // Dummy data for rendering the task cards
    const completedTasks = 18;
    const pendingTasks = 6;
    const inProgressTasks = 4;
    const totalTasks = completedTasks + pendingTasks + inProgressTasks;
    //const percentageCompleted = (completedTasks / totalTasks) * 100;

    useEffect(() => {
        // Fetch tasks from the backend API
       const fetchTasks = async () => {
            try {
                const response = await axios.get('http://localhost:8080/users/userTasks/1');
                console.log(response); // Replace with your API endpoint
                const data = response.data;
                console.log('Fetched tasks:', data);
                setTasks(data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };
        fetchTasks();

    },[]);
    
    
    const Taskform= ()=>{
        setClick(true)
        console.log("clicked", click)    
    }

    const receivedData = (data:boolean) => {
        setClick(data);
    }
    
    return (
        // The main page body. Min-h-screen ensures the page structure is visible.
        <>
        <div className="min-h-[calc(100vh-56px-6vh)]">
            {/* The main content container, matching the Navbar's horizontal alignment/boundaries */}
            {/* The py-6 is added for vertical padding below the Navbar */}
            <div className="mx-[3vw]  w-[94vw]  space-y-6">

                {/* Dashboard Header and Action Buttons */}
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4 md:mb-0">
                        Dashboard Overview
                    </h1>
                    <div className="flex flex-wrap gap-3">
                        <button 
                            onClick={Taskform }
                        
                            className="bg-[#d98917] px-5 py-2.5 text-sm font-semibold text-white border  rounded-md hover:opacity-80 transition duration-300">
                            Add New Task
                        </button>
                        {click && <AddTaskForm  updateValue={receivedData}/>}
                        {/* Note: In the screenshot, the button text is "Go To Task Management" and it is orange. */}
                        <button 
                            onClick={() => navigate('/managetasks')}
                            className="px-5 py-2.5 text-sm font-semibold text-white bg-[#e09440] rounded-md shadow-md hover:opacity-80 transition duration-300"
                        >
                            Go To Task Management
                        </button>
                    </div>
                </div>
                
                {/* --- Main Dashboard Layout --- */}
                {/* h-[75vh] or similar is set to ensure the container has a fixed height, 
                    forcing the scrollbar only in the 'Task Section' on the right. */}
                <div className="flex flex-col lg:flex-row gap-6 h-[75vh] max-h-[calc(100vh-180px)]"> 
                    
                    {/* Left Column: Task Overview and Filters (Fixed Height) */}
                    <div className="lg:w-1/3 flex flex-col space-y-6 shrink-0">
                        
                        {/* Task Overview Card */}
                        <div className="bg-[#f2e3ce] p-6 rounded-xl shadow-md shrink-0">
                            <h2 className="text-xl font-medium text-gray-700 mb-5">
                                Task Overview
                            </h2>
                            <div className="flex items-center justify-around mb-4">
                                {/* Overview Doughnut chart */}
                            <DoughnutChart completed={completedTasks} pending={pendingTasks} inProgrees={inProgressTasks} total={totalTasks}/>
                            {/* Color boxes denoting status of the tasks from chart */}
                            <div className="flex-col">
                                <div className="flex items-center space-x-2">
                                    <span className="w-4 h-4 bg-[#4CAF50] rounded-sm inline-block"></span>
                                    <span className="text-gray-700 font-medium">Completed</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="w-4 h-4 bg-[#F2C94C] rounded-sm inline-block"></span>
                                    <span className="text-gray-700 font-medium">Pending</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="w-4 h-4 bg-[#e09440] rounded-sm inline-block"></span>
                                    <span className="text-gray-700 font-medium">In Progress</span>
                                </div>
                            </div>
                            </div>
                            
                        </div>

                        {/* Filters Card */}
                        <Filters page="dashboard" />
                    </div>

                    {/* Right Column: Task Section (Scrolling Enabled) */}
                    <div className="lg:w-2/3 bg-[#f2e3ce] p-6 rounded-xl shadow-md h-full flex flex-col">
                        <h2 className="text-xl font-medium text-gray-700 mb-5 shrink-0">
                            Task Section
                        </h2>
                        
                        {/* Task Grid with Custom Scrollbar */}
                        {/* flex-grow and overflow-y-auto ensure only this section scrolls */}
                        <div className="grow overflow-y-auto pr-2 custom-scrollbar"> 
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {tasks.map((task : Task) => (
                                    <TaskCard
                                        buttons={false}
                                        key={task.id}
                                        title={task.taskName}
                                        status={task.status}
                                        priority={task.priority}
                                        deadline={task.endDate}
                                        duration={Math.ceil((new Date(task.endDate).getTime() - new Date(task.startDate).getTime()) / (1000 * 3600 * 24))}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    );
};

export default Dashboard;