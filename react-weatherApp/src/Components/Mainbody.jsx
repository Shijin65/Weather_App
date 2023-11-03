import React, { useEffect, useState } from "react";
import { API_KEY, APP_URL } from "../Constants";
import axios from "axios";
import Week from "./Week";
import { RingLoader, SyncLoader } from "react-spinners";

import sunrise from "../../images/sunrise.png";
import sunset from "../../images/sunset.png";
import sealvl from "../../images/sealvl.png";
import humidity from "../../images/humidity.png";
import Wind from "../../images/wind.png";

import rain from "../../images/rain.png";
import snow from "../../images/snow.png";
import clear from "../../images/clear.png";
import mist from "../../images/mist.png";
import drizzle from "../../images/drizzle.png";
import clouds from "../../images/clouds.png";
import cloudy from "../../images/cloudy.jpg";

const climet = [];
const card = [1, 1, 1, 1, 1, 1, 1];
const places = ["mannarkkad", "palakkad", "kozhikode", "los angeles"];
// var risedate=null;
function Mainbody({ place }) {
  const [data, setdata] = useState([]);
  const [main, setmain] = useState("");
  const [img, setimg] = useState("");
  const [rise, setrise] = useState("");
  const [set, setsunset] = useState("");
  const [wind, setwind] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    {
       setloading(true);
      axios
        .get(APP_URL + `${place}` + `&appid=${API_KEY}`)
        .then(function (response) {
          setdata(response.data);
          setmain(response.data.main);
          setimg(response.data.weather[0].main);
          setwind(response.data.wind);

          var risedate = new Date(response.data.sys.sunrise * 1000);
          var setdate = new Date(response.data.sys.sunset * 1000);
          const risetime = risedate.getHours() + ":" + risedate.getMinutes();
          const settime = setdate.getHours() + ":" + setdate.getMinutes();
          setrise(risetime);
          setsunset(settime);
          setloading(false);
        })
        .catch(function (error) {
          alert(error.response.data.message);
          console.log(error.response.data.message);
        });
    }
  }, [place]);
  return (
    <div className="h-full">
      <div className="  h-full ">
        {place ? (
          <>
            <div className="bg-white  mt-16  sm:mt-5 bg-opacity-20 rounded-md  shadow-[0px_8px_17px_18px_rgba(0,0,0,0.25)] lg:mx-44 my-20 8 px-5 py-5 ">
              {loading ? (
                <div className="flex justify-center items-center h-full">
                  <SyncLoader color="#36d7b7" speedMultiplier={0.5} />
                </div>
              ) : (
                <>
                  <div className="flex w-full text-center  justify-around flex-wrap lg:flex-nowrap my-5">
                    {/* 1 */}
                    <div className="lg:basis-1/3 basis-1/2 flex justify-center animate-pulse">
                      {img === "Clear" && (
                        <img
                          src={clear}
                          alt="places"
                          className="sunimg h-28 sm:h-32 lg:h-44 "
                        />
                      )}
                      {img === "Rain" && (
                        <img
                          src={rain}
                          alt="places"
                          className="sunimg h-28 sm:h-32 lg:h-44 "
                        />
                      )}
                      {img === "Snow" && (
                        <img
                          src={snow}
                          alt="places"
                          className="sunimg h-28 sm:h-32 lg:h-44 "
                        />
                      )}
                      {img === "Mist" && (
                        <img
                          src={mist}
                          alt="places"
                          className="sunimg h-28 sm:h-32 lg:h-44 "
                        />
                      )}
                      {img === "Drizzle" && (
                        <img
                          src={drizzle}
                          alt="places"
                          className="sunimg h-28 sm:h-32 lg:h-44 "
                        />
                      )}
                      {img === "Clouds" && (
                        <img
                          src={clouds}
                          alt="places"
                          className="sunimg h-28 sm:h-32 lg:h-44 "
                        />
                      )}
                      {img === "Cloudy" && (
                        <img
                          src={cloudy}
                          alt="places"
                          className="sunimg h-28 sm:h-32 lg:h-44 animate-bounce"
                        />
                      )}
                    </div>

                    {/* 2 */}
                    <div className="md:basis-1/3 basis-1/2 flex flex-col  justify-start ">
                      {/* olace */}
                      <div>
                        <h1 className="   text-white text-2xl lg:text-5xl">
                          {data.name}
                        </h1>
                      </div>

                      {/* temp */}
                      <div>
                        <h1 className=" text-white lg:text-9xl font-extralight text-5xl">
                          {Math.round(main.temp)}°C
                        </h1>
                      </div>
                      {/* date */}
                      <div>
                        feels Like {main.feels_like} {"  "}
                        {img}
                      </div>
                    </div>

                    {/* 3 */}

                    <div className="flex lg:grid lg:grid-cols-2 lg:flex-wrap justify-around flex-row gap-5 lg:flex-col lg:w-auto w-full  lg:text-xs md:my-0 my-">
                      <div className="sm:flex flex-col">
                        <img src={sunrise} alt="places" className="h-10" />
                        <h1>
                          sunrise <span className="font-bold">{rise}</span>
                        </h1>
                      </div>
                      <div className="sm:flex flex-col">
                        <img src={sunset} alt="places" className="h-10" />
                        <h1>
                          sunset <span className="font-bold">{set}</span>
                        </h1>
                      </div>
                      <div className="sm:flex flex-col">
                        <img src={sealvl} alt="places" className="h-10" />
                        <h1>
                          sealvl{" "}
                          <span className="font-bold">{main.sea_level}m</span>
                        </h1>
                      </div>
                      <div className="sm:flex flex-col">
                        <img src={humidity} alt="places" className="h-10" />
                        <h1>
                          humidity{" "}
                          <span className="font-bold">{main.humidity}g/kg</span>
                        </h1>
                      </div>
                      <div className="sm:flex flex-col ">
                        <img src={Wind} alt="places" className="h-9" />
                        <h1>
                          wind{" "}
                          <span className="font-bold">{wind.speed}m/s</span>
                        </h1>
                      </div>
                    </div>
                  </div>

                  <Week place={place} />
                </>
              )}
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center h-full">
            <RingLoader className="-mt-14 lg:-mt-40" color="#0018ff" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Mainbody;
