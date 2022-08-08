import React from "react";
import "./index.css";

const itemsLR = [
  {
    id: "1",
    name: "Lord Of The Rings Spear Of Eomer",
    imageUrl: "1.jfif",
    price: "$24.00",
    color: "Salmon",
    quantity: 1,
  },
  {
    id: "2",
    name: "Lord Of The Rings Sword Of Théodred",
    imageUrl: "2.jfif",
    price: "$24.00",
    color: "Salmon",
    quantity: 1,
  },
  {
    id: "3",
    name: "The Mace Of Sauron And Ring Red Eye Edition With War Banner",
    imageUrl: "3.jfif",
    price: "$24.00",
    color: "Salmon",
    quantity: 1,
  },
  {
    id: "4",
    name: "Lord Of The Rings Helm Of King Theoden",
    imageUrl: "4.jfif",
    price: "$24.00",
    color: "Salmon",
    quantity: 1,
  },
  {
    id: "5",
    name: "LOTR™ - STING™ The Sword Of Frodo Baggins With Wall Plaque",
    imageUrl: "5.jfif",
    price: "$24.00",
    color: "Salmon",
    quantity: 1,
  },
  {
    id: "6",
    name: "LOTR™ Officially Licensed Glamdring Sword Of Gandalf",
    imageUrl: "6.jfif",
    price: "$24.00",
    color: "Salmon",
    quantity: 1,
  },
  {
    id: "7",
    name: "Sword Of The Witch King",
    imageUrl: "7.jfif",
    price: "$24.00",
    color: "Salmon",
    quantity: 1,
  },
  {
    id: "8",
    name: "Sword Of Narsil",
    imageUrl: "8.jfif",
    price: "$24.00",
    color: "Salmon",
    quantity: 1,
  },
  {
    id: "9",
    name: "Lord Of The Rings Ringwraith Sword",
    imageUrl: "9.jfif",
    price: "$24.00",
    color: "Salmon",
    quantity: 1,
  },
  {
    id: "10",
    name: "Officially Licensed Hadhafang Sword Of Arwen Evenstar",
    imageUrl: "10.jfif",
    price: "$24.00",
    color: "Salmon",
    quantity: 1,
  },
  {
    id: "11",
    name: "The Lord Of The Rings Sword Of Strider",
    imageUrl: "11.jfif",
    price: "$24.00",
    color: "Salmon",
    quantity: 1,
  },
  {
    id: "12",
    name: "Sting Scabbard",
    imageUrl: "12.jfif",
    price: "$24.00",
    color: "Salmon",
    quantity: 1,
  },
];

function OnCleanCart() {
  localStorage.removeItem("cart");
  document.location.reload(true);
}

function OnRemove() {
  alert("remove");
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

    cart.forEach((element) => {
      var item = itemsLR.find((x) => x.id === element);
      productsC.push(item);
    });

    return (
      <div className="w-full flex justify-center items-center bg-gradient-to-r from-slate-400 to-orange-200 main-cart">
        <div className="flex h-4/5 flex-col overflow-y-scroll bg-white rounded-lg shadow-xl w-4/6 main-card">
          <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
            <h1 className="text-center text-3xl font-bold">Cart's items</h1>
            <div className="mt-8">
              <div className="flow-root">
                <ul className="bg-blue-200 h-5/6 w-full">
                  {productsC.map((product) => (
                    <li key={product.id} className="flex py-6">
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
                            <p className="ml-4">{product.price}</p>
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
                            <button
                              onClick={OnRemove}
                              type="button"
                              className="font-medium text-orange-600 hover:text-orange-800"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                  <hr />
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full bg-white flex h-16 bottom-0 pt-3">
            <div className="w-1/3 text-center">
              <button
                className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
                onClick={OnCleanCart}
              >
                Buy more...
              </button>
            </div>

            <div className="w-1/3 text-center">
              <button className=" text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                Checkout
              </button>
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
