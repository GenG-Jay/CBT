import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import React, { useState } from "react";

const Login = () => {
  const [ value, setValues ] = useState({
    id: "",
password: ""
  });

const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
}

 const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
  event?.preventDefault()
  const handleLogin = async() => {
    const LoginRequest = await axios.post("", value);
    if (!LoginRequest) {
throw new Error ("Login failed!")
  }
}

  toast.promise(handleLogin(), {
    pending: "Loading...",
  })
}

    return (
        <>
          <div className='min-h-screen '>
            <div className='' >
                <img src="" alt="" />
            </div>
            <div>
              <h2> Login </h2>
              <form action="html" onSubmit={handleSubmit}>
                <input type="text" name="id" id="id" placeholder="Matric Nunber" onChange={handleInput} />
                <input type="password" name="password" onChange={handleInput} id="password" placeholder="Password" />
                <input type="submit" value="Log in" />
              </form>
            </div>
            <ToastContainer theme="light" position="top-right" autoClose={5000} />
          </div>
        </>
    );
};

export default Login