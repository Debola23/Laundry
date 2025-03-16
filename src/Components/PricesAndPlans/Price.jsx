import { SlideUp } from '../../utility/animation';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import Style from './Price.module.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


export const Price = () => {

  return (
    <div className={Style.price}>
        <Navbar/>
        <motion.div variants={SlideUp(0.3)} initial="hidden" animate="visible" className='flex justify-center'>
            <h2 className='text-3xl sm:text-3xl md:text-4.5xl lg:text-5xl  sm:leading-[2.5rem] md:leading-[3rem] text-emerald-600 text-center text-semibold pt-8'>
                Pricing
            </h2>
        </motion.div>
        <motion.p variants={SlideUp(0.6)} initial="hidden" animate="visible" className={Style.Dtext}>
            Our professional laundry service offers unlimited wash and fold options for a fixed monthly fee.<br/>
            Whether you’re a busy professional looking for a 48-hour laundry service <br/>
            or need same-day dry cleaning, Laundrymann has got you covered.”
        </motion.p>
        <motion.div variants={SlideUp(0.9)} initial="hidden" animate="visible" className={Style.card}>
          <div className={Style.priceCard}>
            <h2>Laundry Price List</h2>
            <ul>
                <li><span>Shirt</span> <span>$3</span></li>
                <li><span>Pants</span> <span>$5</span></li>
                <li><span>Suit</span> <span>$12</span></li>
                <li><span>Dress</span> <span>$10</span></li>
                <li><span>Bed Sheets</span> <span>$8</span></li>
            </ul>
            <button>
              <Link to="/book">
                <img src="/Images/dropoff.png" className='w-10 h-12' alt="" />
              </Link>
            </button>
          </div>
        </motion.div>
        <Footer/>
    </div>
  )
}
