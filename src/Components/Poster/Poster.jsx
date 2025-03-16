import './Poster.css'
import { motion } from 'framer-motion'
import { SlideLeft } from '../../utility/animation'
import { Link } from 'react-router-dom'


export const Poster = () => {
  return (
    <div className="poster">
      <div className="container my-14">
        <div className='bg-[#50C878] py-15 md:py-24 flex justify-center items-center'>
          <div className='flex flex-col justify-center text-center space-y-8 lg:px-44 text-white'>
            <motion.h1  variants={SlideLeft (0.5)} initial="hidden"  whileInView={"visible"}  id="h1p" className='text-3xl lg:text-5xl font-bold uppercase'>
              Get The Best Treatment For Your Clothes, Are You Ready.
            </motion.h1>
            <motion.p variants={SlideLeft (0.7)} initial="hidden"  whileInView={"visible"}  id="pp" className=''>
              We will make sure you get the right and the best quality products for your clothes
            </motion.p>
            <motion.button variants={SlideLeft (0.9)} initial="hidden"  whileInView={"visible"}  className=" mt-8 flex justify-center gap-6" >
              <Link to="/book" className="ppbtn">
                  Dry Clean
              </Link>
            </motion.button>
          </div>    
        </div>
      </div>
    </div>
  )
}
