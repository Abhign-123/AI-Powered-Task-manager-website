import type { Task } from "../types/Task";


const TaskCard = ({ task, children }:{ task: Task, children?: React.ReactNode }) => {
    const percentageCompleted = 50;

    return (
        <div className="bg-[#e7d4b8] p-5 rounded-xl shadow-sm hover:shadow-xl transition duration-300">
            <h3 className="font-semibold text-lg text-gray-600">{task.taskName}</h3>

            <p className="text-sm text-gray-600 mt-2">
                <strong>Priority:</strong> {task.priority}
            </p>

            <p className="text-sm text-gray-600">
                <strong>Status:</strong> {task.status}
            </p>

            <p className="text-sm text-gray-600">
                <strong>Deadline:</strong> {task.endDate}
            </p>

            <p className="text-sm text-gray-600 mb-4">
                <strong>Duration:</strong> {10} days
            </p>

            <div className="w-full bg-white rounded-full h-2">
                <div
                    className="h-2 rounded-full transition-all"
                    style={{ width: `${percentageCompleted}%`, backgroundColor: "#d98917" }}
                />
            </div>

            {children}
        </div>
    );
}

export default TaskCard;