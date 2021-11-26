import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { user, signInUserByGoogle, logInUserByEmail } =
    useAuth();
  const history = useHistory();

  if (user.email) {
    history.push("/home");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const saveEmail = (e) => {
    setEmail(e.target.value);
  };
  const savePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSignin = (e) => {
    e.preventDefault();
    logInUserByEmail(email, password);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="hidden lg:block h-8 w-auto text-gray-700 font-thin text-xl">
            DGH - Dohar General Hospital
          </div>
          <h2 className="mt-6 text-center text-5xl font-extrabold text-textPrimary">
            Log In
          </h2>
        </div>
        <form onSubmit={handleSignin} className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                onChange={saveEmail}
                type="email"
                required
                className="appearance-none rounded-none bg-gray-800 relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-borderPrimary focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                onChange={savePassword}
                type="password"
                required
                className="appearance-none bg-gray-800 rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-borderPrimary  focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <span className="font-medium text-white">
                Not An User?{" "}
                <NavLink
                  to="/signup"
                  href="#"
                  className="font-medium text-textPrimary hover:text-pink-500"
                >
                  SignUp
                </NavLink>
              </span>
            </div>
          </div>
        
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-bgPrimary hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Log In
            </button>
          </div>
        </form>
        <div className="flex justify-around items-center pt-2 pb-7">
          
          <button onClick={signInUserByGoogle}>
            <FaGoogle className="text-4xl text-textPrimary hover:text-pink-800" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
