import React from "react"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./ContactUs.css"
import Maps from "./maps";
import Email from "./email";

const ContactUs =() =>{
    return(
        <div className="contact-container">
        <section id="contact-section">
            <div class="cont-container">
                <div className="support">
                    <h1>Get in Touch</h1>
                    <p>For support or an question:</p>
                    <p>Fill the form below</p>
                    <Email />
                    <div className="icons">
                      <p><InstagramIcon className="icon"/>@SMAF_Courrier</p>
                      <p><FacebookIcon className="icon"/>SMAF_Courrier</p>
                      <p><TwitterIcon className="icon"/> @SMAF_Courrier</p>
                      <p><WhatsAppIcon className="icon"/> 0712345678</p>
                    </div>
                
                </div>
                <div className="contact-info">
                {/* <h2 >SMAF Courrier</h2>
                    <p>Tom Mboya Street</p>
                    <p>Nairobi,Kenya</p> */}
                    
                </div>
            </div>
        </section>
        <Maps />
        {/* <footer>
         <hr/>
         <p>&copy SMUF Courrier. <a href="#" id="footer-link">Terms</a><a href="#">Privacy</a></p>
        </footer> */}
    </div> 
    )
}

export default ContactUs;