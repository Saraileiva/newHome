import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  RiMailLine,
  RiUserLine,
} from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const EditarPerfil = () => {
  return (



    <div className="min-h-screen  max-h-screen flex flex-col items-center justify-center p-4 " >
      <h2 className="p-10 text-3xl tracking-[10px] font-bold rounded-xl shadow-2xl w-auto lg:w-[450px] mb-20 text-center"> Bienvenido a la configuracion de tu perfil
</h2>
      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
          Actualiza tu <span className="text-orange-200">informacion</span>
        </h1>
        <form className="mb-8">

          <div className="relative mb-4">
            <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2" />
            <input
              type="text"
              className="py-3 pl-8 pr-4 border-l-orange-200 w-full outline-none rounded-lg"
              placeholder="Nombre"
            />
          </div>
          <div className="relative mb-4">
            <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2 " />
            <input
              type="text"
              className="py-3 pl-8 pr-4 border-l-orange- w-full outline-none rounded-lg"
              placeholder="Apellidos"
            />
          </div>
          <div className="relative mb-4">
            <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 " />
            <input
              type="email"
              className="py-3 pl-8 pr-4 border-l-orange-100 w-full outline-none rounded-lg"
              placeholder="Correo electrónico"
            />
          </div>
          <div className="relative mb-4">
            <FaHome className="absolute top-1/2 -translate-y-1/2 left-2 " />
            <input
              type="text"
              className="py-3 pl-8 pr-4 border-l-orange-100 w-full outline-none rounded-lg"
              placeholder="Direccion"
            />
          </div>
          <div className="relative mb-4">
            <ImProfile className="absolute top-1/2 -translate-y-1/2 left-2 " />
            <input
              type="text"
              className="py-3 pl-8 pr-4 border-l-orange-100 w-full outline-none rounded-lg"
              placeholder="Ocupacion"
            />
          </div>
          <div>
            <button
              type="submit"
              className=" bg-cyan-900 text-white uppercase font-bold text-sm w-full py-3 px-4 rounded-lg"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default EditarPerfil
