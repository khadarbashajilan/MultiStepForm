import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom';

interface FormData{
  address: {
    street: string;
    land: string;
    zip: number;
  }
}

const initial : FormData["address"] ={
  street: "",
  land: "",
  zip: 0,
}

interface FormAction {
  type: "UPDATE_ADDRESS",
  payload: Partial<FormData["address"]>
}

const Address = () => {

  const [state, addressDispatch] = useReducer(addressReducer, initial);

  function addressReducer(state = initial, action: FormAction) {
    return { ...state, ...action.payload };
  }

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(state); // -> {street: ---, land: ---, zip: 12345}
    navigate("/preferences");
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Adress</h1>
      <div>
        <label htmlFor="street">Street</label>
        <input type="text" id='street'
        onChange={(e)=>
          addressDispatch({
            type: "UPDATE_ADDRESS",
            payload:{street: e.target.value},
          })
        }
        />
      </div>
      <div>
        <label htmlFor="land">LandMark</label>
        <input type="text" id='land'
        onChange={(e)=>
          addressDispatch({
            type:"UPDATE_ADDRESS",
            payload:{land: e.target.value},
          })
        }
        />
      </div>
      <div>
        <label htmlFor="zip">Zip Code</label>
        <input type="number" id='ip'
        onChange={(e)=>
          addressDispatch({
            type:"UPDATE_ADDRESS",
            payload:{zip: Number(e.target.value)},
          })
        }
        />
      </div>
      <div>
        <button onClick={()=>{navigate("/"); console.log(state)}} type='button'>Back</button>
        <button type='submit'>Next</button>
      </div>
    </form>
  )
}

export default Address
