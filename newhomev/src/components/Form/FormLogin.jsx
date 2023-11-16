import { useState } from 'react';
import { Link } from 'react-router-dom';

const FormLogin = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos enviados:', formData);
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
                    Nombre de usuario:
                    <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="rounded-xl mt-2 border py-3 px-3"
                    />
                </label>
                <br />
                <label className="flex flex-col px-3 font-semibold">
                    Contraseña:
                    <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="rounded-xl mt-2 border py-3 px-3"
    
                    />
                </label>
                <br />
                <button type="submit" className="rounded-2xl bg-white mx-16 mt-4 p-2 text-center">
                    Iniciar Sesión
                </button>
            </form>
            <Link to="../register" className="text-center block">
                ¿No tienes una cuenta? Registrate
            </Link>
        </div>
        
    </>
        );
    }
    
    export default FormLogin;