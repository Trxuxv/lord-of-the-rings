import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Product from "./../products/index";
import Profile from "./../profile/index";
import Done from "../payment/done";
import Cart from "./../cart/index";
import { useState } from "react";
import Payment from "../payment";
import Item from "../items";
import React from "react";
import "./index.css";

export default function Home() {
  const initialState = [];
  const [cart, setItemCart] = useState(initialState);

  if (localStorage.getItem("cart") === null) {
    console.log("cart is empty");
  } else {
    // setItemCart(localStorage.getItem("cart").split());
  }

  const OnAddToCart = (obj) => {
    var name = itemsLR.find((x) => x.id === obj).name;
    var message = name + " added to cart!";
    setItemCart((current) => [...current, obj]);
    localStorage.setItem("cart", cart);

    var snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    setTimeout(function () {
      snackbar.className = snackbar.className.replace("show", "");
    }, 3000);

    snackbar.innerHTML = message;
  };

  function logout() {
    localStorage.clear();
    document.location.reload(true);
  }

  function saveCart() {
    console.log(localStorage.getItem("cart"));
    if (cart.length === 0) {
      localStorage.setItem("cart", null);
    } else {
      localStorage.setItem("cart", cart);
    }
  }

  const Content = () => (
    <div className="w-full h-5/6">
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
            <a
              href="https://en.wikipedia.org/wiki/The_History_of_The_Lord_of_the_Rings#:~:text=The%20History%20of%20The%20Lord%20of%20the%20Rings%20is%20a,earth%20(%22HoME%22)"
              target={"blank"}
            >
              <button className="rounded-full border-2 border-black bg-black text-white py-2 px-5 text-2x1 mr-6 hover:bg-white hover:text-black">
                Check the history
              </button>
            </a>
            <a
              href="https://www.pocket-lint.com/tv/news/155647-lord-of-the-rings-the-hobbit-best-movie-order"
              target={"blank"}
            >
              <button className="rounded-full border-2 border-black bg-white text-black py-2 px-5 text-2x1 hover:bg-orange-900 hover:text-white hover:border-orange-900">
                Movies in order{" "}
              </button>
            </a>
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
            Check the main items of{" "}
            <b className="text-5xl font-bold text-orange-900">
              Lord of the Rings
            </b>
          </h1>
          <div className="w-full grid grid-cols-4 gap-9">
            {itemsLR.map((item) => (
              <div >
                <div >
                  <div>
                    <div class="max-w-md w-full bg-slate-50 shadow-lg rounded-xl p-6">
                      <div class="flex flex-col">
                        <div class="">
                          <div class="relative h-62 w-full mb-3 mr-2">
                            <div class="absolute flex flex-col top-0 right-0 p-3">
                              <button class="transition ease-in duration-300 bg-white hover:text-orange-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg></button>
                            </div>
                            <img src={require(`./../../assets/LR_Swords/${item.imageUrl}`)} alt={item.imageUrl} class=" w-full object-fill border border-gray-300 rounded-2xl" />
                          </div>
                          <div class="flex-auto justify-evenly">
                            <div class="flex flex-wrap ">
                              <div class="w-full flex-none text-sm flex items-center text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-600 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span class="text-gray-400 whitespace-nowrap mr-3">{item.star}</span><span class="mr-2 text-gray-400"></span>
                              </div>
                              <div class="flex items-center w-full justify-between min-w-0 h-16">
                                <Link to={`item/${item.id}`}><h2 class="text-base mr-auto cursor-pointer whitespace-normal break-words text-gray-800 font-medium hover:text-orange-800 truncate ">{item.name}</h2></Link>
                              </div>
                            </div>
                            <div class="text-xl text-black font-semibold mt-2 mb-4 ml-2">${item.price}</div>
                            <div class="flex space-x-2 text-sm font-medium justify-start">
                              <button onClick={() => OnAddToCart(item.id)} class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-orange-800 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-lg hover:bg-orange-800 ">
                                <span>Add Cart</span>
                              </button>
                              <Link to={`item/${item.id}`}>
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-white text-center">
        <div className="px-6 pt-10">
          <form action="">
            <div className="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
              <div className="md:ml-auto md:mb-6">
                <p className="text-gray-800">
                  <strong>Sign up for more websites like this</strong>
                </p>
              </div>

              <div className="md:mb-6">
                <input
                  type="text"
                  className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none
            "
                  id="exampleFormControlInput1"
                  placeholder="Email address"
                />
              </div>

              <div className="md:mr-auto mb-6">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-yellow-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="text-center text-gray-700 p-4">
          © 2022 Copyright:
          <a className="text-gray-800" href="https://tailwind-elements.com/">
            Débora Ferreira <i>@Dev</i>
          </a>
        </div>
      </footer>
    </div>
  );

  return (
    <BrowserRouter>
      <div className="w-full h-screen overflow-x-hidden">
        <div id="snackbar" className="rounded-lg bg-red-200"></div>
        {/* Menu */}
        <div className="bg-white w-full h-16">
          <nav className="w-full h-16 flex justify-center items-center cursor-pointer shadow-2xl ">
            <div className="w-full h-full flex justify-center items-center cursor-pointer bg-gradient-to-r from-slate-600 to-orange-200  rounded-r-full ">
              <Link className="w-1/6 float-left logo h-10 ml-2" to="/">
                {" "}
              </Link>
              <div className="w-2/6 h-full"> </div>
              <div className="w-1/6 "></div>
              <div className="w-1/6 "></div>
            </div>

            <div className="w-full h-16 w-3/6 flex justify-center items-center cursor-pointer bg-white rounded-r-full"></div>

            {menu.map((m) => {
              return (
                <Link
                  to={`${m.link}`}
                  className="w-1/6 bg-white font-bold text-slate-600 h-full flex items-center justify-center text-center hover:bg-gray-100"
                >
                  {m.name}
                </Link>
              );
            })}
            <Link
              onClick={saveCart}
              to="cart"
              className={
                cart.length === 0
                  ? "w-1/6 font-bold bg-white text-slate-600 h-full flex items-center justify-center text-center hover:bg-gray-100 pointer-events-none"
                  : "w-1/6 font-bold bg-white text-slate-600 h-full flex items-center justify-center text-center hover:bg-gray-100"
              }
            >
              Cart
              <div className="w-10 h-6 ml-2 mt-2 ">
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
            </Link>
            <div
              onClick={logout}
              className="w-1/6 font-bold text-slate-600 bg-white h-full flex items-center justify-center text-center hover:bg-gray-100"
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
        </div>
        {/* <div
          className="w-full h-10 flex justify-center items-center  cursor-pointer"
          style={{ background: "rgb(230 227 216)" }}
          >
          <div className="w-1/6 text-center"></div>
          <div className="w-1/6 text-center"></div>
          <div className="w-1/6 text-center"></div>
          {categories.map((movie) => {
            return (
              <div className="w-1/6 text-center h-full flex justify-center items-center rounded-b-lg mr-1 hover:bg-amber-50">
                {movie.name}
              </div>
            );
          })}
          <div className="w-1/6 text-center"></div>
          <div className="w-1/6 text-center"></div>
          <div className="w-1/6 text-center"></div>
        </div> */}

        {/* Content */}
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="cart" element={<Cart />} />
          <Route path="item/:id" element={<Item />} />
          <Route path="profile" element={<Profile />} />
          <Route path="product" element={<Product />} />
          <Route path="done" element={<Done />} />
          <Route path="payment" element={<Payment />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

var menu = [
  {
    id: 1,
    name: "Home",
    link: "",
  },
  {
    id: 2,
    name: "Profile",
    link: "profile",
  },
];

// var categories = [
//   {
//     id: 1,
//     name: "Swords",
//   },
//   {
//     id: 2,
//     name: "Potions",
//   },
//   {
//     id: 3,
//     name: "Books",
//   },
//   {
//     id: 4,
//     name: "Cities",
//   },
// ];

var itemsLR = [
  {
    id: "1",
    name: "Lord Of The Rings Spear Of Eomer",
    imageUrl: "1.jfif",
    price: 98.22,
    color: "Salmon",
    quantity: 1,
    star: 4.5
  },
  {
    id: "2",
    name: "Lord Of The Rings Sword Of Théodred",
    imageUrl: "2.jfif",
    price: 104.02,
    color: "Salmon",
    quantity: 1,
    star: 4.5
  },
  {
    id: "3",
    name: "The Mace Of Sauron And Ring Red Eye Edition With War Banner",
    imageUrl: "3.jfif",
    price: 63.77,
    color: "Salmon",
    quantity: 1,
    star: 4.5
  },
  {
    id: "4",
    name: "Lord Of The Rings Helm Of King Theoden",
    imageUrl: "4.jfif",
    price: 274.02,
    color: "Salmon",
    quantity: 1,
    star: 4.5
  },
  {
    id: "5",
    name: "LOTR™ - STING™ The Sword Of Frodo Baggins With Wall Plaque",
    imageUrl: "5.jfif",
    price: 78.50,
    color: "Salmon",
    quantity: 1,
    star: 4.5
  },
  {
    id: "6",
    name: "LOTR™ Officially Licensed Glamdring Sword Of Gandalf",
    imageUrl: "6.jfif",
    price: 85.20,
    color: "Salmon",
    quantity: 1,
    star: 4.5
  },
  {
    id: "7",
    name: "Sword Of The Witch King",
    imageUrl: "7.jfif",
    price: 91.60,
    color: "Salmon",
    quantity: 1,
    star: 4.5
  },
  {
    id: "8",
    name: "Sword Of Narsil",
    imageUrl: "8.jfif",
    price: 47.18,
    color: "Salmon",
    quantity: 1,
    star: 4.5
  },
  {
    id: "9",
    name: "Lord Of The Rings Ringwraith Sword",
    imageUrl: "9.jfif",
    price: 24.01,
    color: "Salmon",
    quantity: 1,
    star: 4.5
  },
  {
    id: "10",
    name: "Officially Licensed Hadhafang Sword Of Arwen Evenstar",
    imageUrl: "10.jfif",
    price: 99.90,
    color: "Salmon",
    quantity: 1,
    star: 4.5
  },
  {
    id: "11",
    name: "The Lord Of The Rings Sword Of Strider",
    imageUrl: "11.jfif",
    price: 214.02,
    color: "Salmon",
    quantity: 1,
    star: 4.5
  },
  {
    id: "12",
    name: "Sting Scabbard",
    imageUrl: "12.jfif",
    price: 324.02,
    color: "Salmon",
    quantity: 1,
    star: 4.5
  },
];
