import { useState } from "react";
import { assets } from "../../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Consultants from "../../pages/Consultants";
import AboutUS from "../../pages/AboutUs";
import AuthPage from "../../pages/Create_account";
import ContactUs from "../../pages/ContactUs";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex  items-center mx-4 justify-between text-sm py-4 mb-5 border-b border-b-gray-400 navbar">
      <img src={assets.logo} alt="" className="w-44 cursor-pointer" />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>

        <div className="cursor-pointer group relative">
          <li className="py-1 ">Health Services</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          <div className="absolute top-0 right-0 pt-10 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
            <div className="min-w-40 bg-stone-100 rounded flex flex-col gap-4 p-4">
              <p
                onClick={() => navigate("./")}
                className="hover:text-black cursor-pointer"
              >
                Doctors
              </p>
              <p
                onClick={() => navigate("./consultants")}
                className="hover:text-black cursor-pointer"
              >
                Consultants
              </p>
              <p
                onClick={() => navigate("./contactus")}
                className="hover:text-black cursor-pointer"
              >
                Help
              </p>
            </div>
          </div>
        </div>

        <NavLink to="/emergency">
          <li className="py-1 ">Emergency Services</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>

        <NavLink to="/contactus">
          <li className="py-1 ">Contact Us</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
        </NavLink>

        <NavLink to="aboutus">
          <li className="py-1 ">About Us</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex item-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/aboutus")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("./create_account")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("./create_account")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Login/Signup
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
