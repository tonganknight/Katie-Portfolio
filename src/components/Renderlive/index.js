import React, { useState } from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Nav from '../Nav';
import Home from '../Home';
import Rates from "../Rates";
import  { Breakpoint, setDefaultBreakpoints, up, down } from 'react-socks';

function Renderlive() {
    const [currentPage, handlepageChange] = useState('Home');

    const renderPage =() =>{
        switch (currentPage) {
            case 'Home':
                return <Home/>;
            case 'Portfolio':
                return <Portfolio />;
            case 'About':
                return <About />;
            case "Rates":
                return <Rates />;
            case 'Contact':
                return <Contact />;
            default: 
                return <About />;
        }
    };

    return ( 

    <div>

        <Breakpoint large up>

            <div className="  header col-sm">
           <Nav currentPage={currentPage} handlepageChange={handlepageChange} />
            <div className=" col-sm">{renderPage(currentPage)}</div>
            </div>
        </Breakpoint>

        <Breakpoint small down>

        <div className="smheader">
           <Nav currentPage={currentPage} handlepageChange={handlepageChange} />
            <div className="">{renderPage(currentPage)}</div>
            </div>
        </Breakpoint>



</div>

    )
}

export default Renderlive