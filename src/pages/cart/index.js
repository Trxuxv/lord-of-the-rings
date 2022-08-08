import React from "react";

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

function cleanCart() {
  localStorage.removeItem("cart");
}

export default function Cart() {
  const cart = localStorage.getItem("cart").split(",");
  let productsC = [];

  cart.forEach((element) => {
    console.log(element);

    var item = itemsLR.find((x) => x.id === element);
    console.log("item", item);

    productsC.push(item);
  });

  return (
    <div className="w-full flex justify-center items-center h-5/6">
      <div className="flex h-5/6 flex-col overflow-y-scroll bg-white shadow-xl w-5/6">
        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
          <div className="mt-8">
            <div className="flow-root">
              <ul>
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
                        <p className="text-gray-500">Qty {product.quantity}</p>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
                <hr />
                <div className="w-full h-20 text-center flex justify-center items-center">
                  <button
                    className="w-2/5 h-3/6 bg-red-900 rounded-lg"
                    onClick={cleanCart}
                  >
                    Clean cart
                  </button>
                  <button className="w-2/5 h-3/6 bg-red-100 rounded-lg">
                    Checkout
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
