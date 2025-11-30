import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [frm, setfrm] = useState({});
  const navigate = useNavigate();

  const hanldeInput = (e) => {
    const { name, value } = e.target;
    setfrm({ ...frm, [name]: value });
  }

  const handleLog = async (e) => {
    e.preventDefault();
    let api = `${import.meta.env.VITE_BACK}/login`;
    const response = await axios.post(api, frm, { withCredentials: true });
    alert(response.data.msg);
    navigate("/dashboard")
  }

  return (
    <>
      <section>

        <h1> Login Page </h1>

        <form action="">

          Enter Email : <input placeholder='email' type="text" name='email' onChange={hanldeInput} />

          Enter Password : <input placeholder='password' type="text" name='password' onChange={hanldeInput} />

          <button onClick={handleLog}>Login</button>
        </form>

      </section>
    </>
  )
}

export default Login;  
