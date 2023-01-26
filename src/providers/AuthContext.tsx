import { createContext, ReactNode, useState } from "react";
import api from "../services/api";

interface IChildrenProps {
  children: ReactNode;
}

export interface Icalc {
  amount: number;
  installments: number;
  mdr: number;
}

export interface IcalcRecived {
  1: number;
  15: number;
  30: number;
  90: number;
}

interface IAuthContext {
  send: (data: Icalc) => Promise<void>;
  valueRec: IcalcRecived | undefined;
}

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: IChildrenProps) => {
  const [valueRec, setValueRec] = useState();

  const send = async (data: Icalc) => {
    await api
      .post("", data)
      .then((res) => {
        setValueRec(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <AuthContext.Provider value={{ send, valueRec }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
