import React, { useState } from "react";
import { Link } from "react-router-dom";
import './index.css'

export default function Payment() {

    var email = localStorage.getItem("email");
    var total = localStorage.getItem("total");

    const countries = ["China", "Russia", "UK", "Brazil", "Portugal"];
    const [menu, setMenu] = useState(false);
    const [country, setCountry] = useState("United States");

    const changeText = (e) => {
        setMenu(false);
        setCountry(e.target.textContent);
    };
    return (
        <div className="flex justify-center items-center">
            <div className="pt-4 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
                <div className="flex flex-col justify-start items-start w-full space-y-9">
                    <div className="flex justify-start flex-col items-start space-y-2">
                        <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-slate-800">Checkout</p>
                    </div>

                    <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
                        <div className="xl:w-2/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-slate-100 py-7 sm:py-0 xl:py-10 px-10 xl:w-full wallpaper">
                        </div>

                        <div className="p-8 bg-orange-100 flex flex-col lg:w-full xl:w-3/5 card-two">
                            <button className="border border-transparent hover:border-orange-300 bg-orange-900 hover:bg-white text-white hover:text-orange-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-base leading-4">Pix</p>
                                </div>
                            </button>

                            <div className="flex flex-row justify-center items-center mt-6">
                                <hr className="border w-full" />
                                <p className="flex flex-shrink-0 px-4 text-base leading-4 text-slate-600">or pay with card</p>
                                <hr className="border w-full" />
                            </div>

                            <div className="mt-8">
                                <input placeholder={email} className="border border-slate-300 p-4 rounded w-full text-base leading-4 placeholder-slate-600 text-slate-600" type="email" />
                            </div>

                            <label className="mt-8 text-base leading-4 text-slate-800">Card details</label>
                            <div className="mt-2 flex-col">
                                <div>
                                    <input className="border rounded-tl rounded-tr border-slate-300 p-4 w-full text-base leading-4 placeholder-slate-600 text-slate-600" type="email" placeholder="0000 1234 6549 15151" />
                                </div>
                                <div className="flex-row flex">
                                    <input className="border rounded-bl border-slate-300 p-4 w-full text-base leading-4 placeholder-slate-600 text-slate-600" type="email" placeholder="MM/YY" />
                                    <input className="border rounded-br border-slate-300 p-4 w-full text-base leading-4 placeholder-slate-600 text-slate-600" type="email" placeholder="CVC" />
                                </div>
                            </div>

                            <label className="mt-8 text-base leading-4 text-slate-800">Name on card</label>
                            <div className="mt-2 flex-col">
                                <div>
                                    <input className="border rounded border-slate-300 p-4 w-full text-base leading-4 placeholder-slate-600 text-slate-600" type="email" placeholder="Name on card" />
                                </div>
                            </div>

                            <label className="mt-8 text-base leading-4 text-slate-800">Country or region</label>
                            <div className="mt-2 flex-col">
                                <div className="relative">
                                    <button className="text-left border rounded-tr rounded-tl border-slate-300 p-4 w-full text-base leading-4 placeholder-slate-600 text-slate-600 bg-white" type="email">
                                        {country}
                                    </button>
                                    <svg onClick={() => setMenu(!menu)} className={"transform  cursor-pointer absolute top-4 right-4 " + (menu ? "rotate-180" : "")} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 5.75L8 10.25L12.5 5.75" stroke="#27272A" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className={"mt-1 absolute z-10 w-full flex bg-slate-50 justify-start flex-col text-slate-600 " + (menu ? "block" : "hidden")}>
                                        {countries.map((country) => (
                                            <div key={country} className="cursor-pointer hover:bg-slate-800 hover:text-white px-4 py-2" onClick={changeText}>
                                                {country}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <input className="border rounded-bl rounded-br border-slate-300 p-4 w-full text-base leading-4 placeholder-slate-600 text-slate-600" type="text" placeholder="ZIP" />
                            </div>

                            <button className="mt-8 border border-transparent hover:border-orange-400 bg-orange-900 hover:bg-orange-900 text-white hover:text-white flex justify-center items-center py-4 rounded w-full">
                                <div>
                                    <Link to="/done">
                                        <p className="text-base leading-4">Pay ${total}</p>
                                    </Link>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}