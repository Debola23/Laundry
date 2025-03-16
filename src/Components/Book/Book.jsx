import { Navbar } from '../Navbar/Navbar';
import Style from './Book.module.css';
import { motion } from 'framer-motion';
import { SlideUp } from '../../utility/animation';
import { Footer } from '../Footer/Footer';
import { Counter } from '../Counter/Counter';
import { useState } from 'react';


export const Book = () => {

  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [items, setItems] = useState("");

  const sendToWhatsApp = () => {
    if (!name || !service || !phone) {
      alert("Please fill in all required fields: Name, Service, and Phone Number.");
      return;
    }

    const businessNumber = "2349151021180"; // Replace with the owner's WhatsApp number
    const message = `Hello, my name is ${name}. 
    I want to book a laundry service. 
    Service: ${service}
    Phone: ${phone}
    Delivery Address: ${address || "Not provided"}
    Items List: ${items || "Not provided"}`;

    const whatsappURL = `https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, "_blank");
  };


  return (
    <>
    <Navbar/>

    <div>
        {/* Trainer Intro */}  
        <div className="w-full bg-gray-100 py-12 px-4 md:px-12 lg:px-24" id={Style.trainCont}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            
            {/* Left Text Section */}
            <motion.div variants={SlideUp(0.6)} initial="hidden" whileInView="visible" className="lg:col-span-3 space-y-4 text-left">
              <p className="text-base md:text-lg text-gray-700" id={Style.tp}>
                Tired of laundry piling up? Let us handle it for you! At [Your Laundry Business Name], 
                we offer professional laundry and dry-cleaning services with quick turnaround times.
              </p>

              <p className="mt-4 text-sm md:text-base font-medium" id={Style.tp}>
              [Your Laundry Business Name] services includes:
              </p>

              {/* List */}
              <ul className="grid grid-cols-2 gap-2 list-disc pl-4 text-gray-800 text-sm md:text-base">
                <li>Wash, Dry & Fold</li>
                <li>Dry Cleaning</li>
                <li>Ironing/Pressing</li>
                <li>Stain Removal</li>
                <li>Carpet & Rug Cleaning</li>
                <li>Curtain & Upholstery Cleaning</li>
                <li>Water-Saving Laundry</li>
                <li>Restaurant & Catering Laundry</li>
              </ul>

              <p className="mt-6 text-sm md:text-base" id={Style.tp}>
                <span className="uppercase font-semibold text-black">
                  Want to give your clothes quality treatment?
                </span> Fill out the form and [Your Laundry Business Name] will reach out to you !
              </p>
            </motion.div>

            {/* Right Image Section */}
            <motion.div variants={SlideUp(1.2)} initial="hidden" whileInView="visible" 
              className="lg:col-span-2 flex justify-center"   >
              <img src="/Images/clothes.jpg" alt="Personal Trainer"
                className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-md"
                id={Style.tImg}
              />
            </motion.div>
          </div>
        </div>
        <Counter/>
      {/* Form */}
      <div className={Style.form}> 
        <div className="mt-4 flex flex-col rounded-lg p-4 shadow-sm bg-[#070e23]" id={Style.formId}>
        
        <div className="mt-4">
          <label className="text-white" htmlFor="name">FULL NAME <span className="text-red-500">*</span></label>
          <input placeholder="Name"  className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1 outline-0" type="text" value={name}onChange={(e) => setName(e.target.value)} required/>
        </div>

        <div className="mt-4">
          <label className="text-white" htmlFor="service">SERVICE <span className="text-red-500">*</span></label>
          <textarea placeholder="Pick any service from the above list and type here" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1 outline-0" value={service} onChange={(e) => setService(e.target.value)} required/>
        </div>

        <div className="mt-4 flex flex-row space-x-2" id={Style.question}>

          <div className="flex-1" id={Style.q1}>
            <label className="text-white" htmlFor="phone">PHONE NUMBER <span className="text-red-500">*</span></label>
            <input placeholder="+234" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1 outline-0" type="text"value={phone}onChange={(e) => setPhone(e.target.value)}required/>
          </div>

          <div className="flex-1" id={Style.q2}>
            <label className="text-white" htmlFor="address">Delivery?</label>
            <input placeholder="Address" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1 outline-0"   type="text"value={address}onChange={(e) => setAddress(e.target.value)} />
          </div>

        </div>

        <div className="mt-4">
          <label className="text-white" htmlFor="items">LIST YOUR ITEMS HERE <span className="text-red-500">*</span></label>
          <textarea placeholder="Type the list of clothes that you are dry cleaning here" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1 h-48 outline-0"  value={items}onChange={(e) => setItems(e.target.value)} required/>
        </div>

        <div className="mt-4 flex justify-end">
          <button  className={`bg-[#070e23] text-white rounded-md px-4 py-1 outline-0 transition duration-200 ${
              !name || !service || !phone ? "opacity-50 cursor-not-allowed" : "hover:bg-white hover:text-[#070e23]"
            }`} 
            onClick={sendToWhatsApp}
            disabled={!name || !service || !phone}>
            <img src="/Images/dropoff.png" className='w-10 h-12' alt="" />
          </button>
        </div>
      </div>
    </div> 
  </div>
    <Footer/>
  </> 
  )
}
