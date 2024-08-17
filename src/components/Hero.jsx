import React from 'react';
import Navbar from './Navbar';
import heroImage from '../assets/hero.png'; 

const Hero = (props) => {
  return (
    <div
      className=" bg-cover bg-center bg-no-repeat h-[520px]"
      style={{ backgroundImage: `url(${heroImage})`}}
    >
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
        <h1 className="text-4xl font-bold py-24 justify-center text-white text-center ">{props.title}</h1>
      </div>
    </div>
  );
}

export default Hero;
