import { useState } from "react";
import React from "react";
import "./index.css";

export default function Home() {
  const initialState = [];
  const [cart, setEmployees] = useState(initialState);

  const addObjectToArray = (obj) => {
    var name = itemsLR.find((x) => x.id === obj).name;
    var message = "Item " + name + " added";

    setEmployees((current) => [...current, obj]);

    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);

    x.innerHTML = message;
  };

  return (
    <div className="w-full h-screen overflow-x-hidden">
      <div id="snackbar" className="rounded-lg bg-red-200"></div>
      <nav className="w-full h-16 flex justify-center items-center cursor-pointer">
        <div className="w-1/6 float-left logo h-10 ml-4"></div>
        <div className="w-2/6 "></div>
        <div className="w-1/6 "></div>
        <div className="w-1/6 "></div>
        {menu.map((m) => {
          return (
            <div className="w-1/6 font-bold text-slate-600  text-center">
              {m.name}
            </div>
          );
        })}
        <div className="w-1/6 font-bold text-slate-600 text-center">
          Profile
        </div>
        <div className="w-1/6 font-bold text-slate-600 flex justify-center items-center text-center">
          Cart
          <div className="w-10 h-6 ml-2 mt-2">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-slate-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
            <div className="cart-icon mb-6 text-white text-xs w-4 flex justify-center items-center h-4 font-bold bg-red-600 rounded-full">
              {cart.length}
            </div>
          </div>
        </div>
        <div
          onClick={logout}
          className="w-1/6 font-bold text-slate-600 flex justify-center items-center  text-center"
        >
          Logout
          <div className="w-10 h-6 ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </div>
        </div>
      </nav>
      <div
        className="w-full h-10 flex justify-center items-center  cursor-pointer"
        style={{ background: "rgb(230 227 216)" }}
      >
        <div className="w-1/6 text-center"></div>
        <div className="w-1/6 text-center"></div>
        <div className="w-1/6 text-center"></div>
        {categories.map((movie) => {
          return (
            <div className="w-1/6 text-center h-full flex justify-center items-center rounded-b-lg mr-1">
              {movie.name}
            </div>
          );
        })}
        <div className="w-1/6 text-center"></div>
        <div className="w-1/6 text-center"></div>
        <div className="w-1/6 text-center"></div>
      </div>
      <div className="w-full h-4/6 text-center flex justify-center items-center">
        <div className="w-2/3">
          <h1 className="text-6xl font-bold">
            Lord of the <b className="font-bold text-orange-900"> Rings</b>{" "}
            <br />
            <span className="text-5xl">All the items and features </span>
            <br />
            <span className="text-5xl">of the saga</span>
          </h1>
          <p className="w-4/6 m-auto my-6">
            The Lord of the Rings is an epic high-fantasy novel by English
            author and scholar J. R. R. Tolkien. Set in Middle-earth, intended
            to be Earth at some time in the distant past, the story began as a
            sequel to Tolkien's 1937 children's book The Hobbit, but eventually
            developed into a much larger work.
          </p>
          <div>
            <button className="rounded-full border-2 border-black bg-black text-white py-2 px-5 text-2x1 mr-6">
              Check the history
            </button>
            <button className="rounded-full border-2 border-black bg-white text-black py-2 px-5 text-2x1">
              Movies in order{" "}
            </button>
            <button></button>
          </div>
        </div>
        <div className="w-3/5 bg-orange-900 h-full back-promo">
          <div className="back-promo-wal w-5/6 h-full"></div>
        </div>
      </div>
      <div className="w-full h-auto back-prod py-10 bg-gradient-to-r from-slate-400 to-orange-200">
        <div className="products">
          <h1 className="text-5xl text-center py-10 font-bold">
            Check the main products of{" "}
            <b className="text-5xl font-bold text-orange-900">
              Lord of the Rings
            </b>
          </h1>
          <div className="w-full grid grid-cols-4">
            {itemsLR.map((item) => (
              <div className="card bg-white m-6 p-6 text-center rounded-lg">
                <img
                  className="rounded-lg border-2 border-slate-300"
                  src={require(`./../../assets/LR_Swords/${item.imageUrl}`)}
                  alt={item.imageUrl}
                />
                <div className="m-2 text-center h-14">{item.name}</div>
                <button
                  onClick={() => addObjectToArray(item.id)}
                  type="button"
                  className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  <svg
                    aria-hidden="true"
                    className="mr-2 -ml-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  </svg>
                  Add to card
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-black h-2/5"></div>
    </div>
  );
}

var name = localStorage.getItem("name");

function logout() {
  localStorage.clear();
  document.location.reload(true);
}

var menu = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Items",
  },
];

var categories = [
  {
    id: 1,
    name: "Swords",
  },
  {
    id: 2,
    name: "Potions",
  },
  {
    id: 3,
    name: "Books",
  },
  {
    id: 4,
    name: "Cities",
  },
];

var itemsLR = [
  {
    id: 1,
    name: "Lord Of The Rings Spear Of Eomer",
    imageUrl: "1.jfif",
  },
  {
    id: 2,
    name: "Lord Of The Rings Sword Of Théodred",
    imageUrl: "2.jfif",
  },
  {
    id: 3,
    name: "The Mace Of Sauron And Ring Red Eye Edition With War Banner",
    imageUrl: "3.jfif",
  },
  {
    id: 4,
    name: "Lord Of The Rings Helm Of King Theoden",
    imageUrl: "4.jfif",
  },
  {
    id: 5,
    name: "LOTR™ - STING™ The Sword Of Frodo Baggins With Wall Plaque",
    imageUrl: "5.jfif",
  },
  {
    id: 6,
    name: "LOTR™ Officially Licensed Glamdring Sword Of Gandalf",
    imageUrl: "6.jfif",
  },
  {
    id: 7,
    name: "Sword Of The Witch King",
    imageUrl: "7.jfif",
  },
  {
    id: 8,
    name: "Sword Of Narsil",
    imageUrl: "8.jfif",
  },
  {
    id: 9,
    name: "Lord Of The Rings Ringwraith Sword",
    imageUrl: "9.jfif",
  },
  {
    id: 10,
    name: "The Lord Of The Rings: Officially Licensed Hadhafang Sword Of Arwen Evenstar With Display Stand",
    imageUrl: "10.jfif",
  },
  {
    id: 11,
    name: "The Lord Of The Rings Sword Of Strider",
    imageUrl: "11.jfif",
  },
  {
    id: 12,
    name: "Sting Scabbard",
    imageUrl: "12.jfif",
  },
];
