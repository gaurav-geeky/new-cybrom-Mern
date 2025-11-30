import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const [mydata, setmydata] = useState("");
  const navigate = useNavigate();

  const dashboard = async () => {
    let api = `${import.meta.env.VITE_BACK}/dashboard`;
    
    const response = await axios.get(api, {
      withCredentials: true  // VERY IMPORTANT
    });

    console.log("MSG:", response.data.msg);
    if (response.data.msg === "Not logged in") {
      navigate("/login");
    }
    setmydata(response.data.user);
  }


  useEffect(() => {
    dashboard();
  }, [])

  const logout = async () => {
    let api = `${import.meta.env.VITE_BACK}/logout`;
    const response = await axios.get(api, { withCredentials: true });

    alert(response.data.msg);
  }

  return (
    <>
      <section>

        <h1>Dashboard page </h1>
        <h2> welcome {mydata.name} your email : {mydata.email} </h2>
        <button onClick={logout}>Logout</button>

      </section>
    </>
  )
}

export default Dashboard; 
