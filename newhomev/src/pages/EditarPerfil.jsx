import React, { useState, useEffect } from "react";
import {
  RiMailLine,
  RiUserLine,
} from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { RiContactsBook2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import axios from 'axios'
import authService from './../../authService';

const EditarPerfil = () => {
  const [first_name, setName] = useState('')
  const [last_name, setApellido] = useState('')
  const [country, setCountry] = useState('')
  const [address, setAddress] = useState('')
  const [cel_extension, setCelExtension] = useState('')
  const [cel_number, setCelNumber] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    if([first_name, last_name, country, address, cel_extension, cel_number].includes('')){
        swal({
            title: "Hay campos vacíos",
            icon: "error",
            button: "Aceptar"
        });
        return
    }
    // crear usuario en la API
    try {
        const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/editProfile`,
        {first_name, last_name, country, address, cel_extension, cel_number})

        console.log(data)
        console.log('Datos ingresados')

        swal({
            title: "¡Se ha creado exitosamente su cuenta!",
            icon: "success",
            button: "Aceptar"
        })

        setName('')
        setApellido('')
        setCountry('')
        setAddress('')
        setCelExtension()
        setCelNumber()

    } catch (error) {
        console.log(error)
    }
};

useEffect(() => {
  // Aquí deberías obtener el token de tu sistema de autenticación
  console.log(localStorage.getItem('token'))

  const token = localStorage.getItem('token');
  authService.setAuthToken(token);
}, []);


  return (



    <div className="min-h-screen  max-h-screen flex flex-col items-center justify-center p-4 " >
      <h2 className="p-10 text-3xl tracking-[10px] font-bold rounded-xl shadow-2xl w-auto lg:w-[450px] mb-20 text-center"> Bienvenido a la configuracion de tu perfil
</h2>
      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
          Actualiza tu <span className="text-orange-200">informacion</span>
        </h1>
        <form onSubmit={handleSubmit} 
        className="mb-8">

          <div className="relative mb-4">
            <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2" />
            <input
              type="text"
              className="py-3 pl-8 pr-4 border-l-orange-200 w-full outline-none rounded-lg"
              placeholder="Nombre"
              value={first_name}
              onChange={e => setName(e.target.value)}
      
            />
          </div>
          <div className="relative mb-4">
            <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2 " />
            <input
              type="text"
              className="py-3 pl-8 pr-4 border-l-orange- w-full outline-none rounded-lg"
              placeholder="Apellidos"
              value={last_name}
              onChange={e => setApellido(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 " />
            <input
              type="text"
              className="py-3 pl-8 pr-4 border-l-orange-100 w-full outline-none rounded-lg"
              placeholder="Pais"
              value={country}
              onChange={e => setCountry(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <FaHome className="absolute top-1/2 -translate-y-1/2 left-2 " />
            <input
              type="text"
              className="py-3 pl-8 pr-4 border-l-orange-100 w-full outline-none rounded-lg"
              placeholder="Direccion"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <ImProfile className="absolute top-1/2 -translate-y-1/2 left-2 " />
            <input
              type="text"
              className="py-3 pl-8 pr-4 border-l-orange-100 w-full outline-none rounded-lg"
              placeholder="Tel. extensión"
              value={cel_extension}
              onChange={e => setCelExtension(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <RiContactsBook2Fill className="absolute top-1/2 -translate-y-1/2 left-2 " />
            <input
              type='tel'
              className="py-3 pl-8 pr-4 border-l-orange-100 w-full outline-none rounded-lg"
              placeholder="NUmero de Telefono"
              value={cel_number}
              onChange={e => setCelNumber(e.target.value)}
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


export default EditarPerfil;