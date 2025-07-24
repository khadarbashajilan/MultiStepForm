import { CheckCircle, CheckCircle2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';

// This component displays a progress indicator for a multi-step form.
// It shows the current step and previous steps with appropriate styling.

// The steps are defined in an array with their paths and labels.
const steps = [
  {path:"/", label:"Personal"},
  {path:"/address", label:"Address"},
  {path:"/preferences", label:"Preferences"},
  {path:"/summary", label:"Summary"},
];

const ProgressIndicator = () => {
  // The component uses the current URL path to determine which step is active.
  const location  = useLocation().pathname;
  // It uses the `useLocation` hook from `react-router-dom` to get the current path.
  const currentIdx = steps.findIndex((step)=>step.path === location);

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
          // The steps are displayed as circles with icons and labels, and a line connecting them.
        >
          {index<currentIdx?(
            <CheckCircle2 className="size-8"/>
          ):(
            <CheckCircle className='size-8'/>
          )}

          <figcaption>{step.label}</figcaption>

        </figure>

        {/* A line is drawn between the steps, with different colors based on the current step. */}
        
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
