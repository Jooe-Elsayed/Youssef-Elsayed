    import React from 'react'
    import profilePic from '../assets/my-img.jpg'
    import {HERO_CONTENT} from '../../constants/index'
    import { motion } from 'framer-motion'

    const containerVariants = {
        hidden:{opacity:0, x:-100},
        visible:{
            opacity:1,
            x:0,
            transition:{
                duration:0.5,
                staggerChildren:0.5,
            }
        }
    }
    
    const childVariants={
        hidden:{opacity:0, x:-100},
        visible:{opacity:1, x:0,transition:{duration:0.5}}
    }

    const Hero = () => {
    return (
        <div className='pb-4 lg:mb-20'>
            <div className='flex flex-wrap items-center lg:flex-row-reverse'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:pl-60'>
                        <motion.img 
                        width={430} src={profilePic} alt="img-hero" className='border
                        border-stone-900 rounded-2xl' initial={{x:100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:.5,delay:.8}}/>
                    </div>
                </div>
                <div className='w-full lg:w-1/2'> 
                    <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className='flex flex-col items-center lg:items-start
                    mt-10'>
                        <motion.h2
                        variants={childVariants}
                        className='pb-2 text-4xl tracking-tighter
                        lg:text-7xl w-full'>Youssef Elsayed</motion.h2>

                        <motion.span
                        variants={childVariants}
                        className='bg-gradient-to-r from-stone-300
                        to-stone-600 bg-clip-text text-3xl tracking-tighter
                        text-transparent'>Frontend Developer</motion.span>

                        <motion.p
                        variants={childVariants}
                        className='my-2 max-w-lg py-6 text-xl leading-relaxed
                        tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>

                        <motion.a 
                        variants={childVariants}
                        href="/public/Youssef-Elsayed.pdf" 
                        target='_blank'
                        rel='noopener noreferrer'
                        download={true}
                        className='bg-white font-bold rounded-full p-4 text-sm
                        text-stone-800 mb-10'>
                            Download Resume
                        </motion.a>

                    </motion.div>
                </div>
            </div>
        </div>
    )
    }

    export default Hero
