import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Icalc } from "../../interfaces/interfaces";
import { AuthContext } from "../../providers/AuthContext";
import { schemaSend } from "../../schema/send";
import "./style.scss";
export default function Form() {
  const { send } = useContext(AuthContext);
  const [isFocused, setIsFocused] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<Icalc>({
    resolver: yupResolver(schemaSend),
  });
  return (
    <>
      <form onSubmit={handleSubmit(send)} className="form">
        <h1 className="header">Simule sua Antecipação</h1>
        <label className="label">
          Informe o valor da venda
          <input
            type="number"
            id="amount"
            min={1000}
            required
            {...register("amount")}
          />
        </label>
        <label className="label">
          Em quantas parcelas
          <input
            type="number"
            id="installments"
            required
            min={1}
            max={12}
            onFocus={() => setIsFocused(true)}
            onBlurCapture={() => setIsFocused(false)}
            {...register("installments")}
          />
          {isFocused && (
            <span id="max-installments" className="spanMax">
              Máximo de 12 parcelas.
            </span>
          )}
        </label>
        <label className="label">
          Informe o percentual MRD
          <input type="number" id="mdr" {...register("mdr")} min="1" required />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
