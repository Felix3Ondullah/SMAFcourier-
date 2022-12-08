import React, { useState }  from "react";
import  "./email.css"
 
const Email = () =>{
   const [formState, setFormState] = useState({})
  
   const changeState = (e) =>{
       setFormState({...formState, [e.target.name]: e.target.value})
   }
   const handleSubmit = (e) =>{
       e.preventDefault()
       const config = {
           SecureToken: '934bb5cc-b914-4385-b22e-8a08c5c6d90c ',
           To : 'immaculatemariah@mail.com',
           From : formState.email,
           Subject : formState.title,
           Body : `${formState.name} ${formState.message}`
       }
           window.email.send(config).then(()=>{alert("email successfully sent")})
       
       e.reset()
   }
   return (
       <div>
           <form onSubmit={handleSubmit}>
               <input type="text" name="name" id="name"value={formState.name} onChange={changeState} placeholder="name"/>
               <input type="email" name="email" id="email" value={formState.email} onChange={changeState} placeholder="email"/>
               <input type="text" name="title" id="title" value={formState.title} onChange={changeState} placeholder="title"/>
               <textarea type="text" name="message"  id="content" value={formState.message} onChange={changeState} placeholder="message"/>
               <input type="submit" value="send email"/>
               </form>
       </div>
   )
}
export default Email
