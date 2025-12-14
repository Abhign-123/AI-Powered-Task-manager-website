import { useNavigate } from "react-router-dom"
import Card from "./Card"


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className=" mx-[3vw] my-[3vh] w-[calc(100vw-6vw)] min-h-[calc(100vh-126px)] bg-[#f2e3ce] text-black rounded-xl shadow-md px-4 sm:px-6 py-6 flex flex-col items-center justify-center" >
      <div className="flex flex-col items-center justify-center gap-6 
                 px-4 
                md:flex-row md:gap-20 
                lg:gap-62 lg:px-3 
                ">

        {/* TEXT SECTION */}
        <div className="flex flex-col items-center md:items-start justify-center gap-6 
                                max-w-xl text-center md:text-left">

          <h1 className="text-4xl font-bold 
                                 
                                md:text-5xl 
                                lg:text-6xl 
                                xl:text-7xl">
            Manage your tasks efficiently
          </h1>

          <p className="text-[15px] text-black/90 
                                 
                                md:text-[15px] 
                                leading-relaxed">
            Organize, prioritize, and track your tasks with our intuitive task manager.
            Stay productive and never miss a deadline!
          </p>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => navigate('/signup')}
          className="bg-[#d98917] text-black/90
                            px-6 py-3  md:w-60 lg:w-50
                            rounded-[30px] 
                            text-sm sm:text-base md:text-lg 
                            cursor-pointer 
                            opacity-100 hover:opacity-80 
                            transition duration-300"
        >
          Get Started
        </button>

      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-20">
        <Card />
      </div>

    </div>
  )
}

export default Home

