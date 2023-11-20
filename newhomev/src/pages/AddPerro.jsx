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
import authService from './../../authService';


const AddPerro = () => {

    const [dog_name, setDog_name] = useState('')
    const [dog_age, setDog_age] = useState('')
    const [race, setRace] = useState('')
    const [discapacity, setDiscapacity] = useState('')
    const [rescued, setRescued] = useState('')
    const [sex, setSex] = useState('')

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if([ dog_name, dog_age, race, discapacity, rescued, sex].includes('')){
          swal({
              title: "Hay campos vacíos",
              icon: "error",
              button: "Aceptar"
          });
          return
      }
      // mandar post a la API
      try {
          const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/dog/create`,
          {  dog_name, dog_age, race, discapacity, rescued, sex})
  
          console.log(data)
          console.log('Datos ingresados')
  
          swal({
              title: "¡Se ha creado exitosamente su cuenta!",
              icon: "success",
              button: "Aceptar"
          })
  
          
          setDog_name('')
          setDog_age('')
          setRace('')
          setDiscapacity('')
          setRescued('')
          setSex('')

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
      <h2 className="font-black text-3xl text-center">Formulario De Perrito</h2>
      

      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px] mt-10">  
      <h1 className="text-1.9xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
      Registra un nuevo <span className="text-orange-200"> Perrito</span>
       </h1>
    <form onSubmit={handleSubmit} className="mb-8 bg-secondary-100" >
            

              <div className="relative mb-4">
                <LuPencilLine className="absolute top-1/2 -translate-y-1 left-2" />
                <input
                  id="title"
                  type="text"
                  className="py-3 pl-8 pr-4 border-l-orange-200 w-full outline-none rounded-lg"
                  placeholder="Nombre"
                  value={dog_name}
                  onChange={e => setDog_name(e.target.value)}
                />
              </div>

              <div className="relative mb-4">
                <PiDogFill className="absolute top-1/2 -translate-y-1/2 left-2 " />
                <input 
                  type="Number"
                  className="py-3 pl-8 pr-4 border-l-orange-200 w-full outline-none rounded-lg"
                  placeholder="Edad"
                  value={dog_age}
                  onChange={e => setDog_age(e.target.value)}
                />
              </div>

              <div className="relative mb-4">
                <FaPhoneSquare className="absolute top-1/2 -translate-y-1/2 left-2 " />
                <input
                  type="tel"
                  className="py-3 pl-8 pr-4 border-l-orange-100 w-full outline-none rounded-lg"
                  placeholder="Raza de perro"
                  value={race}
                  onChange={e => setRace(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <FaPhoneSquare className="absolute top-1/2 -translate-y-1/2 left-2 " />
                <input
                  type="text"
                  className="py-3 pl-8 pr-4 border-l-orange-100 w-full outline-none rounded-lg"
                  placeholder="Discapacidad"
                  value={discapacity}
                  onChange={e => setDiscapacity(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <FaShieldDog className="absolute top-1/2 -translate-y-1/2 left-2 " />
                <input
                  type="text"
                  className="py-3 pl-8 pr-4 border-l-orange-100 w-full outline-none rounded-lg"
                  placeholder="Rescatado"
                  value={rescued}
                  onChange={e => setRescued(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <  MdEmail className="absolute top-1/2 -translate-y-1/2 left-2 " />
                <input
                  type="text"
                  className="py-3 pl-8 pr-4 border-l-orange-100 w-full outline-none rounded-lg"
                  placeholder="Sexo de perro"
                  value={sex}
                  onChange={e => setSex(e.target.value)}
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
    </div>
  )
}

export default AddPerro;

