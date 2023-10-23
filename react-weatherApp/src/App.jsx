import { useEffect, useState } from "react";
import { API_KEY, APP_URL } from "./Constants";
import axios from "axios";
import "./app.css"
import Navbar from "./Components/Navbar";
import Mainbody from "./Components/Mainbody";
function App() {
  const[data,setdata]=useState("")
  const[temp, settemp]=useState('')
  useEffect(() => {

    axios
      .get(APP_URL+"MANNARKKAD"+`&appid=${API_KEY}`)
      .then(function (response) {
       setdata(response.data)
       settemp(Math.round(response.data.main.temp))
        console.log(response.data.main);
      })
      .catch(function (error) {
        // handle error
        alert("error")
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
   
  }, []);
  
  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        fontFamily: "Inter",
      }}
      className="h-screen w-screen bg-cover bg-center text-white "
    >
      <div className="p-10">
        <div className="w-full flex justify-center pb-10">
          <h1 className="font-bold text-4xl">SJN weather app</h1>
        </div>
        <header>
          <Navbar/>
        </header>

        <Mainbody data={data} temp={temp} />
        
      </div>
    </div>
  );
}

export default App;
