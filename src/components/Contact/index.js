import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

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
    <section>
    <div className="contactflex"> 
      <h1 className="contacttitle">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
      <div className="contactcenter">
        <label className="contactcenter texttoleft" htmlFor="name">Name:</label>
        <input className="contactcenter" type="text" defaultValue={name} onBlur={handleChange} name="name" />
    </div>
    <div className="contactcenter">
     <label className="contactcenter texttoleft" htmlFor="email">Email address:</label>
     <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
    </div>
    <div className="contactcenter">
    <label className="contactcenter  texttoleft" htmlFor="message">Message:</label>
    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
    </div>
    {errorMessage && (
  <div>
    <p className="error-text">{errorMessage}</p>
  </div>
    )}
    <div className="contactcenter">
    <button className="contactcenter contactbtn" type="submit">Submit</button>
    </div>
      </form>
      </div>
    </section>
)
}
export default Contact;