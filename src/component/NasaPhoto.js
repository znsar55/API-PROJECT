
import React, { useState, useEffect } from "react"
import './NasaPhoto.css'
const NasaPhoto = () => {
  const [nasa, setNasa] = useState("");
  const [numDate, setNumDate] = useState("2023-03-15")
  let key = process.env.REACT_APP_NASA_KEY
  const handler = async () => {

    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${numDate}`)


    let data = await response.json();
    setNasa(data);
    console.log(data);


  }

  useEffect(
    () => { handler(); }, [numDate]
  )
  let date
  if(new Date(numDate)>new Date()){
    date=
    <p>you Cannot pick Future Date</p>
  }
  return (
    <div>
      <input type="date" onChange={(e) => setNumDate(e.target.value)}  ></input>

      <div className="NasaPhotoCard">


        <h2>Nasa Image of the Day</h2>

        <div className="NasaImgBox">
          <img className="blur zoom" src={nasa.url} />
        
        <div className="NasaContent fade">
          {date?date:<div>
            <h3>{nasa.title}</h3>
          <p>{nasa.date}</p>
          <p>{nasa.explanation}</p>

            </div>}
        </div>
        </div>
      </div>
    </div>
  )
}
export default NasaPhoto