import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '../../../data'
import { profile } from 'console'

const Footer = () => {
  return (
    <footer className='w-full  pb-10 mb-[100px]
                       md:mb-5 id="contact'>

        <div className='flex flex-col items-center'>
               <h1 className=' heading 
                              lg:max-w-[45vw]'               >
                Ready to make <span className='text-purple'> a bigger change</span> in the
                world?
               </h1>
               <p className='text-white-200
                               md:mt-10 my-5
                               text-center'>
                Reach us out today and Let us all be the diffrence
                for a better future for all.
               </p>
               <a href='mailto:ce210004049@iiti.ac.in'>
                <MagicButton
                           title="Let's get in touch"
                           icon={<FaLocationArrow/>}
                           position='right' 
                
                  />

               </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col
                        justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Shield Bricks</p>

          <div className='flex items-center md:gap-3
                          gap-6 '>
                       {socialMedia.map((profile)=>(
                          <div key={profile.id} className='w-10 h-10
                                                            cursor-pointer flex justify-center
                                                            items-center backdrop-filter
                                                             backdrop:backdrop-blur-lg
                                                             saturate-180
                                                             bg-opacity-75 bg-black-200 rounded-lg border
                                                              border-black-300'>
                            <a href={profile.link}>
                              
                              <img src={profile.img} 
                                width={20}
                                height={20}
                                style={{ filter: "invert(100%)", backgroundColor: "white" }}
                            />
                            </a>
                            

                          </div>


                       ))}     

          </div>









        </div>






    </footer>  )
}

export default Footer