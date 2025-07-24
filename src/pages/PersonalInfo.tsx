import {  useNavigate } from "react-router-dom";
import { useFormContext } from "../context/FormContext";



const PersonalInfo = () => {
  
// This component collects personal information from the user.
  
// It uses the `useFormContext` to access the form state and dispatch actions.

const {state, dispatch} = useFormContext();
  
// The form includes fields for first name, last name, and email.

// It also uses the `useNavigate` hook to navigate to the next step in the form.
const navigate = useNavigate();

// The `handleSubmit` function prevents the default form submission and navigates to the address step.

function handleSubmit(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault();
  navigate("/address");
  }
  
  return (
    <form onSubmit={(e)=>handleSubmit(e)} className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold"> Personal Information</h1>

      <div className="flex flex-col gap-y-2">
        <label className="font-bold"  htmlFor="firstname">First Name</label>
        <input type="text" id="firstname" required
         className="border-l border-[#FFEB00] focus:bg-white outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#FFEB00] font-bold"
        value={state.personalInfo.firstname}
        onChange={(e)=>
          dispatch({
            type:"UPDATE_PERSONAL_INFO",
            payload:{firstname: e.target.value},
          })
        }
        />
      </div>

      <div className="flex flex-col gap-y-2">
        <label htmlFor="lastname" className="font-bold"> Last Name</label>
        <input type="text" id="lastname" required
        value={state.personalInfo.lastname}
        className="border-l border-[#FFEB00] focus:bg-white outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#FFEB00] font-bold"
         onChange={(e)=>
          dispatch({
            type:"UPDATE_PERSONAL_INFO",
            payload:{lastname: e.target.value},
          })
        }
        />
      </div>

      <div className="flex flex-col gap-y-2">
        <label className="font-bold" htmlFor="email">Email</label>  
        <input type="email" id="email" required
        className="border-l border-[#FFEB00] focus:bg-white outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#FFEB00] font-bold"
        value={state.personalInfo.email}
         onChange={(e)=>
          dispatch({
            type:"UPDATE_PERSONAL_INFO",
            payload:{email: e.target.value},
          })
        }
        />
      </div>

      <button
        className="p-2 border border-[#FFEB00] rounded-sm transition-colors hover:bg-[#FFEB00] hover:text-[#2A004E]"
        type="submit"
       >Next</button>
    </form>
  )
}

export default PersonalInfo
