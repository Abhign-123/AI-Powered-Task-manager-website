import { useState } from "react";

const Profile = () => {

    const [isEditing, setIsEditing] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");

    const handleSave = () => {

        setIsEditing(false);
    };

    const handleCancel = () => {
        setFullName("");
        setEmail("");
        setIsEditing(false);
    };

    const initials = fullName?.split(" ").map((word) => word[0]).join("").toUpperCase() || "?";

    return (
        <div className="min-h-[calc(100vh-126px)] mx-[2vw] flex justify-center items-start py-10 px-4">
            <div className="w-full rounded-xl bg-[#f2e3ce] shadow-lg p-8">

                {/* Profile Header */}
                <div className="flex flex-col items-start">

                    <div className="w-28 h-28 rounded-full bg-[#d98917] text-white flex items-center justify-center text-4xl font-bold">
                        {initials}
                    </div>

                </div>

                <div className="border-b border-gray-400 my-8"></div>

                {/* Full Name */}
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 mb-6">

                    <label
                        htmlFor="fullName"
                        className="md:w-40 font-medium text-gray-700"
                    >
                        Full Name
                    </label>

                    <input
                        id="fullName"
                        type="text"
                        value={fullName}
                        disabled={!isEditing}
                        onChange={(e) => setFullName(e.target.value)}
                        className={`flex-1 rounded-lg border px-4 py-2 outline-none transition
                            ${isEditing
                                ? "border-gray-300 bg-gray-100 focus:ring-2 focus:ring-[#d98917]"
                                : "border-transparent bg-transparent"
                            }`}
                        required
                    />

                </div>

                {/* Email */}
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 mb-8">

                    <label
                        htmlFor="email"
                        className="md:w-40 font-medium text-gray-700"
                    >
                        Email
                    </label>

                    <input
                        id="email"
                        type="email"
                        value={email}
                        disabled={!isEditing}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`flex-1 rounded-lg border px-4 py-2 outline-none transition
                            ${isEditing
                                ? "border-gray-300 bg-gray-100 focus:ring-2 focus:ring-[#d98917]"
                                : "border-transparent bg-transparent"
                            }`}
                        required
                    />

                </div>

                {/* Buttons */}
                <div className="flex gap-3">

                    {isEditing ? (
                        <>
                            <button
                                onClick={handleSave}
                                className="rounded-lg bg-[#d98917] px-6 py-2 text-white font-medium hover:opacity-80 transition"
                            >
                                Save
                            </button>

                            <button
                                onClick={handleCancel}
                                className="rounded-lg border bg-white border-gray-300 px-6 py-2 hover:bg-gray-100 transition"
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="rounded-lg bg-[#d98917] px-6 py-2 text-white font-medium hover:opacity-80 transition"
                        >
                            Edit
                        </button>
                    )}

                </div>

            </div>
        </div>
    );
};
export default Profile;