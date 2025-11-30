
import { Link } from "react-router-dom"

function About() {

    return (
        <>

            <div className=" w-full min-h-[80vh] bg-[url(bgimg.jpg)] bg-cover bg-no-repeat p-5 ">

                <p className=" text-3xl font-bold">
                    The stock market involves buying and selling shares of publicly traded companies. Stocks offer the potential for higher returns than bonds since investors can get both dividends when the company is profitable and returns when the stock price goes up. They also have a higher risk, as stock prices can be more volatile.
                </p>
                <br />
                <ul className=" list-disc ">
                    <li> A stockbroker is a financial professional who executes orders in the market on behalf of clients. A stockbroker may also be known as a registered representative (RR) or an investment advisor. </li>

                    <li> Most buy and sell orders are now made through online discount brokers. This automated process reduces fees. </li>

                    <li> Wealthy individuals and institutions continue to use full-service brokers who offer advice, portfolio management services, and complete transactions. </li>
                </ul>

                <p>lorem*100</p>

                <br /> <br /> <br />
                <div className=" text-white ">
                    <Link className=" font-bold " to="/"> Home</Link> &emsp; 
                    <Link className=" font-bold " to="/contact"> Contact</Link> &emsp; 
                    <Link className=" font-bold " to="/services"> Services</Link>  
                </div>

            </div>

        </>
    )
}

export default About

{/* <Link className=" font-bold " to="/"> Home</Link>  */ }
