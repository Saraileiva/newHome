import { useEffect, useState } from 'react'
import axios from 'axios'

const ListItem = () => {
    /*useEffect(() => {
      const sendPost = async () => {
        try { 
        const data = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/post`);
        
        setUserList(data)
    }

    }*/

  return (
  

  <div className= "shadow-md rounded-xl px-5m-3 px-5 py-10">
      <p className='text-slate-700 font-bold uppercase mb-3'>Titulo: 
      <span className="font-normal normal-case">Pitbull en Adopcion</span>
      </p>

      <p className='text-slate-700 font-bold uppercase mb-3'>Descripcion: {''}
      <span className="font-normal normal-case">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
       Nesciunt reiciendis asperiores similique atque. Temporibus, facere nobis, quae laborum ipsam quasi harum dolores, 
       voluptates quisquam aspernatur nisi pariatur provident minima neque!</span>
      </p>

      <p className='text-slate-700 font-bold uppercase mb-3'>Informacion de contacto: {''}
      <span className="font-normal normal-case">+503 61101319</span>
      </p>

      <p className='text-slate-700 font-bold uppercase mb-3'>Id perro: {''}
      <span className="font-normal normal-case">3</span>
      </p>

      <p className='text-slate-700 font-bold uppercase mb-3'>Email contacto: {''}
      <span className="font-normal normal-case">ilcia@gmail.com</span>
      </p>

      <p className='text-slate-700 font-bold uppercase mb-3'>fecha: {''}
      <span className="font-normal normal-case">18 Noviembre de 2023</span>
      </p>

      <p className='text-slate-700 font-bold uppercase mb-3'>Informacion adicional: {''}
      <span className="font-normal normal-case">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit et, omnis labore velit,
       tenetur dolores nisi ipsum adipisci exercitationem rem natus. Libero enim vel quibusdam minus officia nam sapiente doloremque.</span>
      </p>
  </div>

  )
}

export default ListItem