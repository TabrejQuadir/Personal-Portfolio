import { useEffect, useState } from 'react';
import './Cursor.scss';
import {motion} from 'framer-motion';

const Cursor = () => {

    const [state, setState]=useState({x:0,y:0});

    useEffect(()=>{
        const mouseMove=(e)=>{
        setState({x:e.clientX, y:e.clientY})
        }
        window.addEventListener("mousemove",mouseMove);
        return()=>{
            window.removeEventListener("mousemove",mouseMove);
        };
    },[]);

  return (
    <motion.div className='cursor' animate={{x:state.x+10, y:state.y+10}}>

    </motion.div>
  )
}

export default Cursor;