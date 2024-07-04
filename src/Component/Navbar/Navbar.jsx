import { NavLink } from "react-router-dom";
// import Education from './../Education/Education';


const Navbar = () => {

    const Navlink = <>

        <li className="ml-5"><NavLink to='/contact'>contact</NavLink></li>
        <li className="ml-5"><NavLink to='/skill'>skill</NavLink></li>
        <li className="ml-5"><NavLink to ='/about'>About</NavLink></li>
        <li className="ml-5"><NavLink to ='/education'>Education</NavLink></li>

    </>
    return (
        <div className="navbar fixed  z-10 bg-slate-400 bg-opacity-60">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {Navlink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">MSH</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Navlink}
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://i.ibb.co/pvt3WVf/IMG-7658.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;