import React from 'react'
import ListItem from './ListItem'

const ListPost = () => {
  return (
    <div className=" ml-5 w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
    <h2 className=" font-black text-3xl text-center">Publicaciones creadas</h2>
    <p className=" font-semibold  text-2xl text-center ">Publicaciones creadas {''}
    <span className="text-orange-200">publicacion</span>
    </p>  
     
    <ListItem></ListItem>,
   <ListItem></ListItem>,
   <ListItem></ListItem>,
   <ListItem></ListItem>
   <ListItem></ListItem>


    </div>



  )
}

export default ListPost