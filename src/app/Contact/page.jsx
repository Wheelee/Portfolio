"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Type from "@/Components/type2";
import Font from "@/Components/font";
import { Textarea } from "@nextui-org/react";
import React from "react";

const ContactPage = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const text = "Bienvenue";

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_PUBLIC_KEY
            )
            .then(
                () => {
                    setSuccess(true);
                    form.current.reset();
                },
                () => {
                    setError(true);
                }
            );
    };

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="h-full flex flex-col lg:flex-col items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                {/* TEXT CONTAINER */}
                <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
                    <div className="m-12 flex flex-rows items-center from bg-transparent to bg-black rounded-md ring-4 ring-black font-bold p-2">
                        {text.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 0 }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: index * 0.1,
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                        😊
                    </div>
                </div>
                {/* FORM CONTAINER */}
                <form
                    onSubmit={sendEmail}
                    ref={form}
                    className="h-1/2 lg:h-full lg:w-1/2 bg-gray-800 rounded-xl text-xl flex flex-col gap-8 justify-center p-24 ring-black"
                >
                    <span className="text-violet-300 text-2xl font-bold">Cher Mr.HONORE,</span>
                    <Textarea
                        label="Description"
                        variant="bordered"
                        placeholder="Je vous contacte afin de..."
                        disableAnimation
                        disableAutosize
                        classNames={{
                            base: "max-w-xs",
                            input: "resize-y min-h-[40px]",
                        }}
                    />
                    <span className="text-violet-300 text-2xl font-bold">Adresse e-mail :</span>
                    <input
                        name="user_email"
                        type="text"
                        className="bg-transparent border-b-2 border-b-white outline-none text-white"
                    />
                    <span className="text-white"><Type></Type></span>
                    <button className="bg-purple-300 rounded font-semibold text-black hover:bg-purple-700 hover:text-white p-4">
                        Envoyer
                    </button>
                    {success && (
                        <span className="text-green-600 font-semibold">
                            Votre message à été envoyé avec succès !
                        </span>
                    )}
                    {error && (
                        <span className="text-red-600 font-semibold">
                            Quelque chose c'est mal passé !"
                        </span>
                    )}
                </form>
            </div>
        </motion.div>
    );
};

export default ContactPage;