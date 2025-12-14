import React from 'react';
import AddTaskForm from '../components/AddTaskForm.tsx';
import DoughnutChart from '../Charts/TaskStatsChart.tsx';
import Filters from '../components/Filters.tsx';
import TaskCard from '../components/TaskCard.tsx';
import { useNavigate } from 'react-router-dom';


// Tailwind color mapping based on the screenshot:
// Main background: #f8f5ee
// Card/Section background: #f2e3ce
// Primary button color: #e09440
// Task Card color: #e7d4b8 (slightly darker than card background)

const Dashboard = () => {
    // Dummy data for rendering the task cards
    const completedTasks = 18;
    const pendingTasks = 6;
    const inProgressTasks = 4;
    const totalTasks = completedTasks + pendingTasks + inProgressTasks;
    //const percentageCompleted = (completedTasks / totalTasks) * 100;

    const tasks = [
        { title: "Design Homepage", status: "Completed", priority: "High", deadline: "2023-11-15", duration: 5 },
        { title: "Develop API", status: "Completed", priority: "Medium", deadline: "2023-11-20", duration: 7 },
        { title: "Write Documentation", status: "Pending", priority: "Low", deadline: "2023-11-25", duration: 3 },
        { title: "Create Wireframes", status: "In Progress", priority: "High", deadline: "2023-12-01", duration: 4 },
        { title: "Fix Bug #234", status: "In Progress", priority: "High", deadline: "2023-11-30", duration: 2 },
        { title: "Deploy to Staging", status: "Completed", priority: "Medium", deadline: "2023-12-02", duration: 1 },
        { title: "User Testing", status: "Pending", priority: "Medium", deadline: "2023-12-05", duration: 6 },
        { title: "Implement Auth", status: "In Progress", priority: "High", deadline: "2023-12-10", duration: 8 },
        { title: "Performance Audit", status: "Pending", priority: "Low", deadline: "2023-12-12", duration: 3 },
        { title: "Release v1.0", status: "Planned", priority: "High", deadline: "2023-12-20", duration: 10 },
    ];
    
    
    const [click, setClick] = React.useState(false)
    const navigate = useNavigate();
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
                                {tasks.map((task, index) => (
                                    <TaskCard
                                        key={index}
                                        title={task.title}
                                        status={task.status}
                                        priority={task.priority}
                                        deadline={task.deadline}
                                        duration={task.duration}
                                        buttons={true}
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