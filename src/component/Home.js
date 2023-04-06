import React from 'react'
import { Link } from 'react-router-dom'; 
import NasaPhoto from './NasaPhoto'

const Home= ()=>{


return(
<>
  <h1>Home of Nasa Api</h1>
  <h2>APOD(Astronomy Picture of the Day)</h2>
  <p>
One of the most popular websites at NASA is the Astronomy Picture of the Day. 
In fact, this website is one of the most popular websites. 
This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications. 
In addition, if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. 
These keywords could be used as auto-generated but generally help with discoverability of relevant imagery.</p>

<h2>Mars Rover Photos</h2>
<p>
This API is designed to collect image data gathered by NASA Curiosity, Opportunity, and Spirit rovers on Mars 
and make it more easily available to other developers, educators, and citizen scientists. 
This API is maintained by Chris Cerami.


Each rover has its own set of photos stored in the database, which can be queried separately. 
There are several possible queries that can be made against the API. 
Photos are organized by the sol (Martian rotation or day) on which they were taken, counting up from the rover landing date.
 A photo taken on Curiosity 1000th Martian sol exploring Mars, for example, will have a sol attribute of 1000. 
 If instead you prefer to search by the Earth date on which a photo was taken, you can do that, too.
</p>

<h2>EPIC (Earth Polychromatic Imaging Camera )</h2>
<p>
The EPIC API provides information on the daily imagery collected by DSCOVRs Earth Polychromatic Imaging Camera (EPIC) instrument.
 Uniquely positioned at the Earth-Sun Lagrange point, EPIC provides full disc imagery of the Earth and captures 
 unique perspectives of certain astronomical events such as lunar transits using a 2048x2048 pixel CCD (Charge Coupled Device) 
 detector coupled to a 30-cm aperture Cassegrain telescope.</p>

  </>
)

}

 export default Home