import React from 'react';

function Nav({currentPage, handlepageChange}) {
    
    const tabs =['About', 'Resume', 'Projects', 'Contact']
    return(
        


            

            <nav>

                <div className="katieicon">Icon</div>

                <div className="name"><strong>Katie alusa</strong></div>
                
                    {tabs.map(tab => (
                        <div key={tab} className=""><a href={'#' + tab.toLowerCase()}
                        onClick={() => handlepageChange(tab)}
                        className={ 
                        currentPage === tab ? 'nav-link active' : 'nav-link', "Navtext"
                        } >{tab}</a></div>
                    ))}

            
            </nav>

 

    )
}

export default Nav