import { useEffect, useState, type ChangeEvent } from "react";

interface PageProps {
    page: "dashboard" | "managetasks";
    onFilterChange: (filters: {
        status: string;
        priority: string[];
    }) => void;
}

const Filters = ({ page, onFilterChange } : PageProps) => {

    const [status, setStatus] = useState("");
    const [priority, setPriority] = useState<string[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, checked, type } = e.target;

        if(type === "radio") {
            setStatus(value);
        }

        if(type === "checkbox") {
            if(checked) {
                setPriority([...priority, value]);
            } else {
                setPriority(priority.filter((selected) => selected !== value));
            }
        }
    };

    useEffect(() => {
        onFilterChange({
            status,
            priority
        });
    }, [status, priority, onFilterChange]);

    return (
        <div className="bg-[#f2e3ce] p-6 rounded-xl shadow-md grow">
            <h2 className="text-xl font-medium text-gray-700 mb-5">
                Filters
            </h2>
            <div className={`flex ${page=="dashboard" ? "flex-wrap sm:flex-nowrap md:gap-25" : "flex-row lg:flex-col md:gap-10"} gap-8 text-gray-700`}>
                {/* Status Filters */}
                <div>
                    <h3 className="font-semibold mb-3">Status</h3>
                    <div className="flex flex-col space-y-2">
                        <label className="flex items-center text-base">
                            <input
                                type="radio"
                                name="status"
                                value=""
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-[#e09440] focus:ring-[#e09440]"
                                defaultChecked
                            />
                            <span className="ml-2">All</span>
                        </label>
                        <label className="flex items-center text-base">
                            <input
                                type="radio"
                                name="status"
                                value="completed"
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-[#e09440] focus:ring-[#e09440]"
                            />
                            <span className="ml-2">Completed</span>
                        </label>
                        <label className="flex items-center text-base">
                            <input
                                type="radio"
                                name="status"
                                value="pending"
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-[#e09440] focus:ring-[#e09440]"
                            />
                            <span className="ml-2">Pending</span>
                        </label>
                    </div>
                </div>

                {/* Priority Filters */}
                <div>
                    <h3 className="font-semibold mb-3">Priority</h3>
                    <div className="flex flex-col space-y-2">
                        <label className="flex items-center text-base">
                            <input
                                type="checkbox"
                                name="priority"
                                value="high"
                                onChange={handleChange}
                                className="h-4 w-4 text-[#e09440] focus:ring-[#e09440]"
                            />
                            <span className="ml-2">High</span>
                        </label>
                        <label className="flex items-center text-base">
                            <input
                                type="checkbox"
                                name="priority"
                                value="medium"
                                onChange={handleChange}
                                className="h-4 w-4 text-[#e09440] focus:ring-[#e09440]"
                            />
                            <span className="ml-2">Medium</span>
                        </label>
                        <label className="flex items-center text-base">
                            <input
                                type="checkbox"
                                name="priority"
                                value="low"
                                onChange={handleChange}
                                className="h-4 w-4 text-[#e09440] focus:ring-[#e09440]"
                            />
                            <span className="ml-2">Low</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filters;