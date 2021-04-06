import React, { useState } from 'react';
import About from '../About';
import Projects from '../Projects';
import Resume from '../Resume';
import Contact from '../Contact';
import Nav from '../Nav';

function Renderlive() {
    const [currentPage, handlepageChange] = useState('About');

    const renderPage =() =>{
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Projects':
                return <Projects />;
            case 'Resume':
                return <Resume />;
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