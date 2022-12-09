import React, { Fragment, useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./email.css"

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAIL_KEY_ID, 
      process.env.REACT_APP_TEMPLATE_ID, 
      form.current, 
      process.env.REACT_APP_USER_ID)
      .then((result) => {
          console.log(result.text);
          alert("message sent successfully")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Fragment>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" id='name'/>
      <label>Email</label>
      <input type="email" name="user_email" id='email'/>
      <label>Message</label>
      <textarea name="message" id='title'/>
      <input type="submit" value="Send" />
    </form>
    </Fragment>

  );
};

export default Email