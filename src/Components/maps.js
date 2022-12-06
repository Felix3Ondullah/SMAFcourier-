import React, {Fragment, useState} from "react";
// import { Wrapper, Status } from "@googlemaps/react-wrapper"
// import {Map, GoogleApiWrapper} from 'google-map-react'


function Maps() {

    const [location, setLocation] = useState("")

    let starting = `https://maps.google.com/maps?q=nairobi&t=k&z=13&ie=UTF8&iwloc=&output=embed`

    function handleLocation(e = "nakuru") {
        setLocation(e)
    }


    return(
        <Fragment>
            <input type="text" placeholder="place the starting poing" onChange={()=>handleLocation()} id/>
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe width="600" height="500" id="gmap_canvas" src={starting} frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                        <a href="https://fmovies-online.net">fmovies</a>
                        <br />
                       
                        <a href="https://www.embedgooglemap.net">google map html generator</a>
                        </div>
                        </div>
        </Fragment>
    )
}
export default Maps