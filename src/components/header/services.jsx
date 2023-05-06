import React from "react";

// components


export default function Services() {
  return (
    <>
    <div class="w-full item-center flex flex-col p-2 mt-20">
        <div class="w-full flex  flex-col p-4 space-y-2">
            <div class="flex justify-between">
                <div class="flex flex-col w-1/2 ml-20">
                    <p class="text-lg ">OUR SERVICES_____________</p>
                    <h2 class="text-2xl font-semibold text-primary">WHAT WE OFFER</h2>
                </div>
            </div>
            <div class="flex w-full items-center justify-center">
                <div class="flex shadow-sm-light rounded-md p-2">
                    <div class="mr-2 h-[344px] w-[334px] text-white bg-primary  flex-col  justify-center  selection:rounded-md flex place-items-center">
                        <div class="border-slate-300 border flex h-40 w-40 rounded-xl justify-center items-center my-5">
                            <img class="h-36 w-36 " src="../../assets/verify.png" alt="" />
                        </div >

                        <img class="w-[80px] h-0 opacity-[20%]" src="./images/Vector 2.svg" alt="" />
                        <h1 class="mt-5 text-base font-bold ">DIRECT DEPOSIT</h1>
                        <h6 class="text-center text-sm mt-5 mx-5">Workers provide their wallet or bank accounts of choice. No wallet lockin for your workers.</h6>
                    </div>
                    <div class="mr-2 h-[344px] w-[334px] text-white  flex-col  justify-center  bg-black/60 selection:rounded-md flex place-items-center">
                        <div class="border-slate-300 border flex h-24 w-24 rounded-full justify-center items-center my-5">
                            <img class="h-10 w-10 " src="./images/scale.png" alt="" />
                        </div>

                        <img class="w-[80px] h-0 opacity-[20%]" src="./images/Vector 2.svg" alt="" />
                        <h1 class="mt-5 text-base font-bold ">PAYROLL MANAGEMENT</h1>
                        <h6 class="text-center text-sm mt-5 mx-5">Secure your future with smart wealth management: Save, Invest and Grow responsibly.</h6>
                    </div>
                    <div class="mr-2 h-[344px] w-[334px] text-white bg-primary  flex-col  justify-center  selection:rounded-md flex place-items-center">
                        <div class="border-slate-300 border flex h-40 w-40 rounded-xl justify-center items-center my-5">
                            <img class="h-36 w-36 " src="../../assets/verify.png" alt="" />
                        </div >

                        <img class="w-[80px] h-0 opacity-[20%]" src="./images/Vector 2.svg" alt="" />
                        <h1 class="mt-5 text-base font-bold ">GET PAID ANYWHERE</h1>
                        <h6 class="text-center text-sm mt-5 mx-5">Workers can convert correncies as they need to any other currency at the best exchange rates</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>

   
    </>
  );
}