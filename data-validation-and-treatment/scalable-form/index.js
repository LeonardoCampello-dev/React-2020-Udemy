import React, { StrictMode, useCallback } from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
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
      <input type="email" {...formik.getFieldProps("email")} />
      <input type="password" {...formik.getFieldProps("password")} />
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
