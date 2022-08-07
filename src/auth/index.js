export default function Auth() {

    return (
        <>
            <div className="w-full h-screen flex justify-center items-center main">
                <div className="m-auto w-4/5 h-4/5 bg-white rounded-lg flex container">
                    <div className="w-2/5 text-center flex flex-col pt-6">
                        <div className="pt-10 px-20 h-2/6  rounded-lg">
                            <div className="title w-20 ">
                            </div>
                        </div>
                        <div className="p-6">
                            <form className="bg-gradient-to-r from-slate-200 to-orange-200 px-6 pb-4 text-left rounded-lg">
                                <h2 className="text-center text-4xl font-bold mb-2 pt-3 pb-5">Sign up</h2>
                                <hr/>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 mb-6 w-full group">
                                        <input type="text" name="floating_first_name" id="firstName" className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required="" />
                                        <label htmlhtmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-800 dark:text-gray-800 duration-300 transhtmlhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                    </div>
                                    <div className="relative z-0 mb-6 w-full group">
                                        <input type="text" name="floating_last_name" id="lastName" className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required="" />
                                        <label htmlhtmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-800 dark:text-gray-800 duration-300 transhtmlhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                    </div>
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <input type="email" name="floating_email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required="" />
                                    <label htmlhtmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-800 duration-300 transhtmlhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required="" />
                                    <label htmlhtmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-800 duration-300 transhtmlhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required="" />
                                    <label htmlhtmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-800 duration-300 transhtmlhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                                </div>
                                <div className="text-center">
                                    <button onClick={teste} className="m-auto text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-3/5 text-center justify-center rounded-r-lg items-center land"></div>
                </div>
            </div>
        </>
    );

    function teste() {
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let email = document.getElementById("email").value;

        localStorage.setItem("name", firstName)
        localStorage.setItem("lastName", lastName)
        localStorage.setItem("email", email)

        document.location.reload(true);
    }


}