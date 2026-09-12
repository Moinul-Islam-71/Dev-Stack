import logo from "../assets/logo.png"
import HamburgerButton from "./HamburgerButton"

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-14 py-4 border-b-[0.1px] border-slate-200">

            <HamburgerButton />

            <img src={logo} alt="logo" />

            <ul className="hidden md:flex gap-6 justify-center items-center font-semibold text-slate-900">
                <li className="hover:text-[#DB2777]">Home</li>
                <li className="hover:text-[#DB2777]">Technologies</li>
                <li className="hover:text-[#DB2777]">Projects</li>
                <li className="hover:text-[#DB2777]">About</li>
                <li className="hover:text-[#DB2777]">Contact</li>
            </ul>

            <div className="flex gap-4 font-semibold items-center">
                <button className="text-slate-900 hover:text-[#DB2777]">Sign In</button>
                <button className="bg-[#D91B7E] text-slate-50 px-4 py-2 rounded-4xl">Sign Up</button>
            </div>
        </nav>
    )
}
