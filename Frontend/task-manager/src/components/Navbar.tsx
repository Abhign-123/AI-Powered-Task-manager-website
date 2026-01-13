import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
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
            onClick={() => { navigate("/login") }}
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
        <div className="relative inline-block text-left">
          <button
            type="button"
            onClick={() => setOpen((s) => !s)}
            className="inline-flex items-center justify-center pt-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`w-7 h-7 transition-transform duration-300 ease-in-out text-[#d98917]
                ${open ? "rotate-90" : "rotate-0"}
              `}
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M19.14 12.94a7.07 7.07 0 000-1.88l2.03-1.58a.5.5 0 00.12-.65l-1.92-3.32a.5.5 0 00-.6-.22l-2.39.96a7.05 7.05 0 00-1.6-.93l-.36-2.54A.5.5 0 0014.7 2h-3.4a.5.5 0 00-.5.42l-.36
             2.54a7.05 7.05 0 00-1.6.93l-2.39-.96a.5.5 0 00-.6.22L2.71 8.83a.5.5 0 00.12.65L4.86 11a7.07 7.07 0 000 1.88L2.83 14.46a.5.5 0 00-.12.65l1.92 3.32a.5.5 0 00.6.22l2.39-.96c.5.39 1.05.71 
             1.6.93l.36 2.54a.5.5 0 00.5.42h3.4a.5.5 0 00.5-.42l.36-2.54c.55-.22 1.1-.54 1.6-.93l2.39.96a.5.5 0 00.6-.22l1.92-3.32a.5.5 0 00-.12-.65l-2.03-1.58zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
            </svg>
          </button>

          {/* Dropdown menu */}
          {open && (
            <div
              className="absolute right-0 mt-2 w-30 bg-white rounded-md shadow-lg z-50"
            >
              <div className="py-1">
                <button
                  type="button"
                  className="w-full text-left px-4 py-2 font-semibold text-sm text-gray-700 hover:bg-gray-50"
                >
                  Profile
                </button>
                <div className="border-t border-gray-100 my-1" />
                <button
                  type="button"
                  onClick={() => logout()}
                  className="w-full text-left px-4 py-2 font-semibold text-sm text-gray-700 hover:bg-gray-50"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
