import React, { StrictMode, useCallback } from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import MaskedInput from "react-text-mask";
import * as yup from "yup";

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      phone: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .required("O preenchimento do email é obrigatório.")
        .email("Insira um formato válido de email."),
      password: yup
        .string()
        .required("O preenchimento da senha é obrigatório.")
        .matches(/[(a-zA-z)]/g, "A senha deve conter ao menos uma letra.")
        .matches(/[(0-9)]/g, "A senha deve conter ao menos um número.")
        .min(8, "Insina no mínimo 8 caracteres."),
      phone: yup
        .string()
        .required("O preenchimento do telefone é obrigatório.")
        .min(15, "Informe um número com 11 caracteres."),
    }),
  });

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const { email, password, phone } = formik.values;

      const formattedData = {
        email: email.toLowerCase(),
        password,
        phone: phone.replace(/[^a-zA-Z0-9]+/g, ""),
      };

      console.info(formattedData);
    },
    [formik.values]
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          {...formik.getFieldProps("email")}
          autoComplete="off"
        />
        {formik.touched.email && formik.errors.email ? (
          <span>{formik.errors.email}</span>
        ) : null}
      </div>

      <div>
        <input
          type="password"
          {...formik.getFieldProps("password")}
          maxLength="50"
        />
        {formik.touched.password && formik.errors.password ? (
          <span>{formik.errors.password}</span>
        ) : null}
      </div>

      <div>
        <MaskedInput
          {...formik.getFieldProps("phone")}
          autoComplete="off"
          maxLength="15"
          mask={[
            "(",
            /[0-9]/,
            /[0-9]/,
            ")",
            " ",
            /[0-9]/,
            /[0-9]/,
            /[0-9]/,
            /[0-9]/,
            /[0-9]/,
            "-",
            /[0-9]/,
            /[0-9]/,
            /[0-9]/,
            /[0-9]/,
          ]}
          guide={false}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <span>{formik.errors.phone}</span>
        ) : null}
      </div>

      <br />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
