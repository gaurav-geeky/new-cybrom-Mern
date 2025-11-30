
import { Routes, Route, Link } from "react-router-dom";

import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

let App = () => {
  return (
    <>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </>
  );
}

export default App;


