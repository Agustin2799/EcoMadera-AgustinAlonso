import React from "react";
import { Link } from "react-router-dom";

const HomeTitle = ({ title }) => {
  return (
    <section className="bg-[url('https://images6.alphacoders.com/371/thumb-1920-371656.jpg')] bg-cover bg-top h-screen">
      <div className="flex items-center justify-start h-full px-5 md:px-20 pb-52">
        <div className="flex flex-col">
          <h1 className="text-white text-3xl md:text-5xl font-semibold mb-4">
            {title}
          </h1>
          <div>
            <div>
              <div className="relative group mt-4 w-min">
                <Link to="/all-products">
                  <button className="relative inline-block p-[2px] text-lg font-semibold leading-6 text-white bg-amber-800 shadow-2xl cursor-pointer rounded-2xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[3px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                    <span className="relative z-10 block px-8 py-5 rounded-2xl bg-slate-800">
                      <div className="relative z-10 flex items-center space-x-3">
                        <span className="text-xl transition-all duration-500 group-hover:translate-x-1 truncate">
                          Nuestros productos
                        </span>
                        <svg
                          className="w-8 h-8 transition-transform duration-500 group-hover:translate-x-1"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clipRule="evenodd"
                            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTitle;
