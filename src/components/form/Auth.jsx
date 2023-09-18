import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
  const [display, setDisplay] = useState(<Signup />);

  const loginDisplay = () => {
    setDisplay(<Login />);
  };
  const signUpDisplay = () => {
    setDisplay(<Signup />);
  };
  return (
    <div className="container mx-auto">
      <h1 style={{ color: "#32415b", fontSize: 24, fontWeight: "bold" }}>
        Sign up/Login
      </h1>
      <div className="w-1/2 flex justify-between h-5">
        <button onClick={signUpDisplay} className="hover:bg-gray-200">
          New Customer
        </button>
        <button onClick={loginDisplay} className="hover:bg-gray-200">
          Existing customer
        </button>
      </div>
      <div className="my-3">{display}</div>
    </div>
  );
};

export default Auth;
