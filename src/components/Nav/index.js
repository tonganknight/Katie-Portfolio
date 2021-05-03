import React from 'react';

function Nav({currentPage, handlepageChange}) {
    
    const tabs =[ 'Home', 'Portfolio', 'About',  'Contact']
    return(
        
            <nav>

                <div className="katieicon"></div>

                    {tabs.map(tab => (
                        <div key={tab} className="linkedditer"><a href={'#' + tab.toLowerCase()}
                        onClick={() => handlepageChange(tab)}
                        className={ 
                        currentPage === tab ? 'nav-link active' : 'nav-link', "Navtext"
                        } >{tab}</a></div>
                    ))}

                <div className="iconflex">
                    <a  target="blank" href="https://www.facebook.com/katelynn.empey" className="iconFacebook"></a>
                    <a  target="blank" href="https://www.instagram.com/alusadesign" className="iconInstagram"></a>
                    <a  target="blank" href="https://www.linkedin.com/in/katelynn-empey-76b6ab4b/" className="iconLink"></a>
                    <a  target="blank" href="https://www.behance.net/KatieAlusa?tracking_source=search_users_recommended%7CKatie%20alusa" className="iconBehance"></a>
                </div>
            </nav>

 

    )
}

export default Nav