import { useState } from "react";

export default function HamburgerButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden relative">

            {/* Hamburger button */}
            <button
                className="btn btn-circle"
                onClick={() => setIsOpen(!isOpen)}
            >
                
                {isOpen ? (
                    /* hamburger icon */
                    <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 512 512"
                    >
                        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                    </svg>

                    
                ) : (
                    /* close icon */
                    <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 512 512"
                    >
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>
                )}
            </button>

            
            {isOpen && (
                <div className="absolute left-0 top-14 z-50 w-64 rounded-lg bg-white shadow-lg border border-slate-200 p-5">

                    <ul className="flex flex-col gap-5 font-semibold text-slate-900">

                        <li className="hover:text-[#DB2777] cursor-pointer">
                            Home
                        </li>

                        <li className="hover:text-[#DB2777] cursor-pointer">
                            Technologies
                        </li>

                        <li className="hover:text-[#DB2777] cursor-pointer">
                            Projects
                        </li>

                        <li className="hover:text-[#DB2777] cursor-pointer">
                            About
                        </li>

                        <li className="hover:text-[#DB2777] cursor-pointer">
                            Contact
                        </li>

                    </ul>

                </div>
            )}
        </div>
    );
}