import React from "react";


const Header: React.FC = () => {

    return (

        <header className="sticky top-0 bg-black shadow-md z-10">
            <nav className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div className="text-2xl font-bold text-white">Pathik Patel</div>

                {/* Navigation Links */}
                <ul className="flex space-x-6">
                    <li>
                        <a href="#about" className="text-white hover:text-blue-600 transition font-medium">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="text-white hover:text-blue-600 transition font-medium">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#experience" className="text-white hover:text-blue-600 transition font-medium">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="text-white hover:text-blue-600 transition font-medium">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-white hover:text-blue-600 transition font-medium">
                            Contact Me
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );

};


export default Header;