import React from 'react'


const ProfileHeader = () => {
    return(
      
    <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-96 object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mercator-projection.jpg/1200px-Mercator-projection.jpg"
            alt=""
          />   
        </div>
        <div className="relative py-8 mx-auto px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center">

              <img
                className="rounded-lg w-28 h-28 mx-auto  border-4 border-sky-500 "
                src="https://img.chip.com.tr/rcman/Cw940h529q95gm/images/content/2020/09/23/2020092316405294120.jpg"
                alt="Profile Picture"
              />
              <h1 className="mt-2 text-2xl font-bold text-white ">
                Turkey
              </h1>
              <p className="mt-1 text-lg text-white font-medium drop-shadow-md ">0.44 USDT</p>
            </div>
             {/* pp */}

            <div className="mt-6">
              <div className="max-w-md mx-auto  rounded-lg shadow-lg overflow-hidden md:max-w-2xl">
                <div className="flex">
                  <div className="px-4 py-5 w-1/3 bg-gray-800  opacity-80">
                    <div className="text-center">
                      <span className="block text-white text-xl font-bold">
                        0.394 USDT
                      </span>
                      <span className="mt-1 text-sm text-gray-500">
                      Total Volume
                      </span>
                    </div>
                  </div>
                  <div className="px-4 py-5 w-1/3 bg-gray-700 opacity-80">
                    <div className="text-center">
                      <span className="block text-white text-xl font-bold">
                        5,956 USDT
                      </span>
                      <span className="mt-1 text-sm text-gray-500">
                        Floor Price
                      </span>
                    </div>
                  </div>

                  <div className=" px-4 py-5 w-1/3 bg-gray-600 opacity-80">
                    <div className="text-center">
                      <span className="block text-white text-xl font-bold">
                        0.034 USDT
                      </span>
                      <span className="mt-1 text-sm text-gray-500">
                        Best Offer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-16 grid grid-rows-1 grid-flow-col gap-4">
             <div className=" font-bold text-xs  w-2/3 inline-flex ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta dicta temporibus voluptatem animi perferendis, modi nesciunt itaque dolorum est illum tempore quisquam, sunt mollitia maiores nemo perspiciatis non? Odit possimus totam aliquid ipsam porro quidem corporis? Soluta itaque tempore eveniet nemo, hic consequatur expedita, voluptatem voluptas molestiae cumque rem nesciunt?
             </div>

             <div className="font-medium text-sm  w-1/3 inline-flex px-2 ">
                    <a href="#" className="text-gray-500 hover:text-gray-700 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                           <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                         </svg>
                      <span className="sr-only">Telegram page</span>
                     </a>
                     <a href="#" className="text-gray-500 hover:text-gray-700 px-6">
                         <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                             <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                          </svg>
                          <span className="sr-only">Discord page</span>
                     </a>
                     <a href="#" className="text-gray-500 hover:text-gray-700 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                         <span className="sr-only">Twitter page</span>
                     </a>
         
             </div>
          </div>
        </div>
    </div>
      
       
    );
}

export default ProfileHeader