import { useRef } from 'react';
import './Portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";




const items = [
  {
    id: 1,
    title: "React Ecommere",
    img: "ecommerce.jpg",
    description: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    id: 2,
    title: "Live News",
    img: "newss.jpg",
    description: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    id: 3,
    title: "Chat Gpt",
    img: "chatGpt.jpg",
    description: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    id: 4,
    title: "Hit the Number",
    img: "Hit-the-Game.webp",
    description: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
];



const Single = ({ item }) => {

  const variants = {
    open: {
      y: -100,
      opacity: .5
    },
    close: {
      y: 0,
      opacity: 1,
    },

  }

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className='container'>
        <div className='wrapp'>
          <div className='img-container' ref={ref}>
            <img src={item.img} />
          </div>
          <motion.div className='textt-container' style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const Portfolio = () => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
  });


  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX: scaleX }} className='progress-bar'></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;