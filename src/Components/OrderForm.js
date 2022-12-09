import React, {useState,useEffect} from 'react'
import "../Css/OrderForm.css"
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import Login from "./Login"


function OrderForm() {

    // t.string "package_type"
    // t.string "pick_up_location"
    // t.string "drop_off_location"
    // t.string "date"
    // t.string "departute_time"
    // t.string "arrival_time"
    // t.integer "number_of_kgs"
    // t.integer "price"

  const [package_type, setPackage_Type] = useState('')
  const [pick_up_location, setPick_Up_Location] = useState('')
  const [number_of_kgs, setNumber_Of_Kgs] = useState('')
  const [drop_off_location, setDrop_Off_Location] = useState('')
  const [date, setDate] = useState('')
  const [sender_name, setSender_Name] = useState('')
  const [receiver_name, setReceiver_Name] = useState('')  
  const navigate = useNavigate()
  const[user, setUser]= useState(null)


  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:3000/orders',{
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
            package_type,
            pick_up_location,
            number_of_kgs,
            drop_off_location,
            sender_name,
            receiver_name,
            date
        }
      ),
    })
    .then((r) => r.json())
    navigate('/order')
  }


  // useEffect(() => {
  //   //  auto-login
  //   fetch("http://localhost:3000/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // if (!user) return <Login onLogin={setUser} />
  return(
    <>
      <div className='order-form'>
        <form onSubmit={handleSubmit} className="form">
          <Box
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              style={{"background":"white",
              "padding":'20px',
              "marginTop":"10px",
              "marginBottom": '30px',
              "width":'100%',
              }}
            >
            <FormLabel
              style={{"justifyContent": 'center',
                "alignItems":"center",
                "display": "flex",
                "fontWeight": "bolder",
                "color": "black",
                "fontSize": "40px"
              }}
            >
              <h2> Send Your Delivery</h2>
            </FormLabel>
            <div className='class'>

           
                  <TextField
                id="outlined-disabled"
                label=" Sender Name"
                value={sender_name}
                onChange={(e)=>setSender_Name(e.target.value)}
              />

                 <TextField
                  id="outlined-read-only-input"
                  label="Reciever Name"
                  value={receiver_name}
                  onChange={(e)=>setReceiver_Name(e.target.value)}

                />
              <TextField
                required
                id="outlined-required"
                label="Package Type"
                value={package_type}
                onChange={(e)=>setPackage_Type(e.target.value)}
              />
               <TextField
                  id="outlined-password-input"
                  label="Kilograms"
                  value={number_of_kgs}
                  onChange={(e)=>setNumber_Of_Kgs(e.target.value)}
                />
              </div>
           
              <div className='class'>
                <TextField
                  id="outlined-password-input"
                  label="Date"
                  value={date}
                  onChange={(e)=>setDate(e.target.value)}
                  
                  
                
                />
                <TextField
                  id="outlined-read-only-input"
                  label="Pick Up Location"
                  value={pick_up_location}
                  onChange={(e)=>setPick_Up_Location(e.target.value)}   

                />
               <TextField
                id="outlined-disabled"
                label=" Drop Off Location"
                value={drop_off_location}
                onChange={(e)=>setDrop_Off_Location(e.target.value)}
              />
                
              </div>
              <div>
                <Button className='orderbtn' type="submit" variant="contained" 
                >Send Parcel</Button>
              </div>
            </Box>
        </form>
      </div>
    </>
  )

}

export default OrderForm;
