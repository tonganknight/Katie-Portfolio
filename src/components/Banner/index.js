import React from 'react';
import Bannervid from '../../assets/Vid/vid1.mp4'

function Banner() {

    return (
        <div className="missionbannerflex">

            <video className="vid1" autoPlay muted loop>
                <source src={Bannervid}></source>
            </video> 
       
            <div className="missionstatementflex">

            <div className="missionstatement"><span className="name">Malachi Alusa</span>
            <div className="missionstatementtext">I’m a Full Stack Web Developer with a passion for creating sharp, and responsive products.
                One creed I embrace is your work should always provide more than monetary value. 
                It should provide a creative and intuitive experience that inspires. 
                I am looking for a reputable company that shares my high values, and strong work ethic.</div>
                </div>


            </div>

        </div>

    )
}



export default Banner