import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import FaEye and FaEyeSlash icons

const inputClasses =
  "shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline";
const labelClasses = "block text-zinc-700 text-sm font-bold mb-2";
const buttonClasses =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isAuthenticated } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Define showPassword state variable
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/userdata');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting login form:", { email, password });
    try {
      const result = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      console.log("Login response:", result.data);
      const token = result.data.token;
      if (token) {
        sessionStorage.setItem("token", token); 
        console.log("Logged in successfully");
        navigate("/userdata"); 
      } else {
        console.log("Login failed");
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("please write correct information");
      setError("Invalid email or password");
    }
  };

  return (
    <div className="bg-white w-full lg:w-1/2 p-8 lg:min-h-screen flex flex-col justify-center">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Login Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className={labelClasses}>
              Email ID
            </label>
            <input
              type="email"
              id="email"
              className={inputClasses}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className={labelClasses}>
              Password
            </label>
            <div className="bg-slate-100 p-2 flex  bg-white shadow-lg  rounded-md outline outline-gray-300 outline-1"> 
              <input
                type={showPassword ? "text" : "password"} // Toggle input type
                id="password"
                className="w-full h-full outline-none bg-white "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div
                className="cursor-pointer text-xl"
                onClick={() => setShowPassword((prev) => !prev)} // Toggle showPassword state
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-500"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-zinc-900"
              >
                Keep me signed in
              </label>
            </div>
            <Link
              to="/signup"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Not a member?
            </Link>
          </div>
          <button type="submit" className={buttonClasses}>
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

const CompanyInfo = () => {
  return (
    <div className="bg-blue-500 text-white w-full lg:w-1/2 p-8 lg:min-h-screen flex flex-col justify-center">
      <div className="max-w-md mx-auto">
        <h2 className="text-lg font-semibold">GOJO SHOPS</h2>
        <h1 className="font-bold text-4xl mt-4">WELCOME BACK</h1>
        <p className="mt-4">
          Nice to see you again. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>
    </div>
  );
};

const LoginPage = () => {
  return (
    <div className="bg-zinc-100 flex items-center justify-center h-screen">
      <div className="flex flex-wrap lg:flex-nowrap w-full max-w-6xl">
        <CompanyInfo />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
