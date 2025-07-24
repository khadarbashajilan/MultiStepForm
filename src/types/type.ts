
// This file defines the types used in the form context and reducer.

// It includes the structure of the form data and the actions that can be dispatched to update the form state.
// The FormData interface defines the structure of the form data, including personal information, address, and preferences.
export interface FormData {
  personalInfo: {
    firstname: string;
    lastname: string;
    email: string;
  };
  address: {
    street: string;
    city: string;
    zip: number;
  };
  prefinfo: {
    news: boolean;
    notification: boolean;
    theme: "light" | "dark";
  };
}

// The FormAction type defines the possible actions that can be dispatched to update the form state.
// Each action has a type and a payload that contains the data to update the form state.
export type FormAction =
  | { type: "UPDATE_PERSONAL_INFO"; payload: Partial<FormData["personalInfo"]> }
  | { type: "UPDATE_ADDRESS"; payload: Partial<FormData["address"]> }
  | {type: "UPDATE_PREFERENCE_INFO";payload: Partial<FormData["prefinfo"]>}
  | { type: "RESET_FORM" };
