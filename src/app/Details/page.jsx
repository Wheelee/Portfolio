'use client'
import { motion } from "framer-motion"
import Brain from "@/Components/brain"

const DetailsPage = () => {
    return (
        <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
            {/*CONTAINER*/}
            <div className="h-full overflow-scroll lg:flex">
                {/*TEXT CONTAINER*/}
                <div className="p-4 sm:p-8 md:p-12 lg:px-20 xl:p-48 pt-6 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
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
                            <div className="flex flex-wrap w-fit gap-4">
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">HTML/CSS</div>
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Java</div>
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">PHP</div>
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">NextJS</div>
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">SQL</div>
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tailwind CSS</div>
                            </div>
                            {/*SKILLS SCROLL SVG*/}
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-down-dash"><path d="M15 5H9" /><path d="M15 9v3h4l-7 7-7-7h4V9z" /></svg>
                            </div>
                        </div>
                    </div>
                    {/*EXPERIENCE*/}
                    <div className="flex flex-col  justify-center pb-48">
                        {/*EXPERIENCE LIST*/}
                        <h1 className="font-bold text-2xl mb-12">Expérience</h1>
                        {/*EXPERIENCE LIST ITEMS*/}
                        <div className="flex justify-between h-48">
                            {/*LEFT*/}
                            <div className="w-1/3">
                                <div className="">
                                    {/*JOB TITLE*/}
                                    <p className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">Etudiant à La Croix Rouge, Brest</p>
                                    {/*JOB DESC*/}
                                    <p className="p-3 text-sm italic">Bah j'étudiais quoi fin normal</p>
                                    {/*JOB DATE*/}
                                    <p className="p-3 text-red-400 text-sm font-semibold">2018 - 2023</p>
                                    {/*JOB COMPANY*/}
                                    <p className="p-1 rounded bg-white text-sm font-semibold w-fit">Bilbo's Corp</p>
                                </div>
                            </div>
                            <div className="w-1/6">
                                {/*CENTER*/}
                                <div className="w-1 h-full bg-gray-600 rounded relative">
                                    {/*LINE*/}
                                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
                                        {/*CIRCLE*/}
                                    </div>
                                </div>
                            </div>
                            {/*RIGHT*/}
                            <div className="w-1/3"></div>
                        </div>
                        <div className="flex justify-between h-48">
                            {/*LEFT*/}
                            <div className="w-1/3">
                            </div>
                            <div className="w-1/6">
                                {/*CENTER*/}
                                <div className="w-1 h-full bg-gray-600 rounded relative">
                                    {/*LINE*/}
                                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
                                        {/*CIRCLE*/}
                                    </div>
                                </div>
                            </div>
                            {/*RIGHT*/}
                            <div className="w-1/3">
                                <div className="">
                                    {/*JOB TITLE*/}
                                    <p className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">Etudiant à La Croix Rouge, Brest</p>
                                    {/*JOB DESC*/}
                                    <p className="p-3 text-sm italic">Bah j'étudiais quoi fin normal</p>
                                    {/*JOB DATE*/}
                                    <p className="p-3 text-red-400 text-sm font-semibold">2018 - 2023</p>
                                    {/*JOB COMPANY*/}
                                    <p className="p-1 rounded bg-white text-sm font-semibold w-fit">Bilbo's Corp</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between h-48">
                            {/*LEFT*/}
                            <div className="w-1/3">
                                <div className="">
                                    {/*JOB TITLE*/}
                                    <p className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">Etudiant à La Croix Rouge, Brest</p>
                                    {/*JOB DESC*/}
                                    <p className="p-3 text-sm italic">Bah j'étudiais quoi fin normal</p>
                                    {/*JOB DATE*/}
                                    <p className="p-3 text-red-400 text-sm font-semibold">2018 - 2023</p>
                                    {/*JOB COMPANY*/}
                                    <p className="p-1 rounded bg-white text-sm font-semibold w-fit">Bilbo's Corp</p>
                                </div>
                            </div>
                            <div className="w-1/6">
                                {/*CENTER*/}
                                <div className="w-1 h-full bg-gray-600 rounded relative">
                                    {/*LINE*/}
                                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
                                        {/*CIRCLE*/}
                                    </div>
                                </div>
                            </div>
                            {/*RIGHT*/}
                            <div className="w-1/3"></div>
                        </div>
                    </div>
                </div>
                {/*SVG CONTAINER*/}
                <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
                    <Brain/>
                </div>
            </div>
        </motion.div>
    )
}


export default DetailsPage