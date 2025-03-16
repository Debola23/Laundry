import "./Hero.css"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { SlideUp } from "../../utility/animation"


export const Hero = () => {
  return (
    <>
    <div className="intro">
      <div className="hero w-full  flex flex-col items-center justify-center text-center px-4">
        <motion.h2 variants={SlideUp(0.6)} initial="hidden" animate="visible" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  sm:leading-[3.5rem] md:leading-[5rem] text-white pt-18">
          Laundry & Dry Cleaning
          <br />
          With 48H Delivery
        </motion.h2>

        <div className="flex justify-center pt-12">
          <Link to="/price" className="hbtn" href="#">
           <button className="pbtn">
              View Prices
           </button>
          </Link>
        </div>
      </div>
    </div>
      
    </>
   
  )
}
