import React, { useState, useEffect } from "react";

function Header() {
  const [featuresDropdown, setFeaturesDropdown] = useState(false);
  const [companyDropdown, setCompanyDropDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle screen resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMenuOpen(false); // Close the menu on large screens
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sm:px-8 sm:py-4 px-2 py-2">
      <div className="container mx-auto flex items-center justify-between max-w-full phone:max-w-[1300px]">
        <div className="flex gap-16 items-center">
          <a href="/" className="font-bold text-3xl">
            snap
          </a>

          <nav
            className={`lg:gap-8 gap-4 text-gray lg:text-[18px] text-[14px] sm:flex ${
              menuOpen
                ? "flex flex-col absolute top-0 left-[50%] w-[50%] h-full p-6 shadow-lg z-0 bg-white"
                : "hidden lg:flex"
            }`}
          >
            <a
              href="#features"
              className={`flex items-center gap-1 hover:text-black relative ${
                menuOpen ? "text-xl w-fit" : ""
              }`}
              onMouseEnter={() => setFeaturesDropdown(true)}
              onMouseLeave={() => setFeaturesDropdown(false)}
            >
              Features{" "}
              <img
                src="images/icon-arrow-down.svg"
                alt=""
                className={`${menuOpen ? "hidden" : ""}`}
              />
              <div
                className={`absolute top-6 bg-white shadow-xl rounded-xl p-6 flex-col gap-2 text-gray ${
                  featuresDropdown ? "flex" : "hidden"
                } ${menuOpen ? "hidden" : ""}`}
              >
                <a
                  href=""
                  className="hover:text-black flex items-center gap-4 whitespace-nowrap"
                >
                  <img src="images/icon-todo.svg" alt="" />
                  Todo List
                </a>
                <a
                  href=""
                  className="hover:text-black flex items-center gap-4 whitespace-nowrap"
                >
                  <img src="images/icon-calendar.svg" alt="" />
                  Calendar
                </a>
                <a
                  href=""
                  className="hover:text-black flex items-center gap-4 whitespace-nowrap"
                >
                  <img src="images/icon-reminders.svg" alt="" />
                  Reminders
                </a>

                <a
                  href=""
                  className="hover:text-black flex items-center gap-4 whitespace-nowrap"
                >
                  <img src="images/icon-planning.svg" alt="" />
                  Planning
                </a>
              </div>
            </a>

            <a
              href="#company"
              className={`flex items-center gap-1 hover:text-black relative ${
                menuOpen ? "text-xl w-fit" : ""
              }`}
              onMouseEnter={() => setCompanyDropDown(true)}
              onMouseLeave={() => setCompanyDropDown(false)}
            >
              Company{" "}
              <img
                src="images/icon-arrow-down.svg"
                alt=""
                className={`${menuOpen ? "hidden" : ""}`}
              />
              <div
                className={`absolute top-6 bg-white rounded-xl p-6 flex-col gap-2 text-gray ${
                  companyDropdown ? "flex" : "hidden"
                } ${menuOpen ? "hidden" : ""}`}
              >
                <a href="" className="hover:text-black">
                  History
                </a>
                <a href="" className="hover:text-black whitespace-nowrap">
                  Our Team
                </a>
                <a href="" className="hover:text-black">
                  Blog
                </a>
              </div>
            </a>

            <a
              href="#careers"
              className={`flex items-center gap-1 hover:text-black relative ${
                menuOpen ? "text-xl w-fit" : ""
              }`}
            >
              Careers
            </a>
            <a
              href="#about"
              className={`flex items-center gap-1 hover:text-black relative ${
                menuOpen ? "text-xl w-fit" : ""
              }`}
            >
              About
            </a>
          </nav>
        </div>

        <button
          className="sm:hidden block text-gray relative z-10 top-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img
            src={
              menuOpen ? "images/icon-close-menu.svg" : "images/icon-menu.svg"
            }
            alt="Menu"
          />
        </button>

        <div className="text-gray hidden sm:flex gap-0 lg:gap-8 items-center sm:text-base text-sm">
          <button className="hover:text-black sm:px-4 sm:py-1.5 px-1 py-1">
            Login
          </button>
          <button className="border-2 border-gray rounded-xl hover:text-black hover:border-black sm:px-4 sm:py-1.5 px-1 py-1">
            Register
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
