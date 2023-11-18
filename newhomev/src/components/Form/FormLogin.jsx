import { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios'
//import LayoutAdmin from "./src/components/Administracion/LayoutAdmin";


const FormLogin = () => {
    const [email_address, setEmail] = useState('')
    const [passwoord, setPassword] = useState('')
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if([email_address, passwoord].includes('')){
            swal({
                title: "Hay campos vacíos",
                icon: "error",
                button: "Aceptar"
            });
            return
        }
        // crear usuario en la API
    try {
        const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/signin`,
        {email_address, passwoord})

        console.log(data)
        console.log('Datos ingresados')

        setEmail('')
        setPassword('')


    } catch (error) {
        console.log(error)
    }
    
};
    return (
    <>
            <div className="flex flex-col rounded-3xl justify-center items-center mt-14">
                <h2 className=" text-center pt-3 text-2xl font-semibold">
                INICIAR SESIÓN
                </h2>
            <form onSubmit={handleSubmit} className="bg-[#e28743] my-10 shadow-lg rounded-lg py-6 px-6 flex flex-col w-2/5 h-1/2">
                <label
                        className=" flex flex-col px-3 font-semibold">
                    Correo electrónico:
                    <input
                    type="email"
                    name="username"
                    placeholder="Correo electrónico"
                    value={email_address}
                    onChange={e => setEmail(e.target.value)}
                    className="rounded-xl mt-2 border py-3 px-3"
                    />
                </label>
                <br />
                <label className="flex flex-col px-3 font-semibold">
                    Contraseña:
                    <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={passwoord}
                    onChange={e => setPassword(e.target.value)}
                    className="rounded-xl mt-2 border py-3 px-3"
    
                    />
                </label>
                <br />
                <input
                    type="submit" 
                    value="Iniciar Sesión"
                    className="rounded-2xl bg-white mx-16 mt-4 p-2 text-center"
                />
            </form>
            <Link to="../register" className="text-center block">
                ¿No tienes una cuenta? Registrate
            </Link>
        </div>
        
    </>
        );
    }
    
    export default FormLogin;