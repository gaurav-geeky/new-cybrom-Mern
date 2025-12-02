
// Socket app making. 

import './App.css'
import { useState, useEffect } from 'react'
import { io } from "socket.io-client";
const socket = io('http://localhost:9000') // Your backend server URL

function App() {
  const [message, setmessage] = useState('');
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
      <h1> My Chat app.</h1>

      <input type="text"
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

    </>
  )
}

export default App; 
