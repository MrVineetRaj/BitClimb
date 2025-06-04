import React, { useEffect, useState } from "react";
import ThemeToggle from "./theme-toggle";
import { Link, useLocation } from "react-router";
import { useAuthStore } from "../../store/useAuthStore";

const Navbar = () => {
  const { authUser } = useAuthStore();
  const [hasScrolled, setHasScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  const NAV_OPTIONS = [
    { name: "Home", path: "/home" },
    { name: "Problem Lists", path: "/problem-lists" },
    { name: "Contests", path: "/contests" },
  ];
  return (
    <div
      className={`navbar sticky top-0 left-0 transition-all duration-300  shadow-sm z-50 ${
        hasScrolled ? " backdrop-blur-sm bg-base-100 " : "py-6"
      }`}
    >
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NAV_OPTIONS?.map(({ name, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`text-base font-bold   ${
                  pathname === path ? "text-primary" : ""
                }
                `}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end flex gap-4 ">
        <ThemeToggle />
        {!!!authUser ? (
          <Link to={"/signup"}>
            <button className="btn  btn-primary text-white font-bold">
              Get Started
            </button>
          </Link>
        ) : (
          <details className="dropdown dropdown-end">
            <summary className="btn btn-ghost m-1">
              <div className="avatar">
                <div className=" w-10 rounded-full">
                  <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                </div>
              </div>
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li>
                <Link to={"/profile"}>Profile</Link>
              </li>{" "}
              {authUser?.role === "ADMIN" && (
                <li>
                  <Link to={"/admin/panel"}>Admin Panel</Link>
                </li>
              )}
              <li>
                <button className="btn btn-soft btn-error">Logout</button>
              </li>
            </ul>
          </details>
        )}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {NAV_OPTIONS?.map(({ name, path }) => (
              <li key={path}>
                <Link to={path} className="text-base font-bold ">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
