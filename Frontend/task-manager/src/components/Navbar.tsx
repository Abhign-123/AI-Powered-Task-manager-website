import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  // Common nav menus
  const publicLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "About", href: "#" },
  ];

  const privateLinks = [
    { label: "Task Dashboard", href: "/dashboard" },
    { label: "Manage Tasks", href: "/managetasks" },
    { label: "AI Task Assistant", href: "/aitaskassistant" },
  ];

  const linksToShow = isLoggedIn ? privateLinks : publicLinks;

  return (
    <header className="min-h-14 mx-[3vw] my-[3vh] w-[94vw] bg-[#f2e3ce] text-black rounded-xl shadow-md px-4 sm:px-6 py-2 flex items-center justify-between">
      {/* after login remove mx-[3vw] my-[3vh] add w-full */}
      {/* Left: Hamburger + Nav */}
      <div className="flex items-center gap-20">
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer w-10 h-10 border-black rounded-full flex items-center justify-center md:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {linksToShow.map((link) => (
            <Link key={link.label} to={link.href} className="px-2 py-2 border-b-2 border-transparent hover:border-black hover:-translate-y-0.5 transition-all duration-300 text-[#26323a] font-semibold text-sm">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile navbar dropdown */}
        {isOpen && (
          <div className="absolute top-[10vh] left-[10vw] w-[40vw] px-4 bg-[#f2e3ce] md:hidden z-50 shadow-md rounded-xl py-4">
            <nav className="flex flex-col gap-5 text-sm font-medium">
              {linksToShow.map((link) => (
                <Link key={link.label} to={link.href} className="hover:underline">{link.label}</Link>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Right side: Login / Signup */}
      {!isLoggedIn ? (
        <div className="flex items-center gap-3">
          <button
            onClick={() => {navigate("/login")}}
            className="px-4 py-2 border-b-2 border-transparent hover:border-black hover:-translate-y-0.5 transition-all duration-300 text-[#26323a] font-semibold text-sm"
          >
            Login
          </button>

          <button className="px-4 py-2 bg-[#f2e3ce] border-b-2 border-transparent hover:border-black hover:-translate-y-0.5 transition-all duration-300 text-[#26323a] font-semibold text-sm"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      ) : (
        <button
            onClick={() => {logout(); navigate("/login", {replace: true});}}
            className="px-4 py-2 border-b-2 border-transparent hover:border-black hover:-translate-y-0.5 transition-all duration-300 text-[#26323a] font-semibold text-sm"
          >
            Logout
          </button>
      )}

    </header>
  );
};

export default Navbar;
