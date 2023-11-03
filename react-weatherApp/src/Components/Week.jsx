import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY, APP_URL } from "../Constants";
const card = [1, 1, 1, 1, 1, 1, 1];
function Week({ place }) {
  const[data,setdata]=useState([])
  useEffect(() => {
    {place && axios
          .get('https://api.openweathermap.org/data/2.5/forecast?units=metric&cnt=8&q='+`${place}`+`&appid=${API_KEY}`)
          .then((response) => {
            console.log(response.data.list[0].weather[0].main);
            setdata(response.data.list)
          }, [])
          .catch(function (error) {
            // handle error
            
            console.log(error);
          });}
        
    

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
              className=" card flex-col pt-3 sm:w-28  w-24 items-center bg-black border-white border-2 rounded-md bg-opacity-50 text-slate-600 mt-3 text-center "
            >
              <h1 className="text-white font-bold ">{weather.dt_txt}</h1>
              <div className="flex justify-center">
                <img 
                src={`images/${weather.weather[0].main}.png`}
                 alt="" className="md:h-20" />
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
