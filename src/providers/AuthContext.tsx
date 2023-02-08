import { createContext, useState } from "react";
import toast from "react-hot-toast";
import {
  IAuthContext,
  Icalc,
  IcalcRecived,
  IChildrenProps,
} from "../interfaces/interfaces";
import api from "../services/api";

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: IChildrenProps) => {
  const [valueRec, setValueRec] = useState({} as IcalcRecived);
  const [sendV, setSendV] = useState({
    value: 1,
    value2: 15,
    value3: 30,
    value4: 90,
  } as IcalcRecived);

  const send = async (data: Icalc) => {
    data.days = [sendV.value, sendV.value2, sendV.value3, sendV.value4];
    console.log(data);
    await api
      .post("", data)
      .then((res) => {
        const resData: IcalcRecived = {
          value: res.data[`${sendV.value}`],
          value2: res.data[`${sendV.value2}`],
          value3: res.data[`${sendV.value3}`],
          value4: res.data[`${sendV.value4}`],
        };
        setValueRec(resData);
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <AuthContext.Provider value={{ send, valueRec, setSendV, sendV }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
