import React, { useEffect, useState } from "react";
import search from "../../images/search.png";
function Navbar({ setplace }) {
  const [value, setvalue] = useState("");
  let time = new Date().toLocaleTimeString();
  const [currentTime, setTime] = useState(time);

  const updatetime = () => {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(updatetime, 1000);
  const handlesubmite = () => {
    if (value!=="") {
      setplace(value);
    }else{
      alert("Enter Valid Place")
    }
    
  };

  return (
    <div>
      <header>
        <nav className="flex gap-2 justify-between border-b-4 pb-5  border-white border-opacity-50  items-center ">
          <div className="">
            <h1 className="text-lg md:text-7xl font-extrabold font-mono ">
              {currentTime}
            </h1>
            <h1 className="sm:text-4xl font-extrabold font-mono ">
              {new Date().toLocaleDateString()}
            </h1>
          </div>
          {/* search */}
          <div className="flex gap-2 sm:h-10">
            <input
              type="text"
              name=""
              id=""
              value={value}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setvalue(e.target.value);
                }
              }}
              onChange={(e) => {
                setvalue(e.target.value);
              }}
              className=" rounded-md  border-2 border-white bg-white bg-opacity-20 ps-5 sm:text-xl "
              placeholder="write your place here......."
            />
            <div
              className="btn rounded-full sm:px-5 px-1 bg-white flex items-center hover:bg-gray-300"
              onClick={handlesubmite}
            >
              <img src={search} alt="search icon" className=" h-5 sm:h-8 " />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
