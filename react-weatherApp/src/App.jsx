import "./app.css"
import Navbar from "./Components/Navbar";
import Mainbody from "./Components/Mainbody";
import { useEffect, useState } from "react";

import nightmoon from "../images/nightmoon.jpg"
import evenning from "../images/evenning.jpg"
import morningsun from "../images/morningsun.jpg"
function App() {
const places =["mannarkkad","palakkad","kozhikode","los angeles"]
const[place,setplace]=useState("mannarkkad")
const[bg,setbg]=useState("")
 useEffect(()=>{
  localStorage.setItem("place",place)
const time = new Date().getHours() 
if (time<=5) {
  setbg(nightmoon)
} 
  else if (time<=11) {
  setbg(morningsun)
 }
 else if (time<=19) {
  setbg(evenning)
 }
 else if (time<=23) {
  setbg(nightmoon)
 }
 },)
 
 
 console.log(evenning)

  return (
    <div
      style={{
        backgroundImage:
          `url(${bg})`,
        fontFamily: "Inter",
      }}
      className="h-screen w-screen bg-cover bg-center text-white bg-opacity-50 overflow-y-scroll over"
    >
      <div className="p-5 h-full">
        <div className="w-full flex justify-center mb-5">
          <h1 className="font-bold text-4xl">SJN weather app</h1>
        </div>
        <header>
          <Navbar setplace={setplace}/>
        </header>
        {/* select place */}
        <div className="text-black text-right pt-2 ">
            <form>
              <select
                id="places"
                name="places"
                className=" w-28 sm:w-48 h-8 px-2 text-gray-700 text-xs font-medium uppercase rounded-lg bg-opacity-50 bg-white "
              onChange={(e)=>{setplace(e.target.value)}}>
                
                
                {places.map((place)=><option  className="font-medium text-xs uppercase"  value={place}>{place}</option>)}
                
                
              </select>
            </form>
          </div>
        <Mainbody place={place}/>
        
      </div>
    </div>
  );
}

export default App;
