import { CheckCircle, CheckCircle2 } from "lucide-react";
import { useFormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const { state, dispatch } = useFormContext();
  // The component uses the `useFormContext` to access the form state and dispatch actions.
  // It uses the `useFormContext` to access the form state and dispatch actions.
  
  // It also uses the `useNavigate` hook to navigate to the next step in the form.
  const navigate = useNavigate();
  
  // The `handleSubmit` function prevents the default form submission, logs the form state, and resets the form.
  function handleSubmit() {
    console.log("Form submitted:", state);
    
    dispatch({ type: "RESET_FORM" });
    
    alert("Form Submitted Successfully!");
    
    navigate("/");
    dispatch({
      type: "RESET_FORM",
    });
  }
  return (
    // This component displays a summary of the user's information collected in the multi-step form.
    // It shows the personal information, address, and preferences, and allows the user to submit the form.
    <section className="flex flex-col gap-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Personal Information</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          <p>{state.personalInfo.firstname}</p>
          <p>{state.personalInfo.lastname}</p>
          <p>{state.personalInfo.email}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Address</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          <p>{state.address.street}</p>
          <p>{state.address.city}</p>
          <p>{state.address.zip}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Preferences</h2>
        {state.prefinfo.news || state.prefinfo.notification ? (
          <>
            {state.prefinfo.news && (
              <p className="flex items-center gap-x-2">
                <CheckCircle2 className="size-5 text-[#FFEB00]" />
                Newsletter Subs.
              </p>
            )}

            {state.prefinfo.notification && (
              <p className="flex items-center gap-x-2">
                <CheckCircle className="size-5 text-[#FFEB00]" />
                Notifications Enabled
              </p>
            )}
          </>
        ) : (
          "No Preferences"
        )}
      </div>

      <div>
        <h2 className="text-2xl font-bold">
          Theme Preference{" "}
          <span className="block capitalize text-base font-normal mt-4">
            {state.prefinfo.theme}
          </span>
        </h2>
      </div>

      {/* The component displays a summary of the user's information collected in the multi-step form. */}
      {/* It shows the personal information, address, and preferences, and allows the user to submit the form. */}
      
      <div className="flex *:basis-1/2 gap-4">
        <button
          className="p-2 border border-[#FFEB00] rounded-sm transition-colors hover:bg-[#FFEB00] hover:text-[#2A004E]"
          type="button"
          onClick={() => navigate("/preferences")}
        >
          Back
        </button>
        <button
          className="p-2 border border-[#FFEB00] rounded-sm transition-colors hover:bg-[#FFEB00] hover:text-[#2A004E]"
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default Summary;
