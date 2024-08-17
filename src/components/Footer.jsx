import React from 'react'

const Footer = () => {
  return (
    <div className='flex bg-gray-300 h-[1px] w-full items-center justify-between mt-[100px] p-10 text-black '>  
       <div >
      <p>Enter-Stram</p>
        </div> 

        <div className='flex flex-1 justify-center  space-x-10'>
            <p>Movies </p>
            <p>Series</p>
        </div>
     <div className='flex-none'>
      <p>SUBSCRIBE</p>
     </div>
</div>
  )
}

export default Footer