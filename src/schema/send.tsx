import * as yup from "yup";
export const schemaSend = yup.object({
  amount: yup.string().required("*"),
  installments: yup.string().required("*"),
  mdr: yup.string().required("*"),
});
