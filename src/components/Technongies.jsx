import React from 'react'
import { DiJavascript1 } from 'react-icons/di'
import { RiReactjsLine, RiTailwindCssFill} from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        }
    }
})

    const Technongies = () => {
    return (
        <div className='pb-24'>
            <motion.h2 
            whileInView={{opacity:1, y: 0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1.5}}
            className='my-15 text-center text-5xl'>Technologies</motion.h2>

            <motion.div 
            whileInView={{opacity:1, x:0}}

            className='flex flex-wrap items-center justify-center gap-4'>
                
                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(0.8)}
                >
                <RiReactjsLine className='text-7xl text-cyan-500' />
                </motion.div>

                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(0.7)}
                className='p-3'>
                    <TbBrandNextjs className='text-7xl'/>
                </motion.div>

                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(0.8)}
                className='p-3'>
                    <RiTailwindCssFill className='text-7xl text-cyan-400'/>
                </motion.div>
                
                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(0.7)}
                className='p-3'>
                    <SiTypescript className='text-6xl text-blue-500 bg-white rounded'/>
                </motion.div>

                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(0.8)}
                className='p-3'>
                    <DiJavascript1 className='text-6xl bg-yellow-300 text-black rounded'/>
                </motion.div>

            </motion.div>

        </div>
    )
    }

    export default Technongies
