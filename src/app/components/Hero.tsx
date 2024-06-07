import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { ImGoogleDrive } from "react-icons/im";

export const Hero = () => {
  return (
  <div className='pb-20 pt-36'>
    <div>
      <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
      <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
      <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]  ' fill='blue' />
    
    
    </div>
    <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.01] bg-grid-black/[0.3]  flex items-center justify-center absolute left-0 top-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
   
    </div>
    <div className='flex justify-center relative my-20 z-10'>
      <div className='mxmax-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
        <h2 className='uppercase tracking-widest text-xl text-center text-blue-100 max-w-90'>Shield Bricks an innovative way to save the future.</h2>

      <TextGenerateEffect
           className='text-center text-[40px] md:text-5xl lg:text-6xl'
           words='Enabling a clean and 
           sustainable future for all'
           />

           <p className='text-center '>
            At shield bricks we deals with civil engineering materials and aims to develop a clean and environmental friendly products.

           </p>

           <a href='#'>
            <MagicButton
              title="see our work" icon={<ImGoogleDrive />} position={'left'}
             
              
              />

           </a>

      </div>

    </div>
  </div>
  )
}
