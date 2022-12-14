import { Link } from "react-router-dom";
import React from "react";
import "./index.css";

const itemsLR = [
  {
    id: "1",
    name: "Lord Of The Rings Spear Of Eomer",
    imageUrl: "1.jfif",
    price: 98.22,
    color: "Salmon",
    quantity: 1,
  },
  {
    id: "2",
    name: "Lord Of The Rings Sword Of Théodred",
    imageUrl: "2.jfif",
    price: 104.02,
    color: "Salmon",
    quantity: 1,
  },
  {
    id: "3",
    name: "The Mace Of Sauron And Ring Red Eye Edition With War Banner",
    imageUrl: "3.jfif",
    price: 63.77,
    color: "Salmon",
    quantity: 1,
  },
  {
    id: "4",
    name: "Lord Of The Rings Helm Of King Theoden",
    imageUrl: "4.jfif",
    price: 274.02,
    color: "Salmon",
    quantity: 1,
  },
  {
    id: "5",
    name: "LOTR™ - STING™ The Sword Of Frodo Baggins With Wall Plaque",
    imageUrl: "5.jfif",
    price: 78.50,
    color: "Salmon",
    quantity: 1,
  },
  {
    id: "6",
    name: "LOTR™ Officially Licensed Glamdring Sword Of Gandalf",
    imageUrl: "6.jfif",
    price: 85.20,
    color: "Salmon",
    quantity: 1,
  },
  {
    id: "7",
    name: "Sword Of The Witch King",
    imageUrl: "7.jfif",
    price: 91.60,
    color: "Salmon",
    quantity: 1,
  },
  {
    id: "8",
    name: "Sword Of Narsil",
    imageUrl: "8.jfif",
    price: 47.18,
    color: "Salmon",
    quantity: 1,
  },
  {
    id: "9",
    name: "Lord Of The Rings Ringwraith Sword",
    imageUrl: "9.jfif",
    price: 24.01,
    color: "Salmon",
    quantity: 1,
  },
  {
    id: "10",
    name: "Officially Licensed Hadhafang Sword Of Arwen Evenstar",
    imageUrl: "10.jfif",
    price: 99.90,
    color: "Salmon",
    quantity: 1,
  },
  {
    id: "11",
    name: "The Lord Of The Rings Sword Of Strider",
    imageUrl: "11.jfif",
    price: 214.02,
    color: "Salmon",
    quantity: 1,
  },
  {
    id: "12",
    name: "Sting Scabbard",
    imageUrl: "12.jfif",
    price: 324.02,
    color: "Salmon",
    quantity: 1,
  },
];

function OnCleanCart() {
  localStorage.removeItem("cart");
  document.location.reload(true);
}


export default function Cart() {
  if (localStorage.getItem("cart") === null) {
    return (
      <div className="w-full h-5/6 justify-center items-center flex flex-col">
        <div className="p-2 bg-slate-200 h-2/6 w-2/6 rounded-lg shadow-2xl justify-center items-center flex flex-col">
          <h1 className="text-5xl">Cart is empty {" :( "}</h1>
          <a href="/">
            <button className="mt-10 text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
              Go home
            </button>
          </a>
        </div>
      </div>
    );
  } else {
    let productsC = [];
    let cart = localStorage.getItem("cart").split(",");
    let total;

    function OnChekout() {
      localStorage.setItem("total", total);

    }
    cart.forEach((element) => {
      var item = itemsLR.find((x) => x.id === element);
      productsC.push(item);

      total = productsC.reduce((accumulator, value) => {
        return accumulator + value.price;
      }, 0);

      let formatter = Intl.NumberFormat('en-US');
      total = formatter.format(total);
    });


    function OnRemove(id) {
      var newCart = productsC.filter((x) => x.id !== id);
      productsC = newCart;

      console.log(productsC)
      document.location.reload(true);
    }

    return (
      <div className="w-full flex justify-center items-center bg-gradient-to-r from-slate-400 to-orange-200 main-cart">
        <div className="flex h-4/5 flex-col overflow-y-scroll bg-white rounded-lg shadow-xl w-4/6 main-card">
          <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
            <h1 className="text-center text-3xl font-bold">Cart's items</h1>
            <div className="mt-8">
              <div className="flow-root">
                <ul className="h-5/6 w-full px-2">
                  {productsC.map((product) => (
                    <li
                      key={product.id}
                      className="flex py-6 bg-gray-100 p-4 mb-2 rounded-lg"
                    >
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={require(`./../../assets/LR_Swords/${product.imageUrl}`)}
                          alt={product.imageUrl}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href={product.href}> {product.name} </a>
                            </h3>
                            <p className="ml-4">${product.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.color}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">
                            Qty {product.quantity}
                          </p>

                          <div className="flex">
                            <Link to={`/item/${product.id}`}>
                              <button class="transition ease-in duration-300 bg-orange-700 hover:bg-orange-800 border hover:border-orange-800 border-orange-600 hover:text-white  hover:shadow-lg text-gray-100 rounded-full w-9 h-9 text-center p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="bg-white w-full h-16 border-t-2 border-orange-800 flex justify-center items-center">
            <div className="w-2/3 font-medium text-left text-2xl float-left">
              <p className="ml-10 h-full py-2"> <span className="font-normal text-base h-full pb-10">({cart.length} Items )</span> Total:</p>
            </div>
            <div className="w-2/3 font-medium text-right text-2xl float-right">
              <p className="mr-10 text-right">${total}</p>
            </div>
          </div>
          <div className="w-full bg-white flex h-24  bg-gradient-to-r from-slate-800 to-orange-300 bottom-0 pt-5">
            <div className="w-1/3 text-center">
              <a href="/">
                <button
                  className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-slate-800"              >
                  Buy more...
                </button>
              </a>
            </div>
            <div className="w-1/3 text-center">
              <Link to="/payment">
                <button onClick={OnChekout} className=" text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                  Checkout
                </button>
              </Link>
            </div>
            <div className="w-1/3 text-center">
              <button
                className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
                onClick={OnCleanCart}
              >
                Clean cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
