import React, { useState } from 'react';

export default function Auth() {

    const [name, setName] = useState('');
    const [errorName, setErrorName] = useState(null);

    function isValidName(name) {
        if (name === '') {
            return true;
        } else if (name.length < 3) {
            return false;
        } else {
            return true;
        }
    }

    const handleChangeName = event => {
        verifyLoginValid();
        if (!isValidName(event.target.value)) {
            setErrorName('Name is invalid');
        } else {
            setErrorName(null);
        }

        setName(event.target.value);
    };

    const [lastName, setLastName] = useState('');
    const [errorLastName, setErrorLastName] = useState(null);

    function isValidLastName(name) {
        if (name === '') {
            return true;
        }
        else if (name.length < 3) {
            return false;
        } else {
            return true;
        }
    }

    const handleChangeLastName = event => {
        verifyLoginValid();
        if (!isValidLastName(event.target.value)) {
            setErrorLastName('Last name is invalid');
        } else {
            setErrorLastName(null);
        }

        setLastName(event.target.value);
    };

    const [passwordCreated, setPasswordCreated] = useState('');

    const handleChangePasswordCreated = event => {
        verifyLoginValid();
        isValidPassword(password);
        setPasswordCreated(event.target.value);
    };

    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState(null);

    function isValidPassword(password) {
        if (password === passwordCreated) {
            return true;
        } else {
            return false;
        }
    }

    const handleChangePassword = event => {
        verifyLoginValid();

        setPassword(event.target.value);

        if (!isValidPassword(event.target.value)) {
            setErrorPassword('Passwords do not match');
        } else {
            setErrorPassword(null);
        }
    };

    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    function isValidEmail(email) {
        if (email === '') {
            return true;
        }
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange = event => {
        if (!isValidEmail(event.target.value)) {
            setError('Email is invalid');
        } else {
            setError(null);
        }

        setMessage(event.target.value);

        verifyLoginValid();
    };

    const initialState = true;
    const [disabled, setDisable] = useState(initialState);

    const verifyLoginValid = () => {
        var empty = message === null || message === '' || passwordCreated === null || passwordCreated === '' || name === null || name === '' || lastName === null || lastName === '' || password === null || password === '';
        var emptyError = error === null || errorLastName === null || errorName === null || errorPassword === null;

        if (!emptyError || empty) {
            setDisable(true);
        } else {
            setDisable(false);
        }
    }

    return (
        <>
            <div className="w-full h-screen flex justify-center items-center main">
                    <div className='login-responsive m-auto w-4/5 h-4/5 bg-white rounded-lg flex container-responsive justify-center items-center'>
                        <div className='font-medium text-2xl'>
                            Only available on desktop.
                        </div>
                    </div>
                <div className="m-auto w-4/5 h-4/5 bg-white rounded-lg flex container-normal">
                    <div className="w-2/5 text-center flex flex-col pt-6">
                        <div className="pt-10 px-20 h-2/6 rounded-lg">
                            <div className="title w-20 ">
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="bg-gradient-to-r from-slate-200 to-orange-200 px-6 pb-4 text-left rounded-lg login-div">
                                <hr />
                                <h2 className="text-center text-4xl font-bold mb-2 pt-3 pb-5">Sign in</h2>
                                <div className="grid mt-2 md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 mb-6 w-full group">
                                        <input type="text" value={name} onChange={handleChangeName} F id="firstName" className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required="" />
                                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-800 dark:text-gray-800 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                        {errorName && <h3 className='text-sm text-red-600'>{errorName}</h3>}
                                    </div>
                                    <div className="relative z-0 mb-6 w-full group">
                                        <input type="text" value={lastName} onChange={handleChangeLastName} name="floating_last_name" id="lastName" className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required="" />
                                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-800 dark:text-gray-800 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                        {errorLastName && <h3 className='text-sm text-red-600'>{errorLastName}</h3>}
                                    </div>
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <input id="email" name="message" value={message} onChange={handleChange} type="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required="" />
                                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-800 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                    {error && <h3 className='text-sm text-red-600'>{error}</h3>}
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <input value={passwordCreated} type="password" onChange={handleChangePasswordCreated} name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required="" />
                                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-800 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <input type="password" value={password} onChange={handleChangePassword} name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required="" />
                                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-800 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                                    {errorPassword && <h3 className='text-sm text-red-600'>{errorPassword}</h3>}
                                </div>
                                <div className="text-center">
                                    <button disabled={disabled} onClick={login}
                                        className={
                                            !disabled
                                                ? "m-auto text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                                                : "m-auto text-white bg-orange-500 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 opacity-50"
                                        }>Sign in</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/5 text-center justify-center rounded-r-lg items-center land"></div>
                </div>
            </div>
        </>
    );

    function login() {
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let email = document.getElementById("email").value;

        localStorage.setItem("name", firstName)
        localStorage.setItem("lastName", lastName)
        localStorage.setItem("email", email)

        document.location.reload(true);
    }
}