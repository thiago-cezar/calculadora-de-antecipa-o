import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext, Icalc } from "../../providers/AuthContext";
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
          Informe o valor da venda {errors.amount?.message}
          <input type="number" id="amount" min={1000} {...register("amount")} />
        </label>
        <label className="label">
          Em quantas parcelas {errors.installments?.message}
          <input
            type="number"
            id="installments"
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
          Informe o percentual MRD {errors.mdr?.message}
          <input type="number" id="mdr" min={1} {...register("mdr")} />
        </label>
        <button type="submit" />
      </form>
    </>
  );
}
