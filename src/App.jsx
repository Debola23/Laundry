import { useState, useEffect } from "react";
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { Hero } from './Components/Hero/Hero'
import { Offer } from './Components/Offer/Offer'
import { Barner } from './Components/Barner/Barner'
import { Counter } from './Components/Counter/Counter'
import { Poster } from './Components/Poster/Poster'
import { Testimonial } from './Components/Testimonial/Testimonial'
import { Footer } from './Components/Footer/Footer'


function App() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Offer/>
      <Barner/>
      <Counter/>
      <Poster/>
      <Testimonial/>
      <Footer/>
      <button onClick={scrollToTop}
              className={`fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg transition-opacity duration-300 ${
              isVisible ? "opacity-100" : "opacity-0"}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
            <path  d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
          </svg>
      </button>
    </div>
      
    </>
  )
}

export default App
