import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"


// import Login from "./Login";

const inputClasses =
  "bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";
const buttonClasses =
  "w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center";
 
  
const RegisterForm = () => {

    const[name, SetName] = useState();
    const[email, SetEmail] = useState();
    const[password, SetPassword] = useState();
    const[confirmpassword, SetConfirmpassword] = useState();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmpassword) {
          setError("Passwords do not match!");
          alert("Passwords do not match!");
          return;
        }
        setError(""); // Clear error if passwords match

        axios.post(
          'http://localhost:3000/SignUp', 
          {
            name,
            email,
            password,
            confirmpassword
          })
          .then(result => {
            console.log(result);
            navigate('/log');
          })
          .catch(err => console.log(err));
      }
      
  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-100">
      <div className="w-full max-w-md p-8 space-y-3 rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold text-center text-zinc-700">
          Register
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="text-sm font-medium text-zinc-900 block mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={inputClasses}
              placeholder="Name"
              onChange={(e) => SetName(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-900 block mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={inputClasses}
              placeholder="Email"
              onChange={(e) => SetEmail(e.target.value)}

              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-zinc-900 block mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className={inputClasses}
              placeholder="Password"
              onChange={(e) => SetPassword(e.target.value)}

              required
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="text-sm font-medium text-zinc-900 block mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              className={inputClasses}
              placeholder="Confirm Password"
              onChange={(e) => SetConfirmpassword(e.target.value)}

              required
            />
          </div>
          <button type="submit" className={buttonClasses}>
            Sign Up
          </button>
        </form>
        <div className="text-sm font-medium text-center text-zinc-500">
          Have an Account?{" "}
          <Link to="/log" className="text-blue-700 hover:underline">
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

// import React from 'react';

// const inputClasses = "mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-700 dark:text-white";
// const buttonClasses = "hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";
// const textClasses = "text-zinc-600 dark:text-zinc-400";

// const StudentSignup = () => {
//     return (
//         <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4">
//             <div className="md:w-1/2 p-5">
//                 <img src="https://placehold.co/500x500" alt="Student Illustration" className="max-w-full h-auto" crossorigin="anonymous" />
//             </div>
//             <div className="md:w-1/2 bg-white dark:bg-zinc-800 p-8 shadow-lg rounded-lg">
//                 <h2 className="text-2xl font-bold text-zinc-800 dark:text-white mb-6">Student Signup</h2>
//                 <p className={textClasses + " mb-6"}>Hey, enter your details to create your account:</p>
//                 <form action="#" method="POST" className="mb-6">
//                     <div className="mb-4">
//                         <label htmlFor="name" className="block text-zinc-700 dark:text-zinc-200">Enter your Name</label>
//                         <input type="text" id="name" name="name" className={inputClasses} required />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-zinc-700 dark:text-zinc-200">Enter your Email</label>
//                         <input type="email" id="email" name="email" className={inputClasses} required />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="phone" className="block text-zinc-700 dark:text-zinc-200">Enter your Phone</label>
//                         <input type="tel" id="phone" name="phone" className={inputClasses} required />
//                     </div>
//                     <div className="mb-6">
//                         <label htmlFor="password" className="block text-zinc-700 dark:text-zinc-200">Create Password</label>
//                         <input type="password" id="password" name="password" className={inputClasses} required />
//                     </div>
//                     <button type="submit" className={"w-full bg-blue-500 " + buttonClasses}>Sign up</button>
//                     <div className="mt-4 flex justify-center items-center">
//                         <p className={textClasses}>Or signup with</p>
//                     </div>
//                     <div className="flex justify-center items-center mt-2">
//                         <button className="mx-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Google</button>
//                         <button className="mx-2 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Facebook</button>
//                     </div>
//                     <div className="mt-4 text-center">
//                         <p className={textClasses}>Already have an account? <a href="#" className="text-blue-500 hover:text-blue-700">Sign in</a></p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default StudentSignup;
