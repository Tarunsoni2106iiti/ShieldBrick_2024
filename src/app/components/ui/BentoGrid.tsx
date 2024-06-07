'use client'


import { BackgroundGradientAnimation } from "./GradientBg";
import { Globe } from "./Globe";
import { cn } from "./cn";
import {GlobeDemo} from "./GridGlobe"
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from './confetti.json';
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
 spareImg,
 
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?:number;
  img ?:string ;
  imgClassName ?:string;
  titleClassName?:string;
  spareImg?:string;
}) => {
   const [copied, setcopied] = useState(false);
   const handleCopy =() => {
    navigator.clipboard.writeText('ce210004049@iiti.ac.in');
    setcopied(true);

}

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style ={{
        background: "rgb(2,0,36)",
        backgroundColor: "linear-gradient(68deg, rgba(2,0,36,1) 34%, rgba(125,42,148,1) 80%, rgba(103,33,110,1) 100%)",         
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
      <div className="w-full h-full absolute">
          {img && (
            <img
            src={img}
            alt={img}
            className={cn(imgClassName, "object-cover object-center ")}
          />
            )}

        </div>
        <div 
        className={'absolute right-10 -bottom-5 ${id === 5 && "w-full opacity-80"}'}>

            {spareImg && (
                <img
                src={spareImg}
                alt={spareImg}
                className="object-cover object-center w-full h-full"
              />
            )}
        </div>
        
        {id === 6 && (
            
            <BackgroundGradientAnimation>
                <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">

                </div>
            </BackgroundGradientAnimation>
        )}

        
        

        <div className= {cn(
           titleClassName,
           "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
        )}
        >
            <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                {description}
            </div>
            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
          {title}
            </div>
        
       {id === 2 && <GlobeDemo/>}

       { id === 3 && (
        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
        <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
        {['Rubber Recylcling','Sustainable construction Practices','waste management'].map((item)=>(
            <span key={item}
            className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
            lg:opacity-65 rounded-lg text-center bg-[#10132E]">
                {item}
            </span>
        ))}

<span className="lg:py-4 lg:px-3 py-4 px-3  opacity-50 
            lg:opacity-100 rounded-lg  bg-[#10132E]"/>
        
        </div>
        <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
        <span className="lg:py-4 lg:px-3 py-4 px-3  opacity-50 
            lg:opacity-100 rounded-lg  bg-[#10132E]"/>
        {['Eco-Bricks','Tiles','Recycling concrete'].map((item)=>(
            <span key={item}
            className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
            lg:opacity-50 rounded-lg text-center bg-[#10132E]">
                {item}
            </span>
        ))}


        
        </div>
        </div> 
       )}


       {id ===6 && (
        <div className="mt-5 relative">
         <div className={'absolute -bottom-5 right-0'}>
         <Lottie options={{
            loop:copied,
            autoplay: copied,
            animationData:animationData,
            rendererSettings:{
                preserveAspectRatio: 'xMidYmid slice'

            }
         }}/>
         </div>
         <MagicButton
              title={copied? 'Email Copied':'Contact Us'}
              icon={<IoCopyOutline/>}
              position="left"
              otherClasses="!bg-[#161a31]]"
              handleClick={handleCopy}
         
         />

        </div>
       )}
      </div >  
      <div className="group-hover/bento:translate-x-2 transition duration-200">
       
      </div>
    </div>

    </div>
  );
};
