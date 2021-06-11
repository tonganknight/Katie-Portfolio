import React from 'react';
import  { Breakpoint, small, large, up, down } from 'react-socks';

function Footer() {

    return(

        <div>
        <Breakpoint large up>
        <div className="iconflex">
                    <a  target="blank" href="https://www.facebook.com/katelynn.empey" className="iconFacebook"></a>
                    <a  target="blank" href="https://www.instagram.com/alusadesign" className="iconInstagram"></a>
                    <a  target="blank" href="https://www.linkedin.com/in/katelynn-empey-76b6ab4b/" className="iconLink"></a>
                    <a  target="blank" href="https://www.behance.net/KatieAlusa?tracking_source=search_users_recommended%7CKatie%20alusa" className="iconBehance"></a>
        </div>
</Breakpoint>

<Breakpoint small down>
<div className="smiconflex">
                    <a  target="blank" href="https://www.facebook.com/katelynn.empey" className="iconFacebook"></a>
                    <a  target="blank" href="https://www.instagram.com/alusadesign" className="iconInstagram"></a>
                    <a  target="blank" href="https://www.linkedin.com/in/katelynn-empey-76b6ab4b/" className="iconLink"></a>
                    <a  target="blank" href="https://www.behance.net/KatieAlusa?tracking_source=search_users_recommended%7CKatie%20alusa" className="iconBehance"></a>
        </div>


</Breakpoint>

</div>
    )
}


export default Footer;