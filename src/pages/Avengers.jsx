import React from 'react'
import Hero from '../components/Hero'
import avangerImg from '../assets/avengers.png'

const Avengers = () => {
  return (
    <div>
        <Hero/>
      <div className=' flex pt-28  pl-56'>
          <div >
          <img src={avangerImg} style={{ width: '400px', height: '470px' }} />

        
          </div>

          <div className='ml-12 mt-2 '> 
          <h2 className='text-4xl font-bold'>Avengers Endgame</h2>


           <p className='mt-8' style={{maxWidth: 640}}>After the devastating events of Avengers: Infinity War,
             the universe is in ruins due to the efforts of the Mad Titan, 
             Thanos. With the help of remaining allies, the Avengers must assemble 
             once more in order to undo Thanos' actions and restore order to the
              universe once and for all, no matter what consequences may be in store.</p>
            <div>

            <div className='mt-8'>
                <div className='flex'>
                   <p className='font-bold'>Country:</p>
                  <p className='ml-2'>USA</p>
                </div>
                <div className='flex'>
              <p  className='font-bold'>Gentre:</p>
               <p className='ml-2' >Action, Adventure, sciece fiction</p>
             </div>
             <div className='flex'>
              <p  className='font-bold'>Year:</p>
               <p className='ml-2'>2019</p>
             </div>
             <div className='flex'>
              <p  className='font-bold'>Type:</p>
              <p className='ml-2'>Movie</p>
             </div>

             <div className='flex space-x-10 mt-4' >
             <button className="bg-purple-500 text-white  py-1 px-4 rounded-full">Edit</button>
             <button className="bg-purple-500 text-white  py-1 px-4 rounded-full">Delete</button>
            </div>


             </div>
            </div> 
          </div>
         


      </div>

    </div>
  )
}

export default Avengers