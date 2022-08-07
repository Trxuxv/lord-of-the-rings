import { useState } from 'react';
import React from 'react';
import './index.css';

export default function Home() {

    const initialState = [];

    const [cart, setEmployees] = useState(initialState);

    const addObjectToArray = obj => {
        var name = itemsLR.find(x => x.id === obj).name;
        alert("item " + name + " added")
        console.log(cart)
        setEmployees(current => [...current, obj]);
    };

    return (
        <div className='w-full h-screen'>
            <nav className='bg-gradient-to-r from-gray-900 via-slate-700 to-slate-500 w-full h-16 flex justify-center items-center'>
                <div className='w-1/6 float-left logo h-10 ml-4'></div>
                <div className='w-2/6 '></div>
                <div className='w-1/6 '></div>
                <div className='w-1/6 '></div>
                {movies.map(movie => {
                    return <div className='w-1/6'>{movie.name}</div>
                })}
                <div>
                    <div className='text-white text-xs w-4 flex justify-center items-center h-4 font-bold bg-red-600 rounded-full'>{cart.length}</div>
                    <svg aria-hidden="true" className="mr-2 -ml-1 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                </div>
                <div className='w-1/6 '>{name}</div>
                <div className='w-1/6 ' onClick={logout}>Logout</div>
            </nav>
            <div className='w-full h-10 bg-slate-200 flex justify-center items-center'>
                {categories.map(movie => {
                    return <div className='w-1/6 text-center' key={`movie-${movie.id}`}>{movie.name}</div>
                })}
            </div>
            <div className='w-full h-5/6'>
                <div className='w-full grid grid-cols-5'>
                    {itemsLR.map(item => (
                        <div className="card bg-gradient-to-r from-slate-400 to-orange-300 m-5 p-4 text-center">
                            <img className='rounded-lg ' src={require(`./../../assets/LR_Swords/${item.imageUrl}`)} alt={item.imageUrl} />
                            <div className="m-2 text-center h-14">{item.name}</div>
                            <button onClick={() =>
                                addObjectToArray(item.id)
                            } type="button" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                                <svg aria-hidden="true" className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                                Add to card
                            </button>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

var name = localStorage.getItem("name")

function logout() {
    localStorage.clear()
    document.location.reload(true);
}

var movies = [
    {
        name: "vamos la",
        id: 1
    },
    {
        id: 2,
        name: "vamos la 2",
    }
];

var categories = [
    {
        id: 1,
        name: "Swords",
    },
    {
        id: 2,
        name: "categoria 2",
    },
    {
        id: 3,
        name: "categoria 3",
    },
    {
        id: 4,
        name: "categoria 4",
    },
    {
        id: 5,
        name: "categoria 5",
    },
    {
        id: 6,
        name: "categoria 6",
    }
];

var itemsLR = [
    {
        id: 1,
        name: "Lord Of The Rings Spear Of Eomer",
        imageUrl: "1.jfif"
    },
    {
        id: 2,
        name: "Lord Of The Rings Sword Of Théodred",
        imageUrl: "2.jfif"
    },
    {
        id: 3,
        name: "The Mace Of Sauron And Ring Red Eye Edition With War Banner",
        imageUrl: "3.jfif"
    },
    {
        id: 4,
        name: "Lord Of The Rings Helm Of King Theoden",
        imageUrl: "4.jfif"
    },
    {
        id: 5,
        name: "LOTR™ - STING™ The Sword Of Frodo Baggins With Wall Plaque",
        imageUrl: "5.jfif"
    },
    {
        id: 6,
        name: "LOTR™ Officially Licensed Glamdring Sword Of Gandalf",
        imageUrl: "6.jfif"
    },
    {
        id: 7,
        name: "Sword Of The Witch King",
        imageUrl: "7.jfif"
    },
    {
        id: 8,
        name: "Sword Of Narsil",
        imageUrl: "8.jfif"
    },
    {
        id: 9,
        name: "Lord Of The Rings Ringwraith Sword",
        imageUrl: "3.jfif"
    }, {
        id: 10,
        name: "The Mace Of Sauron And Ring Red Eye Edition With War Banner",
        imageUrl: "3.jfif"
    },
    {
        id: 11,
        name: "The Mace Of Sauron And Ring Red Eye Edition With War Banner",
        imageUrl: "3.jfif"
    },

]
