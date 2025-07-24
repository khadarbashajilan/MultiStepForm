import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";


const initial: FormData["prefinfo"] = {
  news: false,
  notification: false,
  theme: "light",
};

const Preferences = () => {
  const [state, dispatch] = useReducer(PrefReducer, initial);

  const navigate = useNavigate();

  function PrefReducer(state = initial, action: FormAction) {
    return { ...state, ...action.payload };
  }

  function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    console.log(state);
  }

  return (
    <form onSubmit={(e)=>handleSubmit(e)} className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">Preferences</h1>
      <div className="flex gap-2 items-center">
        <label htmlFor="news" className="order-1 font-bold cursor-pointer">
          NewsLetter
        </label>
        <input
          className="appearance-none size-5 bg-[#ffffff] hover:bg-[#F39E60] rounded-full checked:bg-[#FFEB00] duration-75 cursor-pointer"
          type="checkbox"
          name="news"
          checked={state.news}
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
          className="appearance-none size-5 bg-[#ffffff] hover:bg-[#F39E60] rounded-full checked:bg-[#FFEB00] duration-75 cursor-pointer"
          name="notification"
          checked={state.notification}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_PREFERENCE_INFO",
              payload: { notification: e.target.checked },
            })
          }
        />
      </div>

      <div className="flex flex-col gap-4">
        <label htmlFor="theme">Theme Preference</label>
        <div className="flex gap-2 items-center">
          <input
            className="appearance-none size-5 bg-[#ffffff] rounded-full checked:bg-[#FFEB00] duration-150 cursor-pointer"
            type="radio"
            id="theme"
            value="light"
            checked={state.theme === "light"}
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
            className="appearance-none size-5 bg-[#ffffff] rounded-full checked:bg-[#FFEB00] duration-150 cursor-pointer"
            type="radio"
            id="theme"
            value="dark"
            checked={state.theme === "dark"}
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
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Preferences;
