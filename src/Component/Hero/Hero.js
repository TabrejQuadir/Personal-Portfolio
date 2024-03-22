import { Link } from 'react-router-dom';
import './Hero.scss';
import { motion } from 'framer-motion';

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.3,
        }
    },

    scrollAnimate: {
        y: 30,
        opacity: 0,
        transition: {
            duration: 1,
            repeat: Infinity,
        }
    }
}

const slidingTextVariants = {
    initial: {
        x: 100,

    },
    animate: {
        x: "-350%",

        transition: {
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        }
    },


}

const Hero = () => {
    return (
        <div className='hero'>

            <div className='wrapper'>
                <motion.div className='text-container' variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants} className='name'>Tabrej Quadir</motion.h2>
                    <motion.h1 variants={textVariants}>Web developer and UI designeer</motion.h1>
                    <motion.div variants={textVariants} className='butttons' >
                        <motion.button variants={textVariants}> See the Latest Works</motion.button>
                        <motion.button variants={textVariants} >Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollAnimate" src='scroll.png' alt='scroll' />
                </motion.div>
            </div>

            <motion.div className='slidingText-Container' variants={slidingTextVariants} initial="initial" animate="animate">
                I am a Web Developer
            </motion.div>

            <div className='image-container'>
                <img src='hero.png' alt='hero-img' />
            </div>

        </div>
    )
}

export default Hero