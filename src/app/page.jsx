'use client'
import Image from "next/image"
import face from "../../public/hero.png"
import Type from "@/Components/type"
import { motion } from "framer-motion"
import Link from "next/link"

const HomePage = () => {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/*IMAGE CONTAINER*/}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src={face} alt="Visage en art" className="object-contain -z-10" />
        </div>
        {/*TEXT CONTAINER*/}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center p-10">
          {/*TITLE*/}
          <h1 className="text-4xl md:text-6xl font-bold font-crimson-bold ">Crafting Digital Experiences, Designing Tomorrow.</h1>
          {/*DESCRIPTION*/}
          <p className="md:text-xl flex flex-col">
            Bienvenue sur mon portfolio numérique, où convergent innovation et créativité. Avec un sens aigu de l'esthétique et une maîtrise du code, mon portfolio présente une collection variée de projets qui reflètent mon engagement pour l'excellence. Future Developper Web
            <Type />
          </p>
          {/*BUTTONS*/}
          <div className=" flex gap-4 w-full">
            <Link className="p-4 rounded-lg ring-1 ring-black bg-black text-white" href="/Portfolio">Voir mon travail</Link>
            <Link className="p-4 rounded-lg ring-1 ring-black bg-black text-white" href="/Contact">Me Contacter</Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}


export default HomePage