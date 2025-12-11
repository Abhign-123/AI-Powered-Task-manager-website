

const Card = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 px-4 py-10">

            {/* Card 1 */}
            <div className="bg-[#e1caa9] transition-transform duration-300 hover:scale-120
                rounded-2xl shadow-md p-6 w-[calc(100vw-30vw)] md:w-[300px] flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-sm">
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 4.5V9m0 6v4.5m7.5-7.5H15m-6 0H4.5" />
                </svg>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                AI-Powered Planning
                </h3>

                <p className="mt-2 text-gray-600 text-sm">
                Smartly break down goals into actionable tasks
                </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#e1caa9] transition-transform duration-300 hover:scale-120
                rounded-2xl shadow-md p-6 w-[calc(100vw-30vw)] md:w-[300px]  flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 8v4m0 4h.01M4.93 4.93l14.14 14.14" />
                </svg>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Smart Notifications
                </h3>

                <p className="mt-2 text-gray-600 text-sm">
                Never miss a deadline with timely email reminders
                </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#e1caa9] transition-transform duration-300 hover:scale-120
                rounded-2xl shadow-md p-6 w-[calc(100vw-30vw)] md:w-[300px] flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                    d="M9 12h6m-6 4h6M7 7h10l1 12H6L7 7z" />
                </svg>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Prioritize & Track
                </h3>

                <p className="mt-2 text-gray-600 text-sm">
                Organize, prioritize, and monitor progress with ease
                </p>
            </div>

        </div>

  )
}

export default Card
