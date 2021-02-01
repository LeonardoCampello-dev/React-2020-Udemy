import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import MaskedInput from "react-text-mask";
import * as yup from "yup";

function App() {
  const { handleSubmit, isValid, errors, touched, getFieldProps } = useFormik({
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
    onSubmit: ({ email, password, phone }) => {
      const formattedData = {
        email: email.toLowerCase(),
        password,
        phone: phone.replace(/[^a-zA-Z0-9]+/g, ""),
      };

      console.info(formattedData);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="email" {...getFieldProps("email")} autoComplete="off" />
        {touched.email && errors.email ? <span>{errors.email}</span> : null}
      </div>

      <div>
        <input type="password" {...getFieldProps("password")} maxLength="50" />
        {touched.password && errors.password ? (
          <span>{errors.password}</span>
        ) : null}
      </div>

      <div>
        <MaskedInput
          {...getFieldProps("phone")}
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
        {touched.phone && errors.phone ? <span>{errors.phone}</span> : null}
      </div>

      <br />
      <button type="submit" disabled={!isValid}>
        Cadastrar
      </button>
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
