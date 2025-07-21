import { NavLink } from 'react-router';
import { FaHouseChimney } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { IoDocumentText, IoLocation } from "react-icons/io5";

const Navbar = () => {
    const link = <>
        <li><NavLink to="/" className={`font-bold greentext bg-white text-lg ml-3 ${({ isActive }) => isActive ? "greenbg text-white" : ""}`}>  <FaHouseChimney></FaHouseChimney> Home</NavLink></li>
        <li><NavLink to="/" className={`font-bold text-[#92278F] bg-white text-lg ml-3 ${({ isActive }) => isActive ? "greenbg text-white" : ""}`}>  <FaUserAlt></FaUserAlt> About</NavLink></li>
        <li><NavLink to="/" className={`font-bold text-orange-600 bg-white text-lg ml-3 ${({ isActive }) => isActive ? "greenbg text-white" : ""}`}>  <IoDocumentText></IoDocumentText> Class</NavLink></li>
        <li><NavLink to="/" className={`font-bold text-sky-400 bg-white text-lg ml-3 ${({ isActive }) => isActive ? "greenbg text-white" : ""}`}>  <IoLocation></IoLocation> Contact</NavLink></li>
    </>
    return (
        <div className="navbar bg-white w-full fixed shadow-sm z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <div className="flex items-center justify-between p-2 rounded-xl">
                        
                        <div className="">
                            <span className="greentext text-3xl font-bold">E</span>
                            <span className="text-sky-400 text-3xl font-bold">D</span>
                            <span className="text-orange-600 text-3xl font-bold">U</span>
                            <span className="text-red-600 text-3xl font-bold">G</span>
                            <span className="text-sky-400 text-3xl font-bold">A</span>
                            <span className="greentext text-3xl font-bold">Z</span>
                            <span className="text-red-600 text-3xl font-bold">A</span>
                        </div>

                    </div>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-yellow-400 text-white">Button</a>
            </div>
        </div>
    );
};

export default Navbar;