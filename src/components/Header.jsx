import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {Link, NavLink} from "react-router-dom";

function Header() {
    const [scrollBg, setScrollBg] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrollBg(true);
            } else {
                setScrollBg(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <div>
            <div className={"z-50 flex  justify-center w-full fixed top-6 left-0"}>
                <motion.div id={"header"} className={`flex roboto-medium text-green_header items-center gap-4 backdrop-blur-xl ${scrollBg ? "bg-white/60" : ""} duration-300 px-4 py-2 rounded-full`}>
                    {/*<motion.a href={"/"} className={`duration-300 rounded-full px-4 py-2 flex items-center gap-2 ${isActive("") ? "bg-white/60" : ""}`}> </motion.a>*/}

                    <NavLink
                        to="/"
                        // className={`duration-300 rounded-full px-4 py-2 flex items-center gap-2 ${isActive ? "bg-white/60" : ""}`}
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "duration-300 rounded-full px-4 py-2 flex items-center gap-2 bg-white/80" : "duration-300 rounded-full px-4 py-2 flex items-center gap-2"
                        }
                    >
                        Accueil
                        <span className={"text-sm text-green_primary font-bold bg-white/80 border-2 rounded-md w-6 h-6 flex items-center justify-center border-gray-200 p-1"}>
                            /
                        </span>
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "duration-300 rounded-full px-4 py-2 flex items-center gap-2 bg-white/80" : "duration-300 rounded-full px-4 py-2 flex items-center gap-2"
                        }                    >
                        À propos
                    </NavLink>

                    <NavLink
                        to="/skills"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "duration-300 rounded-full px-4 py-2 flex items-center gap-2 bg-white/80" : "duration-300 rounded-full px-4 py-2 flex items-center gap-2"
                        }                    >
                        Compétences
                    </NavLink>

                    <NavLink
                        to="/projects"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "duration-300 rounded-full px-4 py-2 flex items-center gap-2 bg-white/80" : "duration-300 rounded-full px-4 py-2 flex items-center gap-2"
                        }                    >
                        Projets
                    </NavLink>


                    <motion.a href={"/"} className={`duration-300 rounded-full px-4 py-2`}> Contact</motion.a>
                </motion.div>
            </div>

            <div className={" hidden fixed bottom-8 right-8 bg-white/60 backdrop-blur-xl rounded-[50px] w-64  z-50"} >
                <div className={"p-4 bg-green_primary/60 rounded-t-[50px] mb-16"}>Me contacter</div>

            </div>
        </div>
    );
}

export default Header;
