'use client'
import { motion } from "framer-motion"

const DetailsPage = () => {
    return (
        <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
            {/*CONTAINER*/}
            <div className="">
                {/*TEXT CONTAINER*/}
                <div className="p-4 sm:p-8 md:p-12 lg:px-20 xl:p-48 pt-6 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
                    {/*BIOGRAPHY*/}
                    <div className="flex flex-col gap-12 justify-center">
                        <h1 className="font-bold text-2xl">Biographie</h1>
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet consecteur adipisicing elit.
                            Nostrum harum quibusdam cupiditate nobisaccusamus sed aut aperiam,
                            reiciendis numquam ! Voluptas voluptatibus obcaecati dolore itaque suspicit ! Vel doloremque quam nihil.
                        </p>
                        <span className="italic">
                            Le Bilbo sera toujours au-dessus du niveau de l'eau...
                        </span>
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-down-dash"><path d="M15 5H9" /><path d="M15 9v3h4l-7 7-7-7h4V9z" /></svg>
                        </div>
                        {/*SKILLS*/}
                        <div className="flex flex-col gap-12 justify-center">
                            <h1 className="font-bold text-2xl">Skills</h1>
                            {/*SKILLS LIST*/}
                            <div className="flex flex-row w-fit">
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">HTML/CSS</div>
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Java</div>
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">PHP</div>
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">NextJS</div>
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">SQL</div>
                            </div>
                            {/*SKILLS SCROLL SVG*/}
                        </div>
                    </div>
                    <div className="">
                        {/*EXPERIENCE*/}
                        EXPERIENCE
                    </div>
                </div>
                {/*SVG CONTAINER*/}
                <div className="hidden"></div>
            </div>
        </motion.div>
    )
}


export default DetailsPage