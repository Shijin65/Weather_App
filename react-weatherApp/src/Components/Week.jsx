import React from 'react'

function Week() {
  return (
    <div>
        <div className="px-10">
              <div className="text-lg sm:text-2xl  border-b-4  border-white border-opacity-50 ">
                <h1>This Week</h1>
              </div>
              <div className="flex gap-8 ">
                {/* card */}
                {/* {card.map((item) => (
                  <div className=" card flex-col pt-3 md:w-28 sm:w-auto items-center bg-white border-white border-2 rounded-md bg-opacity-20 mt-3 text-center overflow-hidden">
                    <h1>Monday</h1>
                    <div className="flex justify-center">
                      <img
                        src="images/clouds.png"
                        alt=""
                        srcset=""
                        className="h-20"
                      />
                    </div>
                    <h4>00/00°C</h4>
                  </div>
                ))} */}
              </div>
            </div>
    </div>
  )
}

export default Week