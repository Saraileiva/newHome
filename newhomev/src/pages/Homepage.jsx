import React, {useState, useEffect }from 'react'
import axios from 'axios'
import authService from '../../authService';

const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Obtiene el token de tu sistema de autenticación desde el almacenamiento local
          const fetchData = async () => {
            try {
              const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/post`, {
              });
              setData(response.data);
              axios.get('url', {headers : { 'Authorization' : `Bearer ${localStorage.getItem('token')}`}})
              console.log(localStorage.getItem('token'))
            } catch (error) {
              console.error('Error en la solicitud:', error);
            }
          }
          fetchData();
          const token = localStorage.getItem('token');
          authService.setAuthToken(token);
        }, []);
 // El segundo argumento [] indica que este efecto se ejecuta solo en el montaje del componente

  return (
    <div>
      <h2>Mi Componente</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            {/* Agrega más encabezados según la estructura de tus datos */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              {/* Agrega más celdas según la estructura de tus datos */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;