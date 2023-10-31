import { useEffect, useState } from "react";
import { API_KEY, APP_URL } from "./Constants";
import axios from "axios";
import "./app.css"
import Navbar from "./Components/Navbar";
import Mainbody from "./Components/Mainbody";
function App() {
  const[data,setdata]=useState("")
  const[main, setmain]=useState('')
  const[img, setimg]=useState('')
  let unix_timestamp ="";
  console.log(data)
  useEffect(() => {
    
    axios
      .get(APP_URL+"MANNARKKAD"+`&appid=${API_KEY}`)
      .then(function (response) {
       setdata(response.data)
       setmain(response.data.main)
      setimg(response.data.weather[0].main)
      unix_timestamp = response.data.sys.sunrise
        console.log(response.data.sys.sunrise);
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
  var date = new Date(unix_timestamp * 1000);
  const sunrise=(date.getHours()+":"+date.getMinutes())
  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        fontFamily: "Inter",
      }}
      className="h-screen w-screen bg-cover bg-center text-white "
    >
      <div className="p-8">
        <div className="w-full flex justify-center mb-5">
          <h1 className="font-bold text-4xl">SJN weather app</h1>
        </div>
        <header>
          <Navbar/>
        </header>

        <Mainbody data={data} main={main} img={img} sunrise={sunrise}/>
        
      </div>
    </div>
  );
}

export default App;
