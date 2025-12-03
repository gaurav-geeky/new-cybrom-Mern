
import { useState, useEffect } from 'react';
import { io } from "socket.io-client";
const socket = io("http://localhost:8008");

const Front = () => {

    const [message, setmessage] = useState("");
    const [chat, setchat] = useState([]);

    // emit in back
    useEffect(() => {
        socket.on('receiveMessage', (data) => {
            setchat((prev) => [...prev, data]);

        });
        return () => {
            socket.off('receiveMessage');
        }
    }, [])

    // on at back
    const sendmsg = () => {
        socket.emit("sendMessage", { message });
        //  send message msg ghatna ghat aur message gaya waha. 
        setchat((prev) => [...prev, { message }]);
        setmessage("");
        console.log(chat); 
    }


    return (
        <>
            <section>

                <h1> Chat app practice .. </h1>

                <input type="text"
                    placeholder='practice socket chat'
                    style={{ fontSize: "25px", padding: "4px 8px" }}
                    value={message}
                    onChange={(e) => { setmessage(e.target.value) }} />
                <button onClick={sendmsg}> send </button>

                <hr />

                <div>
                    {chat.map((each, ind) => (
                        <>
                            <p key={ind}> {each.message} </p>
                        </>
                    )
                    )}
                </div>

            </section>
        </>
    )
}

export default Front;  
