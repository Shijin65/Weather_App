import React from 'react'

function Navbar() {
  return (
    <div>
        <header>
          <nav className="flex justify-between border-b-4 pb-5  border-white border-opacity-50  items-center ">
            <div className="">
              <h1 className="time text-7xl font-extrabold font-mono ">
                5:30{" "}
                <span className="AM font-extrabold " style={{}}>
                  AM
                </span>
              </h1>
              <h1 className="text-4xl font-extrabold font-mono ">wednesday</h1>
            </div>

            {/* search */}
            <div className="flex gap-2 h-16">
              <input
                type="text"
                name=""
                id=""
                className=" rounded-md  border-2 border-white bg-white bg-opacity-20 ps-5 text-2xl "
                placeholder="write your place here......."
              />
              <div className="btn rounded-full px-5 bg-white flex items-center ">
                <img
                  src="images\search.png"
                  alt="search icon"
                  className="h-8"
                />
              </div>
            </div>
          </nav>
        </header>
    </div>
  )
}

export default Navbar