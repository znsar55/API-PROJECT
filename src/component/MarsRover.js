import  './MarsRover.css'

import React, {useState,useEffect} from "react"
const MarsRover=()=>{
  
  const[mars,setMars]=useState([])
 const [index,setIndex]=useState(0)
  const [numDate,setNumDate]=useState("2023-03-16")
  let key = process.env.REACT_APP_NASA_KEY
 const max =(newIndex)=>{
  
  if ( newIndex >= 15){
    newIndex=0
  }else if(newIndex < 0){
    newIndex = 0
  }
  setIndex(newIndex)
  }  
 
 
 const handler = async()=>{
    
      let response = await fetch (`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${numDate}&api_key=${key}`)

      
      
      let data = await response.json();
      if(!data.photos){
        setMars([])
      }else{
        setMars(data.photos.slice(0,15));
      }
      console.log(data)
            
      console.log(data.photos[index])
      console.log(data.photos[index].camera.name)
      console.log(data.photos[index].rover.name)
      console.log(data.photos[index].earth_date)
      console.log([index])
      //console.log(data.photos)
      

  }
  useEffect(
    () => { handler(); },[numDate]
    
    
    
  )
   
   function isData() {

    return mars &&  mars[index];

}
let img_Text='No Image'
let img
let camera= <p>No camera</p>
let rover=<p>No Rover Data</p>
let date1 = <p>no data</p>
let rover_id = <p>no data</p>
let landing_date = <p>no data</p>
let launch_date= <p>no data</p>
let status = <p>no data</p>

if(isData(index)) {
img = <img src={mars[index].img_src}></img>
camera=mars[index].camera.full_name    
rover = mars[index].rover.name
date1 =mars[index].earth_date
rover_id = mars[index].rover.id
landing_date = mars[index].rover.landing_date
launch_date= mars[index].rover.launch_date
status=mars[index].rover.status
}

let date
  if(new Date(numDate)>new Date()){
    img_Text+='  you cannot see future'
    date=<div ><p>
    <p>you cannot see future</p>
  </p><br></br></div>
  }
   if(!img){
    img=<p>{img_Text}</p>
   }

     return(
    <div >
      <input type="date" onChange={(e)=>setNumDate ( e.target.value)}  ></input>
      <div className='Card'>  
      <h2>Rover Image</h2>
      
      <button className='btn1' onClick={()=>max(index+1)}>Next</button>
      <button className='btn2' onClick={()=>max(index-1)}>previous</button>
      <div className='ImgBox'>
      {img}
      <div className='Content fade'>
      {date?date:<div>
      <label><h4>Camera Details:{camera}</h4></label>
      <h4>Rover Details:{rover}</h4>
      <p>Earth Date:{date1}</p>
      <p>Rover Id:{rover_id}</p>
      <p>landing Date:{landing_date}</p>
      <p>Launch Date:{launch_date}</p>
      <p>Status:{status}</p>
     </div>}  
      
      </div>
      </div>
      </div>
    </div>
  )
}
export default MarsRover