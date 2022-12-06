<<<<<<< HEAD
import React, {Fragment, useState} from "react";
import Axios from "axios"
import image from "../Assets/message.png"

=======
import React from "react"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./ContactUs.css"
>>>>>>> 078baf659d097adea9674f611281b31d3cbed6d3

const ContactUs =() =>{
    const url = ''
    const [data, setData] = useState({
        name: ' ',
        email: ' ',
        message: ' ',
      })

      function handle(e) {
        const newData = {...data}
        newData[e.target.id] = [e.target.value]
        setData(newData)
        console.log(newData)
      }
    

      function addDataForm(e) {
        e.preventDefault()
        
        Axios.post(url, {
          name: data.name,
          email : data.email,
          message : data.message,
        })
        .then(res=>console.log(res))

        e.reset()
    }
    return(
<<<<<<< HEAD
        <Fragment > 
        <div className="contactus">
            
            <div className="contactUs">
            <div className="contactImage">
                <img src={image} />
            </div>
            <div  className="message">
        <h1>Leave your concerns </h1> 
        <hr/>
        <form id="contactusform" onSubmit={(e)=>addDataForm(e)}>
        <br/>
        <br/>
                <input onChange={(e)=>handle(e)} type='text' id="name" value={data.name} required name="name" placeholder="enter your name" />
                <br/>
                <br/>
                <input onChange={(e)=>handle(e)} type='email' id="email" value={data.email} required name="email" placeholder="enter your email addres"/>
                <br/>
                <br/>
                
                <input onChange={(e)=>handle(e)} type='text' id="message" value={data.message} required name="message" placeholder=" message"/>
                <br/>
                <br/>
                <input onChange={(e)=>handle(e)} type='submit'  className="submitMessage"/>
            </form>
            </div>

            </div>
            </div>
        </Fragment>
=======
        <div className="contact-container">
        <section id="contact-section">
            <div class="cont-container">
                <div className="support">
                    <h1>Get in Touch</h1>
                    <p>For support or an question:</p>
                    <p>Email us at support@smafcourrier.com</p>
                    <div className="icons">
                      <p><InstagramIcon className="icon"/>@SMAF_Courrier</p>
                      <p><FacebookIcon className="icon"/>SMAF_Courrier</p>
                      <p><TwitterIcon className="icon"/> @SMAF_Courrier</p>
                      <p><WhatsAppIcon className="icon"/> 0712345678</p>
>>>>>>> 078baf659d097adea9674f611281b31d3cbed6d3

                    </div>
                
                </div>
                <div className="contact-info">
                <h2 >SMAF Courrier</h2>
                    <p>Tom Mboya Street</p>
                    <p>Nairobi,Kenya</p>
                    <iframe width="600" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=tom%20mboya%20street&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
        </section>
        {/* <footer>
         <hr/>
         <p>&copy SMUF Courrier. <a href="#" id="footer-link">Terms</a><a href="#">Privacy</a></p>
        </footer> */}
    </div> 
    )
}

export default ContactUs;