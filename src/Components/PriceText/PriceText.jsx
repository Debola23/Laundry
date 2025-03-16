import { motion } from 'framer-motion'
import './PriceText.css'
import { SlideLeft } from '../../utility/animation'

const PriceData = [
  {
    id: '11',
    title: 'Drop Off',
    desc:"Drop off your laundry at our location, and we will take care of the rest.",
    link:"/",
    icon:<img src="/Images/dropoff.png" alt="" className='w-12 h-12'/>,
    delay:0.2,
  },
  {
    id: '22',
    title: 'Stand By',
    desc:"Dry cleaning takes up to 48 hours depending on the size, stay informed so as to come at the appropriate time.",
    link:"/",
    icon:<img src="/Images/informed.png" alt="" className='w-12 h-12'/>,
    delay:0.4,
  },
  {
    id: '33',
    title: 'Cleaning',
    desc:"nce collected, your laundry is taken to our state-of-the-art facility where skilled professionals handle the cleaning process. ",
    link:"/",
    icon:<img src="/Images/cleaning.png" alt="" className='w-12 h-12'/>,
    delay:0.6,
  },
  {
    id: '44',
    title: 'Inspection',
    desc:"Each item undergoes a thorough quality inspection to guarantee that it meets our high standards",
    link:"/",
    icon:<img src="/Images/inspect.png" alt="" className='w-12 h-12'/>,
    delay:0.8,
  },
  {
    id: '55',
    title: 'Ironing',
    desc:" Garments are ironed to perfection and ready for pick up or delivery.",
    link:"/",
    icon:<img src="/Images/ironing.png" alt="" className='w-12 h-12'/>,
    delay:1.0,
  },
  {
    id: '66',
    title: 'Packing',
    desc:"After the cleaning and inspection process, your garments are carefully packaged to maintain their freshness and quality",
    link:"/",
    icon:<img src="/Images/dryclean.png" alt="" className='w-12 h-12'/>,
    delay:1.2,
  },
  {
    id: '77',
    title: 'Pick Up',
    desc:"Your clean laundry is ready for pick up or delivery. ",
    link:"/",
    icon:<img src="/Images/pickup.png" alt="" className='w-12 h-12'/>,
    delay:1.4,
  },
]

export const PriceText = () => {
  return (
     <div className='prc'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className='space-y-4 p-6'>
            <h1 className='text-3xl md:text-4xl' id='h1'>
              Hassle-Free Laundry Service
            </h1>
            <p className='text-gray-500'>
              Get the best deals available at clean laundry, quality cloth treatment .
            </p>
          </div>
              {
                PriceData.map((item) => {
                  return (
                    <motion.div variants={SlideLeft(item.delay)} initial="hidden" animate="visible" className=' mb-2.5 space-y-4 p-6 bg-[#fbfbfb] hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]' key={item.id}>
                      <div className='text-4xl'>{item.icon}</div>
                      <p className='text-2xl font-semibold'>{item.title}</p>
                      <p className='text-gray-500 font-semibold'>{item.desc}</p>
                    </motion.div>
                    
                  );
                })
              }
            </div>
          </div>
        </div>
  )
}
