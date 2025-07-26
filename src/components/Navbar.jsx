    import React from "react";
    import logo from '../assets/logo.png'
    import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
    import { FaFacebook } from "react-icons/fa6";

    const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} className="mx-2" width={90} height={40} alt="logo" />
                </a>
            </div>
            <div className="m-0 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/youssef-elsayed-elsayed/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                >
                <FaLinkedin/>
                </a>

                <a href="https://github.com/Jooe-Elsayed" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                >
                <FaGithub/>
                </a>

                <a href="https://www.facebook.com/share/1Bxwrfcs6p/?mibextid=qi2Omg" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                >
                <FaFacebook/>
                </a>

                <a href="https://wa.me/201094345363" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Whatsapp"
                >
                <FaWhatsapp/>
                </a>
            </div>
        </nav>
    )
    };

    export default Navbar;
