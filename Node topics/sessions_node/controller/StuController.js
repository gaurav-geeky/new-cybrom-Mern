

class StudentController {

    static get_session_info = (req, res) => {

        console.log("req session : ", req.session , "\n ID :  ", req.sessionID);
        console.log("ses ID : ", req.session.id);
        console.log("ses cookie : ", req.session.cookie);
        console.log("ses cooki maxAge : ", req.session.cookie.maxAge);
        console.log("ses cookie orinal maxAge : ", req.session.cookie.originalMaxAge);

        res.send("Session info ......");
    }

    static delete_session = (req, res) => {
        req.session.destroy( ()=> {
            console.log(`Session Deleted ... can't access session  !`); 
        })
        res.send("session deleted...") 
    }

}

export default StudentController;  
