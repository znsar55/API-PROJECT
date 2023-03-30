
import{ Link ,Route,Routes} from "react-router-dom"; 
import Home from "./component/Home"
import MarsRover from "./component/MarsRover";
import NasaPhoto from "./component/NasaPhoto";
import NavBar from "./component/NavBar";

import React from "react"


const App=()=>{

  
   return(
  <>  <div className="App">
       <nav>
        <div className="grid">
          <div className="box box1"><Link className="home" to="/" >Home</Link></div>
          <div className="box box2"><Link className="Apod" to="/Photo" >APOD</Link></div>
          <div className="box box3"><Link className="Mars" to="/marsphoto" >Mars Rover Photos</Link></div>
          <div className="box box4"><Link className="Epic" to="/images" >EPIC</Link></div>
          

        </div>
       </nav>
       </div>
       <Routes>
    
       <Route path="/" element={<Home />}  />
       <Route path="/photo" element={<NasaPhoto />}  />
       <Route path="/marsphoto" element={<MarsRover />}  />
       <Route path="/images" element={<NavBar />}  />
       
            
       
      
       </Routes>
       </>  
    
  )
}
export default App
