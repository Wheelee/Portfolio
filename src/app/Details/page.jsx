"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import React from "react";
import { Avatar } from "@nextui-org/react";

const AboutPage = () => {
    const containerRef = useRef();

    const { scrollYProgress } = useScroll({ container: containerRef });

    const skillRef = useRef();
    // const isSkillRefInView = useInView(skillRef, {once:true});
    const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            {/* CONTAINER */}
            <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
                {/* TEXT CONTAINER */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
                    {/* BIOGRAPHY CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center">
                        {/* BIOGRAPHY IMAGE */}
                        <Avatar src="souris.webp" className="w-200 h-200 text-large object-cover grayscale"></Avatar>

                        {/* BIOGRAPHY TITLE */}
                        <h1 className="font-bold text-2xl text-center font-crimson-bold">Biographie</h1>
                        {/* BIOGRAPHY DESC */}
                        <p className="text-lg text-center">
                            Actuelement étudiant en première année en BUT MMI à l'IUT de Laval, je suis un novice dans la découverte du développement WEB, une discipline que j'affectionne particulièrement.
                            Je suis très polyvalent et ma curiosité fait que je m'intérresse à plein de domaines différents tels que l'audiovisuel par la réalisation de clips, de courts métrages ou encore de photomontage.
                            Le domaine de l'audio également par la production d'instrumentales ou encore de podcast afin de débattre sur différents sujets.
                            La formation MMI offre une diversité énorme sur plein de domaine permettant d'être un couteau suisse en manipulant et en ayant des connaissances sur plein de compétences différentes.
                        </p>
                        {/* BIOGRAPHY QUOTE */}
                        <span className="italic">
                            Teremana HONORE
                        </span>

                        {/* BIOGRAPHY SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>
                    {/* SKILLS CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                        {/* SKILL TITLE */}
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl font-crimson-bold"
                        >
                            SKILLS
                        </motion.h1>
                        {/* SKILL LIST */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            className="flex gap-4 flex-wrap"
                        >
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                React.js
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Next.js
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                CSS
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Tailwind CSS
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                HTML
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Framer Motion
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                PHP
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                SQL
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Java
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Affinity Photo
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Affinity Designer
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Affinity Publisher
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Blender
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Canva
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Figma
                            </div>
                        </motion.div>
                        {/* SKILL SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>
                    {/* EXPERIENCE CONTAINER */}
                    <div
                        className="flex flex-col gap-12 justify-center pb-48"
                        ref={experienceRef}
                    >
                        {/* EXPERIENCE TITLE */}
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl font-crimson-bold"
                        >
                            EXPERIENCE
                        </motion.h1>
                        {/* EXPERIENCE LIST */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            className=""
                        >
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 ">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Collégien, Libreville
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-3 text-sm italic">
                                        En campagne au Gabon, j'ai fait de mon CM2 jusqu'en 5e dans un collège/lycée français.{" "}
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2015 - 2018
                                    </div>
                                    {/* JOB COMPANY */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit text-center">
                                        Lycée Blaise Pascal
                                    </div>
                                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 "></div>
                            </div>
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 "></div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 ">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Lycéen, Brest
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-3 text-sm italic">
                                        Au retour du Gabon, je suis arrivé en France dans la ville de Brest. J'y ai donc fait la fin de mon collège là-bas avant de faire tout mon lycée également.{" "}
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2018 - 2023{" "}
                                    </div>
                                    {/* JOB COMPANY */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        La Croix Rouge
                                    </div>
                                </div>
                            </div>
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 ">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Etudiant, Laval{" "}
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-3 text-sm italic">
                                        Après avoir été diplomé, je me suis orienté vers un parcours qui me plaisais. J'ai donc arrêté la filière générale avec les spécialités Maths/Physique pour me diriger dans un domaine plus technique dans le multimédia.{" "}
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2023 - 2026{" "}
                                    </div>
                                    {/* JOB COMPANY */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        IUT Laval, BUT MMI
                                    </div>
                                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 "></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* SVG CONTAINER */}
                <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div>
    );
};

export default AboutPage;