import { CheckCircle, CheckCircle2 } from 'lucide-react';
import React from 'react'
import { useLocation } from 'react-router-dom';

const steps = [
  {path:"/", label:"Personal"},
  {path:"/address", label:"Address"},
  {path:"/preferences", label:"Preferences"},
  {path:"/summary", label:"Summary"},
];

const ProgressIndicator = () => {
  const location  = useLocation().pathname;

  const currentIdx = steps.findIndex((step)=>step.path === location);

  console.log()
  return (
    <section
  className="grid grid-cols-2
    gap-x-8 gap-y-4 place-items-center sm:grid-cols-4 sm:justify-items-start"
    >
    
    {steps.map((step,index)=>(
      <div key={step.label} className='flex relative'>
        <figure
        className={`flex flex-col items-center rounded-full p-1 
          ${
          index<currentIdx
          ?"text-[#FFEB00]"
          :index === currentIdx
          ? "text-[#f39e60]"
          : "text-[#9acbd0]"
          }`}
        >
          {index<currentIdx?(
            <CheckCircle2 className="size-8"/>
          ):(
            <CheckCircle className='size-8'/>
          )}

          <figcaption>{step.label}</figcaption>

        </figure>

        {index  < steps.length-1 && (
          <div
          className={`absolute h-1 sm:w-8 bottom-4 -right-16 rounded-sm
            ${
            index<currentIdx
            ? "bg-[#FFEB00]"
            : index==currentIdx
            ? "bg-[#f39e60]"
            : "bg-[#9acbd0]"
            }`}
          >
          </div>
        )}
      </div>
    ))}

    </section>
  )
}

export default ProgressIndicator
