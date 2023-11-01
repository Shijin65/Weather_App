import axios from "axios";
import React, { useEffect } from "react";
import { API_KEY, APP_URL } from "../Constants";
const card = [1, 1, 1, 1, 1, 1, 1];
function Week({ place }) {
  useEffect(() => {
    console.log(place);
    {
      place &&
        axios
          .get('https://api.openweathermap.org/data/2.5/forecast?q=' + "MANNARKKAD" + `&appid=${API_KEY}`)
          .then((response) => {
            console.log(response.data.list);

          }, [])
          .catch(function (error) {
            // handle error
            alert(error);
            console.log(error);
          });
    }
  });
  return (
    <div className="md:px-10 w-full ">
      <div className="text-lg sm:text-2xl  border-b-4  border-white border-opacity-50 w-full">
        <h1>This Week</h1>
      </div>
      <div className="grid grid-flow-col md:grid-rows-1 grid-rows-2 items-center gap-5 flex-wrap  md:overflow-x-scroll lg:overflow-x-scroll ">
        {/* card */}
        {card.map((item) => (
          <span>
            <div
              key={Date}
              className=" card flex-col pt-3 md:w-28  sm:w-auto items-center bg-white border-white border-2 rounded-md bg-opacity-50 text-slate-600 mt-3 text-center "
            >
              <h1>Monday</h1>
              <div className="flex justify-center">
                <img src="images/clouds.png" alt="" className="md:h-20" />
              </div>
              <h4>00/00°C</h4>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Week;
