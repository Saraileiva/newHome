import React from 'react'

  import { PiDogFill } from "react-icons/pi";
  import { GiDogBowl } from "react-icons/gi";
  import { LuPencilLine } from "react-icons/lu";
  import { FaShieldDog } from "react-icons/fa6";





function AddPubli() {
    return (



        <div className="min-h-screen  max-h-screen flex flex-col items-center justify-center p-4 " >
          <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
            <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
              Reliza una nueva <span className="text-orange-200">publicacion</span>
            </h1>
            <form className="mb-8">

              <div className="relative mb-4">
                <LuPencilLine className="absolute top-1/2 -translate-y-1/2 left-2" />
                <input
                  type="text"
                  className="py-3 pl-8 pr-4 border-l-orange-200 w-full outline-none rounded-lg"
                  placeholder="Titulo"
                />
              </div>
              <div className="relative mb-4">
                <PiDogFill className="absolute top-1/2 -translate-y-1/2 left-2 " />
                <input
                  type="text"
                  className="py-3 pl-8 pr-4 border-l-orange- w-full outline-none rounded-lg"
                  placeholder="Descripcion"
                />
              </div>

              <div className="relative mb-4">
                <GiDogBowl className="absolute top-1/2 -translate-y-1/2 left-2 " />
                <input
                  type="text"
                  className="py-3 pl-8 pr-4 border-l-orange-100 w-full outline-none rounded-lg"
                  placeholder="Raza"
                />
              </div>
              <div className="relative mb-4">
                <FaShieldDog className="absolute top-1/2 -translate-y-1/2 left-2 " />
                <input
                  type="text"
                  className="py-3 pl-8 pr-4 border-l-orange-100 w-full outline-none rounded-lg"
                  placeholder="Edad"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className=" bg-cyan-900 text-white uppercase font-bold text-sm w-full py-3 px-4 rounded-lg"
                >
                  Publicar
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    };




export default AddPubli
