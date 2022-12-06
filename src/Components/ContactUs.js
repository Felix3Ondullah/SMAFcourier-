import React, {Fragment, useState} from "react";
import Axios from "axios"
import image from "../Assets/message.png"


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

    )
}

export default ContactUs;