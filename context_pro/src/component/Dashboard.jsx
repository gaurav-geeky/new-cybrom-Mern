import { useContext } from "react"
import { store } from "../App"
import Setting from "./Setting"


function Dashboard() {

    // let data = useContext(store) 
    let {user, game} = useContext(store) 
    
    // let gamedata = useContext(storegame)
    return (
        <>
            <h1> this is dashboard </h1>
            <br />

            <h1> data from app to dashboard name: __ usecontext__ {user.name} & {user.pass}   </h1>


            <h1> data from app to dashboard pass : __ usecontext__  </h1>

            <h1> this is game in use context ___ {game} </h1>

            <br /> <br />
            


            <store.Consumer>
                {
                    (das) => <h1> data in dashboard form app js __consume__ {das.name} </h1>
                }
            </store.Consumer>

            <Setting />

        </>
    )
}
export default Dashboard

