'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { motion } from "framer-motion"

export default function ContactForm({publicKey,serviceId,templateId}:{publicKey:string|undefined,serviceId:string|undefined,templateId:string|undefined}){
    const form = useRef<HTMLFormElement | null>(null);
    console.log(publicKey,serviceId,templateId)

    const sendEmail = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(form.current) 
        if(publicKey && serviceId && templateId )emailjs
          .sendForm(serviceId,templateId, form.current, {
            publicKey: publicKey,
          })
          .then(
            () => {
                toast.success('Email sent successfully!')
                form.current?.reset()
            },
            (error) => {
                toast.error(error.text)
            },
          );
      };


    return (
        <motion.form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 w-full md:w-[50%] text-xl bg-[#8A3FFC] rounded-md py-8 px-4 items-center mb-6" 
        initial={{opacity:0,x:200}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true,amount:0.2}}
        transition={{duration:0.3,ease:'easeInOut'}}

        >
            <label htmlFor='name' className='cursor-pointer text-white w-[95%] md:w-[80%]'>Name</label>
            <input id="name" type="text" name="user_name" placeholder='Enter your name' className='text-base bg-white rounded-md py-2 px-2 placeholder:text-gray-600 placeholder:text-sm focus:outline-white w-[95%] md:w-[80%]' />
            <label htmlFor='email' className='cursor-pointer text-white w-[95%] md:w-[80%]'>Email</label>
            <input id="email" type="email" name="user_email" placeholder='Enter your email' className='text-base bg-white rounded-md py-2 px-2 placeholder:text-gray-600 placeholder:text-sm focus:outline-white w-[95%] md:w-[80%]' />
            <label htmlFor='message' className='cursor-pointer text-white w-[95%] md:w-[80%]'>Message</label>
            <textarea id="message" placeholder='Write your message...' name="message" className='text-base bg-white rounded-md py-2 px-2 placeholder:text-gray-600 placeholder:text-sm focus:outline-white h-24 w-[95%] md:w-[80%]' />
            <input type="submit" value="Send" className='bg-white hover:bg-gray-100 transition-all duration-300 ease-in-out text-black font-semibold rounded-md py-2 px-4 w-fit cursor-pointer self-center' />
        </motion.form>
    )
}