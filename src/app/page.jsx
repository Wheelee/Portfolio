'use client'
import Image from "next/image"
import face from "../../public/hero.png"
import Type from "@/Components/type"

const HomePage = () => {
return (
  <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/*IMAGE CONTAINER*/}
    <div className="h-1/2 lg:h-full lg:w-1/2 relative">
      <Image src={face} alt="Visage en art" className="object-contain"/>
    </div>
    {/*TEXT CONTAINER*/}
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center p-10">
      {/*TITLE*/}
      <h1 className="text-4xl md:text-6xl font-bold">Crafting Digital Experiences, Designing Tomorrow.</h1>
      {/*DESCRIPTION*/}
      <p className="md:text-xl flex flex-col">
        Welcome to my digital portfolio, where innovations and creativity converge. 
        With a k  een eye for aesthetics ans a mastery of code, my portfolio showcases a diverse collection of projects that reflect my commitment to excellence.
        <Type/>
      </p>
      {/*BUTTONS*/}
      <div className=" flex gap-4 w-full">
        <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">Voir mon travail</button>
        <button className="p-4 rounded-lg ring-1 ring-black bg-transparent text-black">Me Contacter</button>
      </div>
    </div>
  </div>
  )
}


export default HomePage