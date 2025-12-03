// Socket app making. 

import './App.css'
import { useState, useEffect } from 'react'
import { io } from "socket.io-client";
const socket = io('http://localhost:9000') // Your backend server URL

import Front from './Pages/Front';  // chat app practice. 
import Chatsock from './Pages/Chatsock';
import { Link, Route, Routes } from 'react-router-dom';




function App() {

  const [message, setmessage] = useState("");
  const [chat, setchat] = useState([]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setchat((prev) => [...prev, data]);
    });
    return () => {
      socket.off('receive_message');
    }
  }, []);

  const sendMessage = () => {
    socket.emit('send_message', { message }); // event fire khud ka 
    setchat((prev) => [...prev, { message }]);
    setmessage("");
  }
  // .on se listen kia. 

  return (
    <>

      <Link to="/front"> front </Link> &emsp; &emsp;
      <Link to="/chatsock"> chatsock </Link>

      <h1> My Chat app.</h1>

      <input
        type="text"
        placeholder='type message'
        style={{ fontSize: "25px", padding: "4px" }}
        value={message}
        onChange={(e) => { setmessage(e.target.value) }} />

      <button onClick={sendMessage}> send</button>

      <hr />

      <div>
        {
          chat.map((msg, index) => (
            <p key={index}> {msg.message} </p>
          ))
        }
      </div>





      <Routes>

        <Route path='/front' element={<Front />} />
        <Route path='/chatsock' element={<Chatsock />} />

      </Routes>


    </>
  )
}

export default App;


// emit   generate; 
// on    listen ;