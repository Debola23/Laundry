import React from 'react'
import { NavbarMenu } from "../../mockData/data"
import './Navbar.css'
import { ResponsiveMenu } from './ResponsiveMenu'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'

export const Navbar = () => {

   const [open, setOpen] =React.useState(false)
   const [openn, setOpenn] = useState(false); // Dropdown state

  return (
    <>
    <nav>
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-20 flex justify-between items-center py-4">
            {/* logo section */}
            <div>
                <a href="/">
                    <img src="/Images/logoicon.png" alt="" className="w-18 h-18" />
                </a>
            </div>
            {/* menu section */}
            <div className="hidden md:block">
                <ul className="flex items-center gap-6 text-black font-bold ">
                    {
                        NavbarMenu.map((item) => {
                            return(
                                <li key={item.id} className="mobilelist">
                                    <Link to={item.link} className="inline-block py-1 px-3 hover:text-emerald-700">
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                     {/* Dropdown for More Services */}
                    <div className="relative" id='mobilelist'>
                        <button onClick={() => setOpenn((prev) => !prev)} className="flex items-center text-ul  text-black font-bold px-4 py-2 rounded-3xl transition-colors">
                          <span className="text-sm  hover:text-emerald-700">More Services</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className='ar'>
                            <path d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                          </svg>
                        </button>
                        <motion.ul initial="closed" animate={openn ? "open" : "closed"} variants={wrapperVariants} style={{ originY: "top", translateX: "-50%" }} className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-56 overflow-hidden text-center">
                          <Option setOpenn={setOpenn} text="Wash-Only Plan" />
                          <Option setOpenn={setOpenn} text="Curtain & Upholstery Cleaning" />
                          <Option setOpenn={setOpenn} text="Carpet & Rug Cleaning" />
                          <Option setOpenn={setOpenn} text="Leather & Suede Cleaning" />
                        </motion.ul>
                    </div>
                </ul>
            </div>
           
            {/* membership btn */}
            <div className=" flex items-center gap-4">
                <button className="text-2xl hover:bg-emerald-700 hover:text-black rounded-full p-2 duration-200" id='membership1'>
                    <Link to="/price">
                        <img src="/Images/dryclean.png" alt="" className="w-8.5 h-8.5"/>
                    </Link>
                </button>
                <img src="/Images/menu.png" alt=""className="text-4xl w-6 h-6 hidden" id="menu1" onClick={() => setOpen(!open)} />
                <img src="/Images/menu.png" alt=""className="text-4xl w-6 h-6 hidden" id="menu" onClick={() => setOpen(!open)} />
            </div>
        </div> 
    </nav>
    <ResponsiveMenu open={open} />
    </>
  )
}

const Option = ({ text, setOpenn }) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => setOpenn(false)}
        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
      >
        <span>{text}</span>
      </motion.li>
    );
  };
  
  // Animation Variants
  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.1 },
    },
    closed: {
      scaleY: 0,
      transition: { when: "afterChildren", staggerChildren: 0.1 },
    },
  };
  
  const itemVariants = {
    open: { opacity: 1, y: 0, transition: { when: "beforeChildren" } },
    closed: { opacity: 0, y: -15, transition: { when: "afterChildren" } },
  };
