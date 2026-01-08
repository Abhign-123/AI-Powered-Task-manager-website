import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onSubmit = async (e : React.FormEvent) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate("/dashboard");
        } catch (error) {
            console.error("Login failed", error);
        }
    }
    return (
        <div className='min-h-[calc(100vh-126px)] flex items-center justify-center p-6'>
            <div className='w-full max-w-md bg-[#f2e3ce] rounded-xl shadow-lg shadow-[#F0AF4F] ring-2 ring-[#edd8b9] p-8'>
                {/* Heading */}
                <h2 className='text-3xl font-extrabold text-gray-900 text-center mb-2'>
                    Welcome Back
                </h2>
                <p className='text-gray-500 text-center mb-8'>
                    Login to continue your journey
                </p>

                {/* Form */}
                <form onSubmit={onSubmit} className='space-y-5'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Email
                        </label>
                        <input
                            type='email'
                            placeholder='you@example.com'
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full px-4 py-3 text-black rounded-lg border border-gray-400 focus:ring-1 focus:ring-[#d98917] focus:outline-none'
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Password
                        </label>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder=''
                                onChange={(e) => setPassword(e.target.value)}
                                className='w-full px-4 py-3 text-black rounded-lg border border-gray-400 focus:ring-1 focus:ring-[#d98917] focus:outline-none pr-12'
                            />
                            {/* Eye icon */}
                            <button
                                type='button'
                                className={`absolute inset-y-0 right-3 flex items-center ${showPassword
                                        ? 'text-[#d98917]'
                                        : 'text-gray-400 hover:text-[#d98917]'
                                    }`}
                                aria-label='Toggle Password'
                                onClick={() => setShowPassword(s => !s)}
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='1.5'
                                    className='w-5 h-5'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                                    />
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z'
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Remember / Forgot */}
                    <div className='flex items-end text-sm'>
                        <a href='#' className='text-[#d98917] hover:underline'>
                            Forgot password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button
                        type='submit'
                        className='w-full py-3 rounded-lg bg-[#d98917] text-white font-semibold shadow-md hover:shadow-lg transition'
                    >
                        Login
                    </button>
                </form>

                {/* Divider */}
                <div className='flex items-center my-6'>
                    <div className='flex-1 h-px bg-gray-200' />
                    <p className='px-4 text-gray-400 text-sm'>OR</p>
                    <div className='flex-1 h-px bg-gray-200' />
                </div>

                {/* Sign Up Redirect */}
                <p className='text-center text-sm text-gray-600'>
                    Don't have an account?{' '}
                    <Link to="/signup" className='text-[#d98917] font-semibold hover:underline'>
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
export default SignIn