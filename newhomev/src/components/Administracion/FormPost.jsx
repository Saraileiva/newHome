import React from 'react'
import { PiDogFill } from "react-icons/pi";
import { GiDogBowl } from "react-icons/gi";
import { LuPencilLine } from "react-icons/lu";
import { FaShieldDog } from "react-icons/fa6";
import { FaPhoneSquare } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { useState, useEffect } from 'react'
import swal from 'sweetalert'
import axios from 'axios'
import authService from './../../../authService';


const FormPost = () => {

    const [publication_tittle, setPublication_tittle] = useState('')
    const [publication_description, setPublication_description] = useState('')
    const [contact_information, setContact_information] = useState('')
    const [dog_id, setDog_id] = useState('')
    const [email_contact, setEmail_contact] = useState('')
    const [aditional_info, setAditional_info] = useState('')

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if([ publication_tittle, publication_description, contact_information, dog_id, email_contact, aditional_info].includes('')){
          swal({
              title: "Hay campos vacíos",
              icon: "error",
              button: "Aceptar"
          });
          return
      }
      // mandar post a la API
      try {
          const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/post/add`,
          {  publication_tittle, publication_description, contact_information, dog_id, email_contact, aditional_info})
  
          console.log(data)
          console.log('Datos ingresados')
  
          swal({
              title: "¡Se ha creado exitosamente su cuenta!",
              icon: "success",
              button: "Aceptar"
          })
  
          
          setPublication_tittle('')
          setPublication_description('')
          setContact_information('')
          setDog_id('')
          setEmail_contact('')
          setAditional_info('')

          axios.get('url', {headers : { 'Authorization' : `Bearer ${localStorage.getItem('token')}`}})
          console.log(localStorage.getItem('token'))

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
    <div className="ms-2 w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Formulario De post</h2>
      

      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px] mt-10">  
      <h1 className="text-1.9xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
      Reliza una nueva <span className="text-orange-200">publicacion</span>
       </h1>
    <form onSubmit={handleSubmit} className="mb-8 bg-secondary-100" >
            

              <div className="relative mb-4">
                <LuPencilLine className="absolute top-1/2 -translate-y-1 left-2" />
                <input
                  id="title"
                  type="text"
                  className="py-3 pl-8 pr-4 border-l-orange-200 w-full outline-none rounded-lg"
                  placeholder="Titulo"
                  value={publication_tittle}
                  onChange={e => setPublication_tittle(e.target.value)}
                />
              </div>

              <div className="relative mb-4">
                <PiDogFill className="absolute top-1/2 -translate-y-1/2 left-2 " />
                <input 
                  type="text"
                  className="py-3 pl-8 pr-4 border-l-orange-200 w-full outline-none rounded-lg"
                  placeholder="Descripcion"
                  value={publication_description}
                  onChange={e => setPublication_description(e.target.value)}
                />
              </div>

              <div className="relative mb-4">
                <FaPhoneSquare className="absolute top-1/2 -translate-y-1/2 left-2 " />
                <input
                  type="tel"
                  className="py-3 pl-8 pr-4 border-l-orange-100 w-full outline-none rounded-lg"
                  placeholder="Telefono de contacto"
                  value={contact_information}
                  onChange={e => setContact_information(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <FaShieldDog className="absolute top-1/2 -translate-y-1/2 left-2 " />
                <input
                  type="text"
                  className="py-3 pl-8 pr-4 border-l-orange-100 w-full outline-none rounded-lg"
                  placeholder="Id Perro"
                  value={dog_id}
                  onChange={e => setDog_id(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <  MdEmail className="absolute top-1/2 -translate-y-1/2 left-2 " />
                <input
                  type="email"
                  className="py-3 pl-8 pr-4 border-l-orange-100 w-full outline-none rounded-lg"
                  placeholder="Email de contacto"
                  value={email_contact}
                  onChange={e => setEmail_contact(e.target.value)}
                />
              </div>
              
              <div className="relative mb-4">
                <FaShieldDog className="absolute top-1/2 -translate-y-1/2 left-2 " />
                <input
                  type="text"
                  className="py-3 pl-8 pr-4 border-l-orange-100 w-full outline-none rounded-lg"
                  placeholder="Informacion adicional"
                  value={aditional_info}
                  onChange={e => setAditional_info(e.target.value)}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className=" bg-cyan-900 text-white uppercase font-bold text-sm w-full py-3 px-4 rounded-lg">
                  Publicar
                </button>
              </div>
              
      
      
    </form>
    </div>

      {/* <form className="mb-8"> */}

              {/* <div className="relative mb-4">
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
            </form> */}
    </div>
  )
}

export default FormPost
