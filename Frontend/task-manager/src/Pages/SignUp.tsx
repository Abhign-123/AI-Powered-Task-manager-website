import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [form, setForm] = useState({ fullName: "", email: "", password: "", confirm: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!form.fullName || !form.email || !form.password || !form.confirm) {
            setError("All fields are required.");
            return;
        }

        if (form.password !== form.confirm) {
            setError("Passwords do not match.");
            return;
        }

        console.log("Submitted:", form);
        setForm({ fullName: "", email: "", password: "", confirm: "" });
    };

    return (
        <div className="min-h-[calc(100vh-126px) flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-[#f2e3ce] rounded-xl shadow-lg shadow-[#F0AF4F] ring-2 ring-[#edd8b9] p-8">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Create Account</h2>

                {error && (
                    <p className="text-red-600 text-sm mb-1 text-center font-medium">{error}</p>
                )}

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            name="fullName"
                            value={form.fullName}
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 text-black rounded-lg border border-gray-400 focus:ring-1 focus:ring-[#d98917] focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 text-black rounded-lg border border-gray-400 focus:ring-1 focus:ring-[#d98917] focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div className="relative">
                            <input
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                type={showPassword ? "text" : "password"}
                                placeholder="Create password"
                                className="w-full px-4 py-3 text-black rounded-lg border border-gray-400 focus:ring-1 focus:ring-[#d98917] focus:outline-none pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className={`absolute inset-y-0 right-3 flex items-center ${showPassword
                                        ? 'text-[#d98917]'
                                        : 'text-gray-400 hover:text-[#d98917]'
                                    }`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Re-type Password</label>
                        <input
                            name="confirm"
                            value={form.confirm}
                            onChange={handleChange}
                            type={showPassword ? "text" : "password"}
                            placeholder="Confirm password"
                            className="w-full px-4 py-3 text-black rounded-lg border border-gray-400 focus:ring-1 focus:ring-[#d98917] focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-[#d98917] text-white font-semibold shadow-md hover:shadow-lg transition"
                    >
                        Create Account
                    </button>
                </form>

                <p className="text-center text-sm text-gray-700 mt-5">
                    Already have an account? 
                    <Link to="/login" className="text-[#d98917] font-semibold hover:underline">Sign In</Link>
                </p>
            </div>
        </div>
    )
};

export default SignUp;
