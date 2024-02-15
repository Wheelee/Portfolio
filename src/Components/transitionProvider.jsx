'use client'
import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import {motion} from "framer-motion";
import { PathnameContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {

    const pathName = usePathname()
    return (
        <AnimatePresence>
            <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-50 to bg-red-100">
                <motion.div className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40" animate={{height:"0vh"}} exit={{height:"140vh"}} transition={{duration:2, ease:"easeOut"}}></motion.div>
                <motion.div className="h-screen w-screen fixed bg-red-300 rounded-t-[100px] bottom-0 z-30" initial={{height:"140vh"}} animate={{height:"0vh", transition:{delay:2}}}></motion.div>
                <div className="h-24">
                    <Navbar></Navbar>
                </div>
                <div className="h-[calc(100vh - 6rem)]">{children}</div>
            </div>
        </AnimatePresence>
    )
}


export default TransitionProvider