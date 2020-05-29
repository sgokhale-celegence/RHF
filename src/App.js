import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <LoginForm />
    </div>
  );
}

export function LoginForm() {
  const { register, handleSubmit, errors, watch } = useForm();
  console.log(watch("login")); // watch input value by passing the name of it

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="login" ref={register} />
      <input
        name="password"
        type="password"
        ref={register({
          required: "Please provide a Password",
          minLength: { value: 10, message: "too short" }
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}

      <input type="submit" />
    </form>
  );
}
