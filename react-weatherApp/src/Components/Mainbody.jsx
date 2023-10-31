import React, { useEffect, useState } from "react";
import { API_KEY, APP_URL } from "../Constants";
import axios from "axios";
import Week from "./Week";
const card = [1, 1, 1, 1, 1, 1, 1];
// var risedate=null;
function Mainbody({ place }) {
  console.log(place);
  const [data, setdata] = useState("");
  const [main, setmain] = useState("");
  const [img, setimg] = useState("");
  const [rise, setrise] = useState("");
  
  useEffect(() => {
    axios
      .get(APP_URL + "MANNARKKAD" + `&appid=${API_KEY}`)
      .then(function (response) {
        setdata(response.data);
        setmain(response.data.main);
        setimg(response.data.weather[0].main);
        var risedate = new Date(response.data.sys.sunrise * 1000)
        // var setdate = new Date(response.data.sys.sunset * 1000)
        const risetime =  risedate.getHours()+":"+ risedate.getMinutes()
        setrise(risetime)

      })
      .catch(function (error) {
        // handle error
        alert("error");
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  console.log(rise);

  return (
    <div>
      <div className=" py-5">
        {/* select place */}
        <div className="text-black text-right ">
          <form>
            <select
              id="cars"
              name="cars"
              className=" w-32 sm:w-48 h-8 px-2 text-gray-700 text-xs rounded-lg bg-opacity-50 bg-white "
            >
              <option value="volvo">MANNARKKAD</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </form>
        </div>

        <div className="bg-white  mt-5 bg-opacity-20 rounded-md  shadow-[0px_8px_17px_18px_rgba(0,0,0,0.25)] lg:mx-44 my-20   px-5 py-5">
          <div className="flex w-full text-center  justify-around flex-wrap lg:flex-nowrap">
            {/* 1 */}
            <div className="lg:basis-1/3 basis-1/2 flex justify-center">
              <img
                src={`images/${img}.png`}
                alt=""
                srcset=""
                className="sunimg h-28 sm:h-32 lg:h-44 "
              />
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
              <div>feels Like {main.feels_like}</div>
            </div>

            {/* 3 */}

            <div className="flex lg:grid lg:grid-cols-2 lg:flex-wrap justify-around flex-row gap-5 lg:flex-col lg:w-auto w-full   md:my-0 my-">
              <div className="sm:flex flex-col">
                {" "}
                <img
                  src="images/sunrise.png"
                  alt=""
                  srcset=""
                  className="h-10"
                />{" "}
                <h1>sunrise {rise}am</h1>
              </div>
              <div className="sm:flex flex-col">
                {" "}
                <img
                  src="images/sunset.png"
                  alt=""
                  srcset=""
                  className="h-10"
                />{" "}
                <h1>sunset</h1>
              </div>
              <div className="sm:flex flex-col">
                {" "}
                <img
                  src="images/sealvl.png"
                  alt=""
                  srcset=""
                  className="h-10"
                />{" "}
                <h1>sealvl {main.sea_level}m</h1>
              </div>
              <div className="sm:flex flex-col">
                {" "}
                <img
                  src="images/humidity.png"
                  alt=""
                  srcset=""
                  className="h-10"
                />
                <h1>humidity {main.humidity}g/kg</h1>
              </div>
              <div className="sm:flex flex-col">
                {" "}
                <img
                  src="images/wind.png"
                  alt=""
                  srcset=""
                  className="h-8"
                />{" "}
                <h1>wind</h1>
              </div>
            </div>
          </div>

          <Week />
        </div>
      </div>
    </div>
  );
}

export default Mainbody;
