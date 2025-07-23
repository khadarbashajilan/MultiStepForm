import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
  address: {
    street: string;
    city: string;
    zip: number;
  };
}

const initial: FormData["address"] = {
  street: "",
  city: "",
  zip: 0,
};

interface FormAction {
  type: "UPDATE_ADDRESS";
  payload: Partial<FormData["address"]>;
}

const Address = () => {
  const [state, addressDispatch] = useReducer(addressReducer, initial);

  function addressReducer(state = initial, action: FormAction) {
    return { ...state, ...action.payload };
  }

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(state); // -> {street: ---, city: ---, zip: 12345}
    navigate("/preferences");
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">Adress</h1>
      <div className="flex flex-col gap-y-2">
        <label className="font-bold" htmlFor="street" >
          Street
        </label>
        <input
          className="border-l border-[#FFEB00] focus:bg-white outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#FFEB00] font-bold"
          type="text"
          id="street"
          value={state.street}
          onChange={(e) =>
            addressDispatch({
              type: "UPDATE_ADDRESS",
              payload: { street: e.target.value },
            })
          }
          required
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
          value={state.city}
          onChange={(e) =>
            addressDispatch({
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
          value={state.zip}
          onChange={(e) =>
            addressDispatch({
              type: "UPDATE_ADDRESS",
              payload: { zip: Number(e.target.value) },
            })
          }
          required
        />
      </div>
      <div className="flex *:basis-1/2 gap-4">
        <button
          className="p-2 border border-[#FFEB00] rounded-sm transition-colors hover:bg-[#FFEB00] hover:text-[#2A004E]"
          onClick={() => {
            navigate("/");
            console.log(state);
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
