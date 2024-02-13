'use client'
import { Link } from "lucide-react"
import { usePathname } from "next/navigation"

const NavLink = ({link}) => {

const pathName = usePathname(); 

console.log(pathName)


    return (
        <Link classname='rounded p-1 ${pathName === link.url && "bg-black text-white"}' href={link.url}></Link>
        )
    }
    
    
    export default NavLink