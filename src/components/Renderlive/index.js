import React, { useState } from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Nav from '../Nav';
import Home from '../Home';

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
            case 'Contact':
                return <Contact />;
            default: 
                return <About />;
        }
    };

    return ( 

            <div className="  header col-sm">
           <Nav currentPage={currentPage} handlepageChange={handlepageChange} />
            <div className="col-sm">{renderPage(currentPage)}</div>
            
            </div>
    )
}

export default Renderlive