import React from 'react'


const Orders = () => {
    return(
      
     
        <div className="grid grid-cols-6 gap-4 justify-items-center">
           <div className=" p-1 text-sm  font-medium  dark-grey">Ad </div>
           <div className=" p-1 text-sm font-medium dark-grey">Son Fiyat</div>
           <div className=" p-1 text-sm font-medium dark-grey">24 sa Değişim</div>
           <div className=" p-1 text-sm  font-medium  dark-grey">Ad </div>
           <div className=" p-1 text-sm font-medium dark-grey">Son Fiyat</div>
           <div className=" p-1 text-sm font-medium dark-grey">24 sa Değişim</div>
           {/* grid başlık */}

           <div className=" p-1 text-sm">
           <span className="inline-flex items-baseline">
              <img src="https://runoyazilimmedya.com/public/site/img/runo_logo3065.png" alt="" className="self-center w-5 h-5 rounded-full mx-1" />
              <span className="font-medium">BTC</span>
            </span>
           </div>
           <div className=" p-1 text-sm"> <span className="dark-grey font-medium">USDT</span><span className="font-medium ml-2">6.8798</span></div>
           <div className=" p-1 text-sm green font-medium">+0.93%</div>
           <div className=" p-1 text-sm">
           <span className="inline-flex items-baseline">
              <img src="https://runoyazilimmedya.com/public/site/img/runo_logo3065.png" alt="" className="self-center w-5 h-5 rounded-full mx-1" />
              <span className="font-medium">BTC</span>
            </span>
           </div>
           <div className=" p-1 text-sm"> <span className="dark-grey font-medium">USDT</span><span className="font-medium ml-2">6.8798</span></div>
           <div className=" p-1 text-sm green font-medium">+0.93%</div>
           {/* ilk satır liste */}


         </div>
      
       
    );
}

export default Orders