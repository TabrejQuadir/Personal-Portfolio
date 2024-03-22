import { useRef } from 'react';
import './Service.scss';
import { motion, useInView } from "framer-motion";

const Service = () => {

    const ref = useRef()
    const isInView = useInView(ref, { margin: "-100px" });

    const variants = {
        initial: {
            x: -500,
            y: 100,
            opacity: 0,
        },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.3,
                type: "spring",
                stiffness: 20,
                damping: 5,
            }
        }
    }

    // const mobVariants = {
    //     initial: {
    //         x: 0,
    //         y: 100,
    //         opacity: 0,
    //     },
    //     animate: {
    //         x: 0,
    //         y: 0,
    //         opacity: 1,
    //         transition: {
    //             duration: 1,
    //             staggerChildren: 0.3,
    //             type: "spring",
    //             stiffness: 20,
    //             damping: 5,
    //         }
    //     }
    // }


    return (
        <motion.div className='services' variants={variants} 
            initial="initial" ref={ref} animate={isInView && "animate"}>

            <motion.div className='textContainer' variants={variants}>
                <p>I focus on helping your brand grow
                    <br /> and move forward
                </p>
                <hr></hr>
            </motion.div>

            <motion.div className='titleContainer' variants={variants}>
                <div className='title'>
                    <img src='people.webp' alt=' ' />
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Unique </motion.b>
                        Ideas</h1>
                </div>
                <div className='title'>
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>For Your
                        </motion.b>  Business.</h1>
                    <button>What I Do?</button>
                </div>
            </motion.div>

            <motion.div className='listContainer' variants={variants}>

                <motion.div className='box' whileHover={{ backgroundColor: "lightGray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                    <button>Go</button>
                </motion.div>

                <motion.div className='box' whileHover={{ backgroundColor: "lightGray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                    <button>Go</button>
                </motion.div>


                <motion.div className='box' whileHover={{ backgroundColor: "lightGray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                    <button>Go</button>
                </motion.div>

                <motion.div className='box' whileHover={{ backgroundColor: "lightGray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                    <button>Go</button>
                </motion.div>

            </motion.div>
        </motion.div>
    )
}

export default Service