import React from 'react'
const card=[1,1,1,1,1,1,1]
function Week() {
  return (
    
        <div className="px-10 w-full ">
              <div className="text-lg sm:text-2xl  border-b-4  border-white border-opacity-50 w-full">
                <h1>This Week</h1>
              </div>
              <div className="grid grid-flow-col grid-cols-2  gap-5 flex-wrap  bg-black overflow-x-scroll ">
                {/* card */}
                {card.map((item) => (
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
                ))}
              </div>
            </div>
    
  )
}

export default Week