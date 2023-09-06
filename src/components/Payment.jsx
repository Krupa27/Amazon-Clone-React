import React from 'react'


const Payment = () => {
  return (
    <div className="bg-amazonclone-background shadow-xl mx-3 my-3 rounded border">
      <div className="px-3 py-2 font-medium font-sans  text-slate-600">
        <h1 className=" p-3 rounded-md text-lg xl:text-3xl">
          Place Your Order
        </h1>
      </div>
      <div className="mx-5 my-10 border-yellow-100 z-10 shadow-sm rounded-md   font-sans font-medium py-4 px-4 ">
        <h2 className="flex font-medium text text-md xl:text-md">
          Payment Options - Cards / UPI / NetBanking
        </h2>
      </div>
      <div>
        <button className="mx-5 my-2 px-2 py-2 bg-yellow-300 z-10 shadow-lg rounded-md   font-sans font-medium  text-xs sm:text-sm">
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Payment

