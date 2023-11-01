import "./app.css"
import Navbar from "./Components/Navbar";
import Mainbody from "./Components/Mainbody";
import { useEffect, useState } from "react";
function App() {
 const[place,setplace]=useState("")
 useEffect(()=>{
  localStorage.setItem("place",place)
 },)
  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        fontFamily: "Inter",
      }}
      className="h-screen w-screen bg-cover bg-center text-white "
    >
      <div className="p-5 h-full">
        <div className="w-full flex justify-center mb-5">
          <h1 className="font-bold text-4xl">SJN weather app</h1>
        </div>
        <header>
          <Navbar setplace={setplace}/>
        </header>

        <Mainbody place={place}/>
        
      </div>
    </div>
  );
}

export default App;
