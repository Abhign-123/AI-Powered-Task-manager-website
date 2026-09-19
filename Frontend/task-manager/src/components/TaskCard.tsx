import type { Task } from "../types/Task";


const TaskCard = ({ task, children }:{ task: Task, children?: React.ReactNode }) => {
    const today = new Date().setHours(0,0,0,0);
    
    const totalDuration = new Date(task.endDate).getTime() - new Date(task.startDate).getTime();
    const elapsed = today - new Date(task.startDate).getTime();

    const percentage = Math.max(0, Math.min(100, Math.round((elapsed / totalDuration) * 100) || 0));

    const isOverdue = task.status !== "completed" && task.endDate < new Date().toISOString().split("T")[0];

    return (
        <div className={`bg-[#e7d4b8] p-5 rounded-xl transition duration-300
            ${ isOverdue ? "shadow-[0_0_15px_rgba(220,53,69,0.6)] border border-red-500/40" : "shadow-sm hover:shadow-xl"
        }`}>
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
                <strong>Duration:</strong> {Math.ceil(totalDuration / (1000 * 3600 * 24))} days
            </p>

            <div className="w-full bg-white rounded-full h-2">
                <div
                    className="h-2 rounded-full transition-all"
                    style={{ width: `${percentage}%`, backgroundColor: isOverdue ? "#dc3545" : "#d98917" }}
                />
            </div>

            {children}
        </div>
    );
}

export default TaskCard;