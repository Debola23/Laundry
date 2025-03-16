import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { useState } from "react";
import './Navbar.css'

export const ResponsiveMenu = ({open}) => {

    const [openn, setOpenn] = useState(false);


  return <AnimatePresence mode="wait">
       {
        open && 
        <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 0.2 }} className="absolute top-28 left-0 w-full h-screen z-20 ">
            <div className="text-ul font-bold uppercase bg-emerald-700 text-amber-50 py-10 m-6 rounded-3xl">
                <ul className="flex flex-col items-center gap-11">
                    <Link to="/">Pick up</Link>
                    <Link to="/howitworks">How It Works</Link>
                    <Link to="/price">Prices & Plans</Link>
                    <li>
                        <div className="flex items-center justify-center ">
                            <motion.div animate={openn ? "open" : "closed"} className="relative">
                                <button onClick={() => setOpenn((pv) => !pv)} className="flex items-center text-ul font-bold uppercase bg-emerald-700 text-amber-50 rounded-3xl  transition-colors">
                                    <span className="text-sm">More Services</span>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className='ar'>
                                        <path d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                                      </svg>
                                </button>
                                <motion.ul initial={wrapperVariants.closed} variants={wrapperVariants} style={{ originY: "top", translateX: "-50%" }} className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-56 overflow-hidden text-center">
                                    <Option setOpenn={setOpenn}  text="Wash-Only Plan" />
                                    <Option setOpenn={setOpenn}  text="Curtain & Upholstery Cleaning" />
                                    <Option setOpenn={setOpenn}  text="Carpet & Rug Cleaning" />
                                    <Option setOpenn={setOpenn}  text="Leather & Suede Cleaning" />
                                </motion.ul>
                            </motion.div>
                        </div>
                    </li>
                    <Link to="/book">Book</Link>
                </ul>
            </div>
        </motion.div>
       }
    </AnimatePresence>
}
    
    const Option = ({ text, setOpen }) => {
      return (
        <motion.li variants={itemVariants} onClick={() => setOpen(false)} className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer">
          <span>{text}</span>
        </motion.li>
      );
    };


    const wrapperVariants = {

        open: {
          scaleY: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
          },
        },
    
        closed: {
          scaleY: 0,
          transition: {
            when: "afterChildren",
            staggerChildren: 0.1,
          },
        },
      };
      
      
      
      
      const itemVariants = {
        open: {
          opacity: 1,
          y: 0,
          transition: {
            when: "beforeChildren",
          },
        },
      
        closed: {
          opacity: 0,
          y: -15,
          transition: {
            when: "afterChildren",
          },
        },
      };
      
      
   