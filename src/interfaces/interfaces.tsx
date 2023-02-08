import { ReactNode } from "react";

export interface IChildrenProps {
  children: ReactNode;
}

export interface Icalc {
  amount: number;
  installments: number;
  mdr: number;
  days: number[];
}

export interface IcalcRecived {
  value: number;
  value2: number;
  value3: number;
  value4: number;
}

export interface IAuthContext {
  send: (data: Icalc) => Promise<void>;
  valueRec: IcalcRecived;
  setSendV: React.Dispatch<React.SetStateAction<IcalcRecived>>;
  sendV: IcalcRecived;
}
