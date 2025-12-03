
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
const socket = io('http://localhost:8100');  // connect to backend 


const Chatsock = () => {

    const [message, setmessage] = useState("");
    const [chat, setchat] = useState([]);

    const sendmsg = () => {
        socket.emit("send_message", { message });
        setchat((prev) => [...prev, { message }]);
        setmessage("");
    }

    useEffect(() => {
        socket.on("received_message", (data) => {
            setchat((prev) => [...prev, data]);
        });
        return () => {
            socket.off("received_message");
        }
    }, []);


    return (
        <>
            <div>

                <h1> chat socket revision.. </h1>

                <input
                    type="text"
                    value={message}
                    onChange={(e) => { setmessage(e.target.value) }}
                    placeholder="enter some message"
                    style={{ padding: "4px 8px", fontSize: "30px" }}
                />
                <button onClick={sendmsg} > send msg</button>

                <hr />

                <div>
                    {
                        chat.map((key) => (
                            <>
                                <p> {key.message} </p>
                            </>
                        ))
                    }
                </div>


            </div>
        </>
    )
}

export default Chatsock;

//  to get chat in mobile run___   npm run dev -- --host
// get link  ➜  Network: http://10.151.66.220:5173/      open on mobile. 