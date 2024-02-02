import React from "react";
import { useState } from "react";
import "../form/Form.css";
import FormValidatio from "./FormValidatio";
import Input from "./Input";
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetpass, setResetpass] = useState("");
  const [submit, setSubmit] = useState(false);
  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleResetpass(e) {
    setResetpass(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      password !== resetpass ||
      !email.includes("@") ||
      !email.includes(".")
    ) {
      setSubmit(false);
      alert("Password does not match or email is not valid");
    } else {
      setSubmit(true);
      console.log("Name: ", name);
      console.log("Email: ", email);
      console.log("Password: ", password);
      console.log("Reset Password: ", resetpass);
    }
    setName("");
    setEmail("");
    setPassword("");
    setResetpass("");
  }

  return (
    <div className="form-container">
      <form>
       
       <Input/>
       
               <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <div></div>
    </div>
  );
}

export default Form;
