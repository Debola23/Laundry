import './Barner.css'


export const Barner = () => {
  return (
    <div className="barner">
      <h2 className='text-center font-semibold sm:leading-[2.5rem] md:leading-[3rem] text-3xl sm:text-4xl md:text-5xl lg:text-5xl' id='bnerH'>
        Our Branches Are Here And
                  <br/>
        Ready To Pickup From You
      </h2>
      <div className='values mt-[3rem] bg-[#50C878] w-full h-[20rem] text-white'>
        <div className='flex text-center p-22 gap-4' id='bner'>
          <div className='bar1'>
            <h3 className='bt'>
              CONVIENENCE
            </h3>
            <p className='pt'>
            Once subscribed We pick up and deliver every day of the week, 
            between 6:00 and 10:00 p.m. Items are delivered to the location of your choice.
            </p>
          </div>

          <div className='bar2'>
            <h3 className='bt'>
            Value
            </h3>
            <p className='pt'>
              Our competitively priced laundry and dry cleaning service subscriptions 
              are comparable to those of other top-notch cleaners.
            </p>
          </div>

          <div className='bar3'>
            <h3 className='bt'>
              Quality
            </h3>
            <p className='pt'>
              Umoren Dominic, our founder, grew up in the industry and is familiar with its requirements.
              She has also worked as a consultant for other laundry startups for several years.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
