import React, { StrictMode, useCallback } from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .required("O preenchimento do email é obrigatório.")
        .email("Insira um formato válido de email."),
      password: yup
        .string()
        .required("O preenchimento da senha é obrigatório.")
        .min(8, "Insina no mínimo 8 caracteres."),
    }),
  });

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const { email, password } = formik.values;
      console.info(email, password);
    },
    [formik]
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          {...formik.getFieldProps("email")}
          autoComplete="off"
        />
        <span>{formik.errors.email}</span>
      </div>

      <div>
        <input
          type="password"
          {...formik.getFieldProps("password")}
          maxLength="50"
        />
        <span>{formik.errors.password}</span>
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
