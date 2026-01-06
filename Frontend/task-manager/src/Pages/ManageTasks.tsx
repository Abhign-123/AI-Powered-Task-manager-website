import { useState } from "react";
import AddTaskForm from "../components/AddTaskForm";
import Filters from "../components/Filters";
import TaskCard from "../components/TaskCard";

const ManageTasks = () => {


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

    const [click, setClick] = useState(false);

    const receivedData = (data:boolean) => {
        setClick(data);
    }

    return (
        <div className="min-h-[calc(100vh-120px)] px-5">

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-black">Manage Tasks</h2>
                <button 
                    className="px-4 py-2 bg-[#d98917] text-white rounded-md hover:bg-yellow-700"
                    onClick={() => setClick(!click)}
                >
                    Add Task
                </button>
                {click && <AddTaskForm  updateValue={receivedData}/>}
            </div>

            {/* MAIN CONTENT */}
            <div className="flex flex-col md:flex-row gap-8 h-[75vh]">

                {/* FILTERS — top on small screens, left on large screens */}
                <div className="w-full md:w-64">
                    <Filters page="managetasks" />
                </div>

                {/* TASK CARDS */}
                <div className="flex-1 bg-[#f2e3ce] h-full p-6 rounded-xl shadow-md">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2 h-full custom-scrollbar overflow-y-auto">
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
    );
}

export default ManageTasks;