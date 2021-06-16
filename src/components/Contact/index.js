import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import  { Breakpoint, small, large, up, down } from 'react-socks';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                }
              }
              console.log('errorMessage', errorMessage);
              
            }
            if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })  //setFormState({...formState, name: e.target.value })
            }
      }
      
      console.log(formState);
return(

<div>

  <Breakpoint large up>
  <div className="contactback">
  <div className="contactTitle"><strong>Feel free to reach out to me!</strong></div> 
  <div className="contactText">Email: katie@alusadesign.com</div>
  <div className="contactText">Phone: 801-822-9690</div>
  

  </div>
  </Breakpoint>

  <Breakpoint small down>

  <div className="smcontactback">
  <div className="contactTitle"><strong>Feel free to reach out to me!</strong></div> 
  <div className="smcontactText">Email: katie@alusadesign.com</div>
  <div className="smcontactText">Phone: 801-822-9690</div>
  

  </div>

  </Breakpoint>

</div>
)
}
export default Contact;