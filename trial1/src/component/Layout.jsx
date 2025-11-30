import { Link, Outlet } from "react-router-dom"


export let Layout = ()=> {

    return (
        <>
            <header style={{ display: "flex", padding: "5px" , gap: "1%", textAlign: "center", border: "1px solid black" }}>

                <p>I am appointed here as a nav bar with Layout (outlet)</p>


                <p style={{ border: "2px solid black", padding: "1px", borderRadius: "20px", width: "60px", backgroundColor: "red", color: "white" }} > <Link to="/">State</Link> </p>


                <p style={{ border: "2px solid black", padding: "1px", borderRadius: "20px", width: "60px", backgroundColor: "blue", color: "white" }} > <Link to="/color">Color</Link> </p>


                <p style={{ border: "2px solid black", padding: "1px", borderRadius: "20px", width: "60px", backgroundColor: "brown", color: "white" }} > <Link to="/form">Form</Link> </p>
                
            </header>

            <Outlet />

            <footer style={{ fontSize: "30px", fontWeight: "bold", letterSpacing: "5px", border: "1px solid black" }}>
                this is footer for all
            </footer>

        </>
    )
}

