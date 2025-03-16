import { motion } from 'framer-motion'
import './Offer.css'
import { SlideRight } from '../../utility/animation'



const OfferData = [
  {
    id: '1',
    title: 'Washing',
    desc:"All clothes are properly washed and taken care of with the appropriate detergent.",
    link:"/",
    icon:<img src="/Images/wash.png" alt="" className='w-12 h-12'/>,
    delay:0.3,
  },
  {
    id: '2',
    title: 'Ironing',
    desc:"All clothes are well ironed to ensure its neatness.",
    link:"/",
    icon:<img src="/Images/iron.png" alt="" className='w-12 h-12'/>,
    delay:0.6,
  },
  {
    id: '3',
    title: 'Stain removal',
    desc:"Our stain removal treatment is top, and you are guaruanteed a spotless cloth after",
    link:"/",
    icon:<img src="/Images/stain.png" alt="" className='w-12 h-12'/>,
    delay:0.9,
  },
]

export const Offer = () => {
  return (
    <div className='offer'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className='space-y-4 p-6'>
            <h1 className='text-3xl md:text-4xl' id='h1'>
             Our Services
            </h1>
            <p className='text-gray-500'>
              We offer various services to maintain cloth quality while keeping it clean.
            </p>
          </div>
          {
            OfferData.map((item) => {
              return (
                <motion.div variants={SlideRight(item.delay)} initial="hidden" whileInView="visible" className='space-y-4 p-6 bg-[#fbfbfb] hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]' key={item.id}>
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
