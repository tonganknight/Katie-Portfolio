import React, {useEffect} from 'react';
import  { Breakpoint, small, large, up, down } from 'react-socks';

function About() {

    

    return (
      
 <div>

        <Breakpoint large up>
       
        <div className="portback">

        <div className="Projectw1">


        <div className="mypic"></div>

        <div className="aboutmetextflex">
        <div>Hello,</div> <div className="break"> My name is Katie Alusa and I am a Graphic Designer. 
        I currently work at Xtreme Graphix where I specialize in creating designs for screen printing, vinyl, business cards, promotional items, and (my favorite) designing logos for various companies.
        I am married to the wonderful Malachi Alusa and we currently live in  sunny St George Utah.</div>
        <div className="break">As a Graphic Designer I have had opportunities to try my hand at many different mediums.
        While earning my Bachelors degree I started out as a freelance designer and have been hired to help with a variety of projects. 
        Whether it was designing wedding invitations, Illustrating a children’s book, or designing a logo, I loved them all. My favorite freelance job was branding a new company with a logo, a custom typeface,  a branding guide, and about 20 custom t-shirt designs. 
       </div> <div className="break">I am excited to expand my knowledge and am looking for a reputable company that can provide experience, growth, and the opportunity to progress  in the field.</div>
        </div>

        <ul className="hobbielisttext"><strong>Some things that I enjoy</strong>
                <li>I love Disney Movies, and Country music</li>

              <li>I consider my self a connoisseur of Popcorn </li>

              <li>I am an avid reader</li>

              <li>Shark Movies are the best!</li>
        </ul>

    </div>
</div>

</Breakpoint>

<Breakpoint small down>

<div className="portback">

<div className="smProjectw1">




<div className="smmypic"></div>

<div className="smaboutmetextflex">
<div>Hello,</div> <div className="break"> My name is Katie Alusa and I am a Graphic Designer. 
I currently work at Xtreme Graphix where I specialize in creating designs for screen printing, vinyl, business cards, promotional items, and (my favorite) designing logos for various companies.
I am married to the wonderful Malachi Alusa and we currently live in  sunny St George Utah.</div>
<div className="break">As a Graphic Designer I have had opportunities to try my hand at many different mediums.
While earning my Bachelors degree I started out as a freelance designer and have been hired to help with a variety of projects. 
Whether it was designing wedding invitations, Illustrating a children’s book, or designing a logo, I loved them all. My favorite freelance job was branding a new company with a logo, a custom typeface,  a branding guide, and about 20 custom t-shirt designs. 
</div> <div className="break">I am excited to expand my knowledge and am looking for a reputable company that can provide experience, growth, and the opportunity to progress  in the field.</div>
</div>

</div>

</div>



</Breakpoint>


   </div>
    )

}



export default About