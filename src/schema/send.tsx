import * as yup from "yup";
export const schemaSend = yup.object({
  amount: yup.number().required("campo obrigatório"),
  installments: yup.number().required("campo obrigatório"),
  mdr: yup.number().required("campo obrigatório"),
});
