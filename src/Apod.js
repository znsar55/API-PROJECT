import  './App.css'
import {useState,useEffect} from "react"
const Apod=()=>{
  const [nasa,setNasa]=useState("");
  const [numDate,setNumDate]=useState("2019-05-30")
  let key ="GB1AF9MFJ1J3eGxi0R3xEYNSt5xGv8dgulzCRTXp"
  const handler = async()=>{
    
      let response = await fetch (`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${numDate}`)

      //https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
      let data = await response.json();
      setNasa(data);
      console.log(data);
   

  }

  useEffect(
    () => { handler(); },[numDate]
  )
   return(
    <div>
      <h2>Image of the Day</h2>
      <button onClick={handler}>img</button>
      <input type="date" onChange={(e)=>setNumDate ( e.target.value)}  ></input>
      <img width="250px" height="250px" src={nasa.url}/>
    </div>
  )
}
export default Apod