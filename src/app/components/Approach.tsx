"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20">
        <h1 className="heading">
            Our <span className="text-purple">Approach</span>

        </h1>
      <div className="my-20 flex
                        flex-col lg:flex-row 
                         items-center justify-center
                         gap-4
                        ">
        <Card 
        title="Planning & Strategy" 
        icon={<AceternityIcon order='Phase 1'/>}
        description="Effective planning and strategy are crucial for achieving any goal. 
        It involves setting clear objectives, identifying resources required,
         and creating a comprehensive timeline. In the realm of civil engineering,
          planning and strategy help in organizing effecient work, optimizing performance, 
          and ensuring scalability. A well-thought-out plan and strategy lay the
           foundation for successful 
           implementation and desired outcomes"
        
        
        
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card 
        title="Reasearch & Analysis" 
        icon={<AceternityIcon order='Phase 2'/>}
        description="Research & Analysis play a key role in making informed decisions. 
        Effective research involves gathering relevant data and information from reliable sources, 
        while analysis involves examining and interpreting that data to draw meaningful insights. 
        In the civil engineering field, research and analysis help in understanding user needs, 
        identifying problem areas, and finding the best solutions. 
        This process enables developers to make data-driven decisions 
        and create efficient and effective engineering solutions">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          
        </Card>
        <Card 
        title="Product development" 
        icon={<AceternityIcon order='Phase 3'/>}
        description="Product development in civil engineering refers to the process of 
        creating and improving infrastructure and construction projects. 
        It involves identifying the needs and requirements of the project, 
        conducting feasibility studies, 
        designing the structure, performing structural analysis and calculations, 
        creating prototypes, and implementing the final product. 
        In civil engineering, 
        product development ensures that construction projects are designed 
        and executed to meet safety standards, 
        environmental regulations, 
        and client expectations.">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] 
                  group/canvas-card flex items-center 
                  justify-center dark:border-white/[0.2]  
                     max-w-sm w-full mx-auto p-4 
                     h-[30rem] 
                    lg:h-[35rem]
                    relative
                    rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center 
                        group-hover/canvas-card:-translate-y-4 
                        group-hover/canvas-card:opacity-0 
                        transition duration-200 
                        w-full  mx-auto flex 
                        items-center 
                        justify-center
                        absolute
                        top-[50%] 
                        left-[50%]
                        translate-x-[-50%]
                        translate-y-[-50%]">
          {icon}
        </div>
        <h2 className="dark:text-white 
        opacity-0 group-hover/canvas-card:opacity-100 
        relative z-10 text-black mt-4 
         font-bold group-hover/canvas-card:text-white
          group-hover/canvas-card:-translate-y-2 
          transition
           duration-200  
           text-center text-3xl">
          {title}
        </h2>
        <h2 className="dark:text-white 
                        text-sm opacity-0 
                        group-hover/canvas-card:opacity-100 
                        relative z-10 text-black
                         mt-4  
                         font-bold
                          group-hover/canvas-card:text-white 
                          group-hover/canvas-card:-translate-y-2 
                          transition 
                          duration-200" style={{color:'#e4ecff'}}>
          {description}
        </h2>


      </div>
    </div>
  );
};

const AceternityIcon = ({order}:{order: string}) => {
  return (
 <div>
    <button className="relative inline-flex h-12 
                       overflow-hidden rounded-full
                        p-[1px] focus:outline-none
                         focus:ring-2 focus:ring-slate-400 
                         focus:ring-offset-2
                         focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full 
                   w-full cursor-pointer 
                   items-center justify-center 
                   rounded-full 
                   bg-slate-950 px-5  
                   py-2  
                   text-white 
                   backdrop-blur-3xl
                   text-2xl
                   font-bold
                   ">
    {order}
  </span>
</button>
 </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
export default Approach;