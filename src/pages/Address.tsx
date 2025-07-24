import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/FormContext";



const Address = () => {
  // This component collects the user's address information in a multi-step form.
  
  const {state, dispatch} = useFormContext();
  // It uses the `useFormContext` to access the form state and dispatch actions.
  // It allows users to enter their street, city, and zip code. 
  const navigate = useNavigate();
  // It also uses the `useNavigate` hook to navigate to the next step in the form.
  
  // The `handleSubmit` function prevents the default form submission and navigates to the preferences step.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate("/preferences");
  }
  return (
      // The form includes fields for street, city, and zip code.
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">Address</h1>
      <div className="flex flex-col gap-y-2">
        <label className="font-bold" htmlFor="street" >
          Street
        </label>
        <input
          className="border-l border-[#FFEB00] focus:bg-white outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#FFEB00] font-bold"
          type="text"
          id="street"
          value={state.address.street}
          onChange={(e)=>
            dispatch({
              type: "UPDATE_ADDRESS",
              payload: { street: e.target.value },
            })
          }
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label className="font-bold" htmlFor="city">
          City
        </label>
        <input
          type="text"
          id="city"
          className="border-l border-[#FFEB00] focus:bg-white outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#FFEB00] font-bold"
          value={state.address.city}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_ADDRESS",
              payload: { city: e.target.value },
            })
          }
          required
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label className="font-bold" htmlFor="zip">
          Zip Code
        </label>
        <input
          type="number"
          id="ip"
          className="border-l border-[#FFEB00] focus:bg-white outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#FFEB00] font-bold"
          value={state.address.zip}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_ADDRESS",
              payload: { zip: Number(e.target.value) },
            })
          }
          required
        />
      </div>
      {/* The form includes a back button to navigate to the previous step and a next button to submit the form. */}
      {/* The back button navigates to the personal information step, and the next button submits the form. */}
      <div className="flex *:basis-1/2 gap-4">
        <button
          className="p-2 border border-[#FFEB00] rounded-sm transition-colors hover:bg-[#FFEB00] hover:text-[#2A004E]"
          onClick={() => {
            navigate("/");
          }}
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

export default Address;
