interface TaskCardProps {
    title: string;
    status: string;
    priority: string;
    deadline: string;
    duration: number;
    buttons: boolean
};

const TaskCard = ({ title, status, priority, deadline, duration, buttons } : TaskCardProps) => {
    return (
        <div className="bg-[#e7d4b8] p-5 rounded-xl shadow-sm hover:shadow-xl transition duration-300">
            <h3 className="font-semibold text-lg text-gray-600">{title}</h3>

            <p className="text-sm text-gray-600 mt-2">
                <strong>Priority:</strong> {priority}
            </p>

            <p className="text-sm text-gray-600">
                <strong>Status:</strong> {status}
            </p>

            <p className="text-sm text-gray-600">
                <strong>Deadline:</strong> {deadline}
            </p>

            <p className="text-sm text-gray-600 mb-4">
                <strong>Duration:</strong> {duration} days
            </p>

            {buttons && (
                <div className="flex gap-3">
                    <button className="px-4 py-1 bg-[#d98917] text-white rounded-md text-sm hover:bg-yellow-600">
                        Edit
                    </button>
                    <button className="px-4 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600">
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
}

export default TaskCard;