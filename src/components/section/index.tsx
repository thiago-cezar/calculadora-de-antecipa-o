import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext, Icalc } from "../../providers/AuthContext";
import { schemaSend } from "../../schema/send";
import "./style.scss";

export default function Form() {
  const { send } = useContext(AuthContext);
  const [isFocused, setIsFocused] = useState(false);
  const { register, handleSubmit } = useForm<Icalc>({
    resolver: yupResolver(schemaSend),
  });
  return (
    <>
      <form onSubmit={handleSubmit(send)} className="form">
        <h1 className="header">Simule sua Antecipação</h1>
        <label className="input">
          Informe o valor da venda *
          <input
            type="number"
            id="amount"
            {...register("amount")}
          />
        </label>
        <label className="input">
          Em quantas parcelas *
          <input
            type="number"
            id="installments"
            onFocus={() => setIsFocused(true)}
            onBlurCapture={() => setIsFocused(false)}
            {...register("installments")}
          />
          {isFocused && (
            <span id="max-installments">Máximo de 12 parcelas</span>
          )}
        </label>
        <label className="input">
          Informe o percentual MRD *
          <input type="number" id="mdr" {...register("mdr")} />
        </label>
        <button type="submit" />
      </form>
    </>
  );
}
