/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import type { FormAction } from "../types/type";

interface FormContexType{
    state:FormData;
    dispatch:React.Dispatch<FormAction>;
}

const FormContext = createContext<FormContexType | undefined>(undefined);

export function FormProvider({children}:{children:React.ReactNode}){
    const [state, dispatch] = useReducer(formReducer, initailFormState);

    return (
        <FormContext.Provider value={{state, dispatch}}>{children}</FormContext.Provider>
    );
}

export function useFormContext(){
    const context = useContext(FormContext);

    if(context === undefined){
        throw new Error("useFormContext must be within a FormProvider");
    }
    return context;
}