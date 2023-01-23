import { useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";
import "./style.scss";

export default function Aside() {
  const { valueRec } = useContext(AuthContext);
  return (
    <aside className="aside">
      <div>
        <h2>Você receberá:</h2>
      </div>
      <h3>
        Amanhã:
        <strong>R$ {valueRec?.[1].toFixed(2) || "0.00"}</strong>
      </h3>
      <h3>
        Em 15 dias:
        <strong>R$ {valueRec?.[15].toFixed(2) || "0.00"}</strong>
      </h3>
      <h3>
        Em 30 dias:
        <strong>R$ {valueRec?.[30].toFixed(2) || "0.00"}</strong>
      </h3>
      <h3>
        Em 90 dias:
        <strong>R$ {valueRec?.[90].toFixed(2) || "0.00"}</strong>
      </h3>
    </aside>
  );
}
