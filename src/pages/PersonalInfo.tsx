import { useReducer } from "react"
import {  useNavigate } from "react-router-dom";

interface FormData{
  personalInfo:{
    firstname:string;
    lastname:string;
    email:string;
  }
}

interface FormAction{
  type:"UPDATE_PERSONAL_INFO",
  payload:Partial<FormData["personalInfo"]>,
}

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
    <form onSubmit={(e)=>handleSubmit(e)}>
      <h1>Personal Information</h1>

      <div>
        <label htmlFor="firstname">First Name</label>
        <input type="text" id="firstname" required
        value={state.firstname}
        onChange={(e)=>
          dispatch({
            type:"UPDATE_PERSONAL_INFO",
            payload:{firstname: e.target.value},
          })
        }
        />
      </div>

      <div>
        <label htmlFor="lastname">Last Name</label>
        <input type="text" id="lastname" required
        value={state.lastname}
         onChange={(e)=>
          dispatch({
            type:"UPDATE_PERSONAL_INFO",
            payload:{lastname: e.target.value},
          })
        }
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>  
        <input type="email" id="email" required
        value={state.email}
         onChange={(e)=>
          dispatch({
            type:"UPDATE_PERSONAL_INFO",
            payload:{email: e.target.value},
          })
        }
        />
      </div>

      <button type="submit">Next</button>
    </form>
  )
}

export default PersonalInfo
