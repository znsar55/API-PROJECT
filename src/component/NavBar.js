import React, {useState,useEffect} from "react"
import './NavBar.css'
const NavBar=()=>{
  const [image,setImage]=useState("");
  const [numDate,setNumDate]=useState("2023-03-25")
  
 const [index,setIndex]=useState(0)
  let key =process.env.REACT_APP_NASA_KEY
  const handler = async()=>{
    
      let response = await fetch (`https://api.nasa.gov/EPIC/api/natural/date/${numDate}?api_key=${key}`)
 

      
      let data = await response.json();
      
      console.log(data[index])
      setImage(data)
      console.log(data[index].date)
      console.log(data[index].image)
      // console.log(data1)
   

  }

  useEffect(
    () => { handler(); },[numDate]
  )
  let img = (<h3>There is no Image of That Date</h3>)
  
  if(index > -1 && index < image.length) 

  {
    let img_url = `https://epic.gsfc.nasa.gov/archive/natural/${numDate.replaceAll("-","/")}/png/`; 
    img = <img height="250px" width="250px" src={img_url+image[index].image+".png"}>

  </img>

}

 let positionq0=<p>no position</p>
 let positionq1=<p>no position</p>
 let positionq2=<p>no position</p> 
let lunarx=<p>no data</p>
let lunary=<p>no data</p>
let lunarz=<p>no data</p>
let date_time=<p>no data</p>
let sun_position_x=<p>no data</p>
let sun_position_y=<p>no data</p>
let sun_position_z=<p>no data</p>
let lancoordinat=<p>no data</p>

let loncoordinat=<p>no data</p>
 if (index < image.length){
  <div>
    {positionq0=image[index].attitude_quaternions.q0}
   {positionq1=image[index].attitude_quaternions.q1}
   {positionq2=image[index].attitude_quaternions.q2}
   {lunarx=image[index].lunar_j2000_position.x}
   {lunary=image[index].lunar_j2000_position.y}
   {lunarz=image[index].lunar_j2000_position.z}
   {date_time=image[index].date}
   {sun_position_x=image[index].sun_j2000_position.x}
   {sun_position_y=image[index].sun_j2000_position.y}
   {sun_position_z=image[index].sun_j2000_position.z}
   {lancoordinat=image[index].centroid_coordinates.lat}
   {loncoordinat=image[index].centroid_coordinates.lon}
</div>
}
let date
  if(new Date(numDate)>new Date()){
    date=
    <p>you cannot see future </p>
  }


   return(
    <div>
      <input type="date" onChange={(e)=>setNumDate ( e.target.value)}  ></input>
      <div className="Card">
      <h2>Earth Position of the Day</h2>
      <div className="ImgBox">
            {img}
            <div className="Content fade">
            {date?date:<div>
      <h5>Date and Time:{date_time}</h5>
      <p>position_attitude_quaternions_q0:{positionq0}</p>
      <p>position_attitude_quaternions_q0:{positionq1}</p>
      <p>position_attitude_quaternions_q0:{positionq2}</p>
      <p>Lunar_j2000 x position:{lunarx}</p>
      <p>Lunar_j2000 y position:{lunarz}</p>
      <p>Lunar_j2000 z position:{lunarx}</p>
      <p>Sun J200  X Position:{sun_position_x}</p>
      <p>Sun J200  y Position:{sun_position_y}</p>
      <p>Sun J200  Z Position:{sun_position_z}</p>
      <p>centroid_coordinates_Lan :{lancoordinat}</p>
      <p>centroid_coordinates_Lon :{loncoordinat}</p>
        </div>}
      <p></p>
      
      </div>
      </div>
    </div>
    </div>
  )
}
export default NavBar