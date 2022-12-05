import React, {Fragment, useState} from "react";
import Axios from "axios"
import image from "../Assets/message.png"


const ContactUs =() =>{
    const url = 'https://lit-depths-86097.herokuapp.com/blogs'
    const [data, setData] = useState({
        title: ' ',
        content: ' ',
        author: ' ',
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
          title: data.title,
          content : data.content,
          author : data.author,
          likes : data.likes
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
                <input onChange={(e)=>handle(e)} type='text' id="title" value={data.title} required name="name" placeholder="enter your name" />
                <br/>
                <br/>
                <input onChange={(e)=>handle(e)} type='email' id="content" value={data.content} required name="email" placeholder="enter your email addres"/>
                <br/>
                <br/>
                
                <input onChange={(e)=>handle(e)} type='text' id="author" value={data.author} required name="message" placeholder=" message"/>
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