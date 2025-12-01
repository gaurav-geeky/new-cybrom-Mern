import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="h-screen flex flex-col ">

                <div className="p-4 flex gap-4">
                    <Link to="/">Login</Link>
                    <Link to="/registration">Registration</Link>
                </div>
               
                <div className=" border flex-1 overflow-auto bg-black text-white">
                    <Outlet />
                </div>


                <div className="text-white border bg-black">
                    www.jsonWebToken.com 2025
                </div>

            </div>
        </>
    );
};

export default Layout;
