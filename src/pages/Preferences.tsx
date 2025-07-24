import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/FormContext";


const Preferences = () => {
  // This component collects user preferences in a multi-step form.


  const {state, dispatch} = useFormContext();
  // It uses the `useFormContext` to access the form state and dispatch actions.
  // It allows users to select options like newsletter subscription, notification preferences, and theme preference.
  
  const navigate = useNavigate();
  // It also uses the `useNavigate` hook to navigate to the next step in the form.
  
  function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
  }
  
  return (
      // The form includes checkboxes for newsletter and notification preferences,
    <form onSubmit={(e)=>handleSubmit(e)} className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">Preferences</h1>
      <div className="flex gap-2 items-center">
        <label htmlFor="news" className="order-1 font-bold cursor-pointer">
          NewsLetter
        </label>
        <input
          className="appearance-none size-5 bg-[#ffffff]  rounded-full checked:bg-[#5c56ff] duration-75 cursor-pointer"
          type="checkbox"
          name="news"
          checked={state.prefinfo.news}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_PREFERENCE_INFO",
              payload: { news: e.target.checked },
            })
          }
        />
      </div>

      <div className="flex gap-2 items-center">
        <label
          className="order-1 font-bold cursor-pointer"
          htmlFor="notification"
        >
          Notification
        </label>
        <input
          type="checkbox"
          className="appearance-none size-5 bg-[#ffffff]  rounded-full checked:bg-[#5c56ff] duration-75 cursor-pointer"
          name="notification"
          checked={state.prefinfo.notification}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_PREFERENCE_INFO",
              payload: { notification: e.target.checked },
            })
          }
          />
      </div>

      {/* The form includes a radio button group for theme preference (light or dark). */}
      {/* It allows users to select their preferred theme for the application. */}
      
      <div className="flex flex-col gap-4">
        <label htmlFor="theme">Theme Preference</label>
        <div className="flex gap-2 items-center">
          <input
            className="appearance-none size-5 bg-[#ffffff] rounded-full checked:bg-[#5c56ff] duration-150 cursor-pointer"
            type="radio"
            id="theme"
            value="light"
            checked={state.prefinfo.theme === "light"}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_PREFERENCE_INFO",
                payload: { theme: e.target.value as "light" | "dark" },
              })
            }
          />
          <span>Light</span>
        </div>

        <div className="flex gap-2 items-center">
          <input
            className="appearance-none size-5 bg-[#ffffff] rounded-full checked:bg-[#5c56ff] duration-150 cursor-pointer"
            type="radio"
            id="theme"
            value="dark"
            checked={state.prefinfo.theme === "dark"}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_PREFERENCE_INFO",
                payload: { theme: e.target.value as "light" | "dark" },
              })
            }
          />
          <span>dark</span>
        </div>
      </div>

      <div className="flex *:basis-1/2 gap-4">
        <button
          className="p-2 border border-[#FFEB00] rounded-sm transition-colors hover:bg-[#FFEB00] hover:text-[#2A004E]"
          onClick={() => navigate("/address")}
          type="button"
        >
          Back
        </button>
        <button
          className="p-2 border border-[#FFEB00] rounded-sm transition-colors hover:bg-[#FFEB00] hover:text-[#2A004E]"
          type="submit"
          onClick={() => navigate("/summary")}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Preferences;
