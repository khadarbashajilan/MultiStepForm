import { useReducer } from "react"
import {  useNavigate } from "react-router-dom";



const initialPersonalInfo: FormData["personalInfo"]={
  firstname:"",
  lastname:"",
  email:"",
};

const PersonalInfo = () => {
  
  const [state, dispatch] = useReducer(personalInfoReducer, initialPersonalInfo);

  const navigate = useNavigate();

  function personalInfoReducer(state=initialPersonalInfo, action:FormAction ){
    return {...state, ...action.payload};
  }

  function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    console.log(state); // -> {Fname: --- , Lname: ---, email: --@gmail.com}
    navigate("/address");
  }

  return (
    <form onSubmit={(e)=>handleSubmit(e)} className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold"> Personal Information</h1>

      <div className="flex flex-col gap-y-2">
        <label className="font-bold"  htmlFor="firstname">First Name</label>
        <input type="text" id="firstname" required
         className="border-l border-[#FFEB00] focus:bg-white outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#FFEB00] font-bold"
        value={state.firstname}
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
        value={state.lastname}
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
        value={state.email}
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
