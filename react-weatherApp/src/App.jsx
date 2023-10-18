import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          fontFamily: "Inter",
        }}
        className="h-screen w-screen bg-cover bg-center text-white "
      >
        <div className="p-10">
          <header>
            <nav className="flex justify-between border-b-4 pb-5  border-white border-opacity-50  items-center">
              <div className="">
                <h1 className="time text-7xl font-extrabold font-mono ">
                  5:30{" "}
                  <span className="AM font-extrabold " style={{}}>
                    AM
                  </span>
                </h1>
                <h1 className="text-4xl font-extrabold font-mono ">
                  wednesday
                </h1>
              </div>
              <div className="flex gap-2 h-16">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-[603.467px]  shrink-0 rounded-[12.167px]  border-4 border-white bg-white bg-opacity-20 "
                />
                <div className="rounded-full px-5 bg-white flex items-center ">
                  <img
                    src="images\search.png"
                    alt="search icon"
                    className="h-8"
                  />
                </div>
              </div>
            </nav>
          </header>
          <div className="px-44 py-5">
            <div className="text-black text-right ">
              <form>
                <select
                  id="cars"
                  name="cars"
                  className="w-48 h-8 px-2 text-gray-700 rounded-lg bg-opacity-50 bg-white"
                >
                  <option value="volvo">MANNARKKAD</option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
              </form>
            </div>
            <div className="bg-white w-fulll mt-10 bg-opacity-50 rounded-md  shadow-[0px_8px_17px_18px_rgba(0,0,0,0.25)] ">
              <div className="flex justify-between">
              <div className="flex basis-1/2 ">
                <div className="basis-1/2 bg-red-800">

                  <img src="images/clear.png" alt="" srcset="" className="sunimg  -mt-20 -ms-16  "/>
                </div>
                <div className="basis-1/2 bg-amber-500 flex flex-col justify-center items-center">
                  <div>
                    <h1 className="w-[279px] h-[45.972px] text-white text-center text-[38.045px] not-italic font-light leading-[normal] tracking-[5.897px]">location</h1>
                  </div>
                  <div>
                    <h1 className=" text-white text-[106px]  font-extralight">00°C</h1>
                  </div>
                  
                </div>
              </div>
              <div className="basis-1/2 bg-slate-500">other</div>
              </div>
              div
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;