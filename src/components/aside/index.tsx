import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthContext";
import "./style.scss";

export default function Aside() {
  const { valueRec, sendV } = useContext(AuthContext);
  return (
    <aside className="aside">
      <div>
        <h2>Você receberá:</h2>
      </div>
      <h3>
        Amanhã:
        <strong>R$ {valueRec?.value?.toFixed(2) || "0.00"}</strong>
      </h3>
      <h3>
        Em
        <input
          type="number"
          defaultValue={15}
          min="1"
          className="SelectDays"
          onChange={(value) => {
            sendV.value2 = Number(value.target.value);
          }}
        />
        dias:
        <strong>R$ {valueRec?.value2?.toFixed(2) || "0.00"}</strong>
      </h3>
      <h3>
        Em
        <input
          type="number"
          defaultValue={30}
          min="1"
          className="SelectDays"
          onChange={(value) => {
            sendV.value3 = Number(value.target.value);
          }}
        />
        dias:
        <strong>R$ {valueRec?.value3?.toFixed(2) || "0.00"}</strong>
      </h3>
      <h3>
        Em
        <input
          type="number"
          defaultValue={90}
          min="1"
          className="SelectDays"
          onChange={(value) => {
            sendV.value4 = Number(value.target.value);
            console.log(sendV);
          }}
        />
        dias:
        <strong>R$ {valueRec?.value4?.toFixed(2) || "0.00"}</strong>
      </h3>
      <span className="notice">Altere os dias conforme desejado.</span>
    </aside>
  );
}
