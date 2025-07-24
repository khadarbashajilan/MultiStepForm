import type { FormAction, FormData } from "../types/type";

// The initial state of the form data, including personal information, address, and preferences.
export const initialFormState:FormData={
    personalInfo:{
        firstname:"",
        lastname:"",
        email:"",
    },
    address:{
        street: "",
        city: "",
        zip: 0,
    },
    prefinfo:{
    news: false,
    notification: false,
    theme: "light",
    },
};

// The formReducer function handles actions to update the form state.
// It takes the current state and an action, and returns the new state based on the action type.
// The action can be to update personal information, address, preferences, or reset the form.
export function formReducer(state:FormData, action:FormAction){
    // The switch statement checks the action type and updates the state accordingly.
    // Each case corresponds to a specific action type, such as updating personal information, address,
    // preferences, or resetting the form.
    switch(action.type){
        case "UPDATE_PERSONAL_INFO":
            return {
                ...state,
                personalInfo:{
                    ...state.personalInfo,
                    ...action.payload,
                },
            };
        case "UPDATE_ADDRESS":
            return {
                ...state,
                address:{
                    ...state.address,
                    ...action.payload,
                },
            };
        case "UPDATE_PREFERENCE_INFO":
            return{
                ...state,
                    prefinfo:{
                        ...state.prefinfo,
                        ...action.payload,
                },
            };
//  The RESET_FORM action resets the form state to its initial values. 
        case "RESET_FORM":
            return initialFormState;
// If the action type does not match any case, it returns the current state unchanged.
        default:
            return state;
    }
}