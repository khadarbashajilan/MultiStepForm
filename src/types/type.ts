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

export type FormAction =
    { type: "UPDATE_PERSONAL_INFO"; payload: Partial<FormData["personalInfo"]> }
  | { type: "UPDATE_ADDRESS"; payload: Partial<FormData["address"]> }
  | {type: "UPDATE_PREFERENCE_INFO";payload: Partial<FormData["prefinfo"]>}
  | { type: "REDET_FORM" };
