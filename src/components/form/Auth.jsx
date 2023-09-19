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
      <h1 style={{ color: "#32415b" }} className="text-2l font-bold">
        Sign up/Login
      </h1>
      <div className="">
        <button onClick={signUpDisplay} className="hover:bg-gray-200 m-2">
          New Customer
        </button>
        <button onClick={loginDisplay} className="hover:bg-gray-200 m-2">
          Existing customer
        </button>
      </div>
      <div className="my-3">{display}</div>
    </div>
  );
};

export default Auth;
