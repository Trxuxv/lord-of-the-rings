import React, { useState } from "react";

export default function Profile() {
  const initialState = true;
  const [disabled, setItemCart] = useState(initialState);

  const user = {
    firstName: localStorage.getItem("name"),
    lastName: localStorage.getItem("lastName"),
    email: localStorage.getItem("email"),
    biography: localStorage.getItem("biography"),
    instagram: localStorage.getItem("instagram"),
    facebook: localStorage.getItem("facebook"),
    twitter: localStorage.getItem("twitter"),
    age: localStorage.getItem("age"),
  };

  const onCancel = () => {
    setItemCart(!disabled);
    document.location.reload(true);
  };

  const onEdit = () => {
    if (disabled === false) {
      let firstName = document.getElementById("firstName");
      let lastName = document.getElementById("lastName");
      let email = document.getElementById("email");
      let biography = document.getElementById("biography");
      let instagram = document.getElementById("instagram");
      let facebook = document.getElementById("facebook");
      let twitter = document.getElementById("twitter");
      let age = document.getElementById("age");

      if (firstName.value === "") {
        firstName.style.border = "1.5px solid red";
      } else if (lastName.value === "") {
        lastName.style.border = "1.5px solid red";
      } else if (email.value === "") {
        email.style.border = "1.5px solid red";
      } else {
        localStorage.setItem("name", firstName.value);
        localStorage.setItem("lastName", lastName.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("biography", biography.value);
        localStorage.setItem("instagram", instagram.value);
        localStorage.setItem("facebook", facebook.value);
        localStorage.setItem("twitter", twitter.value);
        localStorage.setItem("age", age.value);
        document.location.reload(true);
        setItemCart(!disabled);
      }
    } else {
      setItemCart(!disabled);
    }
  };

  return (
    <div class="w-full relative mt-0 shadow-2xl rounded my-0 overflow-hidden">
      <div class="top h-64 w-full bg-blue-600 overflow-hidden relative">
        <img
          src="https://wallpaperaccess.com/full/838293.jpg"
          alt=""
          class="bg w-full h-full object-cover object-center absolute z-0"
        />
        <div class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
          <img
            src="https://upload.wikimedia.org/wikipedia/tr/6/6b/Gandalf.jpg"
            class="h-24 w-24 object-cover rounded-full"
            alt="profile_pic"
          />
          <h1 class="text-2xl font-semibold">
            {user.firstName} {user.lastName}{" "}
          </h1>
          <h4 class="text-sm font-semibold">{user.age} years</h4>
        </div>
      </div>
      <div class="grid grid-cols-12 bg-white ">
        <div class="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">
          <a
            href="##"
            class="text-sm p-2 bg-orange-900 text-white text-center rounded font-bold"
          >
            Basic Information
          </a>
          <a
            href="##"
            class="text-sm p-2 bg-slate-800 text-white text-center rounded font-bold"
          >
            Purchases
          </a>
        </div>

        <div class="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 bg-gradient-to-r from-slate-400 to-orange-300 md:col-span-10">
          <div class="px-4 pt-4">
            <form action="#" class="flex flex-col space-y-8 ">
              <div>
                <h3 class="float-left text-left text-2xl font-semibold">
                  Basic Information
                </h3>
                <div
                  className={
                    !disabled
                      ? "bg-slate-400 ml-2 text-white rounded-full p-2 float-right text-right"
                      : "hidden"
                  }
                  onClick={onCancel}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div
                  className={
                    !disabled
                      ? "bg-orange-900 text-white rounded-full p-2 float-right text-right"
                      : "hidden"
                  }
                  onClick={onEdit}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div
                  className={
                    disabled
                      ? "bg-orange-900 text-white rounded-full p-2 float-right text-right"
                      : "hidden"
                  }
                  onClick={onEdit}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
                <hr />
              </div>

              <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                <div class="form-item w-full">
                  <label class="text-base ">First name</label>
                  <input
                    id="firstName"
                    placeholder={user.firstName}
                    type="text"
                    required
                    className={
                      disabled
                        ? "w-full l pt-3 pb-2 appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                        : "w-full pt-3 pb-2 text-gray-700 font-bold rounded shadow  px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                    }
                    disabled={disabled}
                  />
                </div>

                <div class="form-item w-full">
                  <label class="text-base ">Last name</label>
                  <input
                    id="lastName"
                    placeholder={user.lastName}
                    type="text"
                    className={
                      disabled
                        ? "w-full l pt-3 pb-2 appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                        : "w-full pt-3 pb-2 text-gray-700 font-bold rounded shadow px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                    }
                    disabled={disabled}
                  />
                </div>

                <div class="form-item w-full">
                  <label class="text-base ">Age</label>
                  <input
                    id="age"
                    placeholder={user.age}
                    type="text"
                    className={
                      disabled
                        ? "w-full l pt-3 pb-2 appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                        : "w-full pt-3 pb-2 text-gray-700 font-bold rounded shadow px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                    }
                    disabled={disabled}
                  />
                </div>
              </div>

              <div class="form-item">
                <label class="text-base ">Email</label>
                <input
                  id="email"
                  type="text"
                  placeholder={user.email}
                  className={
                    disabled
                      ? "w-full pt-3 pb-2 appearance-none text-black text-opacity-50 rounded shadow px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                      : "w-full pt-3 pb-2 text-gray-700 font-bold rounded shadow  px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                  }
                  disabled={disabled}
                />
              </div>

              <div>
                <h3 class="text-2xl font-semibold ">More About Me</h3>
                <hr />
              </div>

              <div class="form-item w-full">
                <label class="text-base">Biography</label>
                <textarea
                  cols="30"
                  id="biography"
                  rows="10"
                  class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                  disabled={disabled}
                >
                    {user.biography}
                </textarea>
              </div>

              <div>
                <h3 class="text-2xl font-semibold">My Social Media</h3>
                <hr />
              </div>

              <div class="form-item">
                <label class="text-xl ">Instagram</label>
                <input
                  id="instagram"
                  type="text"
                  placeholder={user.instagram}
                  class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                  disabled={disabled}
                />
              </div>
              <div class="form-item">
                <label class="text-xl ">Facebook</label>
                <input
                  id="facebook"
                  type="text"
                  placeholder={user.facebook}
                  class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                  disabled={disabled}
                />
              </div>
              <div class="form-item">
                <label class="text-xl ">Twitter</label>
                <input
                  id="twitter"
                  type="text"
                  placeholder={user.twitter}
                  class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  "
                  disabled={disabled}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
