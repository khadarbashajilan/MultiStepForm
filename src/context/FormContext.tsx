/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import type { FormAction, FormData } from "../types/type";
import { formReducer, initialFormState } from "../reducers/formReducer";


interface FormContexType{
    state:FormData;
    dispatch:React.Dispatch<FormAction>;
}

// The FormContext is created to provide the form state and dispatch function to the components in the application.
// It uses React's createContext to create a context for the form state and actions.
const FormContext = createContext<FormContexType | undefined>(undefined);

// The FormProvider component wraps the application and provides the form state and dispatch function to its children.
export function FormProvider({children}:{children:React.ReactNode}){
    const [state, dispatch] = useReducer(formReducer, initialFormState);

    return (
        <FormContext.Provider value={{state, dispatch}}>{children}</FormContext.Provider>
    );
}

// The useFormContext hook is used to access the form context in components.
export function useFormContext(){
    const context = useContext(FormContext);

    // If the context is undefined, it throws an error to ensure that the hook is used within a FormProvider.
    // This helps to prevent errors when the hook is used outside of the context provider.
    // It ensures that the components using this hook are wrapped in the FormProvider.
    // This is a common pattern in React to ensure that context is used correctly.
    if(context === undefined){
        throw new Error("useFormContext must be within a FormProvider");
    }
    return context;
}