import React from 'react';

function Nav({currentPage, handlepageChange}) {
    
    const tabs =[ 'Home', 'Portfolio', 'About',  'Contact']
    return(
        


            

            <nav>

                <div className="katieicon"></div>

                <div className="name">Katie Alusa</div>
                
                    {tabs.map(tab => (
                        <div key={tab} className="linkedditer"><a href={'#' + tab.toLowerCase()}
                        onClick={() => handlepageChange(tab)}
                        className={ 
                        currentPage === tab ? 'nav-link active' : 'nav-link', "Navtext"
                        } >{tab}</a></div>
                    ))}

            
            </nav>

 

    )
}

export default Nav