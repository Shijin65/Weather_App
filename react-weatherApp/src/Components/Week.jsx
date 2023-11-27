import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY, APP_URL } from "../Constants";


import rain from "../../images/rain.png";
import snow from "../../images/snow.png";
import clear from "../../images/clear.png";
import mist from "../../images/mist.png";
import drizzle from "../../images/drizzle.png";
import clouds from "../../images/clouds.png";
import cloudy from "../../images/cloudy.jpg";


const card = [1, 1, 1, 1, 1, 1, 1];
function Week({ place }) {
  const[data,setdata]=useState([])
  useEffect(() => {
    {place && axios
          .get('https://api.openweathermap.org/data/2.5/forecast?units=metric&cnt=8&q='+`${place}`+`&appid=${API_KEY}`)
          .then((response) => {
            
            setdata(response.data.list)
          }, [])
          }
        
    

  },[place]);
  
  return (
    <div className="md:px-10 w-full ">
      <div className="text-lg sm:text-2xl  border-b-4  border-white border-opacity-50 w-full">
        <h1>TODAY</h1>
      </div>
      <div className="flex overflow-x-scroll gap-5 no-scrollbar">
        {/* card */}
        {data.map((weather) => (
          <span>
            <div
              key={Date}
              className=" card h-44 flex-col pt-3 sm:w-28  w-24 items-center bg-black border-white border-2 rounded-md bg-opacity-50 text-slate-600 mt-3 text-center "
            >
              <h1 className="text-white font-bold ">{weather.dt_txt}</h1>

              <div className="flex justify-center">
                {weather.weather[0].main==="Clear"&&<img 
                src={clear}
                 alt="" className="md:h-20" />}
                 {weather.weather[0].main==="Rain"&&<img 
                src={rain}
                 alt="" className="md:h-20" />}
                 {weather.weather[0].main==="Snow"&&<img 
                src={snow}
                 alt="" className="md:h-20" />}
                 {weather.weather[0].main==="Drizzle"&&<img 
                src={drizzle}
                 alt="" className="md:h-20" />}
                 {weather.weather[0].main==="Mist"&&<img 
                src={mist}
                 alt="" className="md:h-20" />}
                 {weather.weather[0].main==="Clouds"&&<img 
                src={clouds}
                 alt="" className="md:h-20" />}
                 {weather.weather[0].main==="Cloudy"&&<img 
                src={cloudy}
                 alt="" className="md:h-20" />}
              </div>

              <h4 className="text-white">{Math.round(weather.main.temp_max)}/{Math.floor(weather.main.temp_min)}°C</h4>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Week;
