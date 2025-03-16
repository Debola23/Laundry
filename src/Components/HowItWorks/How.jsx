import { Navbar } from '../Navbar/Navbar'
import Style from './How.module.css'
import { Footer } from '../Footer/Footer'
import { PriceText } from '../PriceText/PriceText'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'







export const How = () => {

  return (
    <>
    <Navbar/>
      <div className={Style.pMain}>
        <div className={Style.priceSec}>
          <PriceText />
        </div>
        <div className={Style.faq}>
          <div className={Style.faqIntro}>
            <h2 className='text-center text-4xl sm:text-3xl md:text-4xl lg:text-5xl '>
              Frequently Asked Questions
            </h2>
          </div>
          <div className=" w-full pt-12 px-4">
            <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-emerald-600">
              <Disclosure as="div" className="p-6" defaultOpen={true}>
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="lg:text-2xl text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                    What is your stand point stained clothes?
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"  viewBox="0 0 16 16">
                    <path  d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                  </svg>
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-white">
                  If the fault is from us, we will collect and redo.
                </DisclosurePanel>
              </Disclosure>

              <Disclosure as="div" className="p-6">
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="lg:text-2xl text-sm/12 font-medium text-white group-data-[hover]:text-white/80">
                    Is door step delivery available?
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"  viewBox="0 0 16 16">
                    <path  d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                  </svg>
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-white">
                  Not at the moment.
                </DisclosurePanel>
              </Disclosure>

              <Disclosure as="div" className="p-6">
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="lg:text-2xl text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                    Is there any form of loyalty bonus?
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"  viewBox="0 0 16 16">
                    <path  d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                  </svg>
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-white">
                  No.
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>
        </div>
      </div> 
    <Footer/>
    </>
  )
}
