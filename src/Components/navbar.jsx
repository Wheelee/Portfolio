'use client'
import Link from "next/link"
import { useState } from "react";
import { Github, Instagram, Linkedin } from "lucide-react";
import NavLink from "./navLinks";
import { usePathname } from "next/navigation";

const links = [
    {url: "/", title: "Accueil"},
    {url: "/Details", title: "Plus"},
    {url: "/Portfolio", title: "Portfolio"},
    {url: "/Contact", title: "Contacter"},
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const pathName = usePathname(); 
    return (
        <div className='flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 pt-6 text-xl'>
            {/*LINKS*/}
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map((link) =>(
                    pathName === link.url ? <Link href={link.url} className="bg-black text-white rounded-md px-2 py-1" key={link.title}>{link.title}</Link>
                    : <NavLink link={link} key={link.title}/>
                ))}
            </div>

            
            {/*LOGO*/}
            <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
                <Link
                href="/"
                className="text-2xl bg-black rounded-md p-1 font-semibold flex items-center justify-center"
                >
                    <span className="text-white mr-1">Teremana</span>
                    <span className="w-15 h-10 rounded bg-white text-black flex items-center justify-center">.Honoré</span>
                </Link>
            </div>

            {/*SOCIAL*/}
            <div className="hidden md:flex gap-6 w-1/3 ml-8">
                <Link href={"https://github.com/Wheelee"}>
                <Github size={30}/>
                </Link>
                <Link href={"https://github.com/Wheelee"}>
                <Instagram size={30}/>
                </Link>
                <Link href={"https://github.com/Wheelee"}>
                <Linkedin size={30}/>
                </Link>
            </div>

            {/*MENU*/}
            <div className="md:hidden">
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={() =>setOpen((prev) => !prev)}>
                    <div className="w-10 h-1 bg-white rounded"></div>
                    <div className="w-10 h-1 bg-white rounded"></div>
                    <div className="w-10 h-1 bg-white rounded"></div>
                </button>


                {open && (
                    <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
                    {links.map((link) => (
                        <NavLink link={link} key={link.title}/>
                    ))}
                </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
