import { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const FormRegister = () => {
    const [Name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

const handleSubmit = (e) => {
    e.preventDefault();

    if([Name, email, password].includes('')){
        swal({
            title: "Hay campos vacíos",
            icon: "error",
            button: "Aceptar"
        });
    }
    console.log('Datos ingresados')

};

return (
<>
        <div className="flex flex-col rounded-3xl justify-center items-center mt-14">
            <h2 className=" text-center pt-3 text-2xl font-semibold uppercase">
            Regístrate
            </h2>
        <form onSubmit={handleSubmit} className="bg-[#e28743] my-10 shadow-lg rounded-lg py-6 px-6 flex flex-col w-2/5 h-1/2">
            <label
                    className=" flex flex-col px-3 font-semibold">
                Nombre de usuario:
                <input
                type="text"
                name="username"
                placeholder="Nombre"
                value={Name}
                onChange={e => setName(e.target.value)}
                className="rounded-xl mt-2 border py-3 px-3"
                />
            </label>
            <br />
            <label className="flex flex-col px-3 font-semibold">
                Correo electrónico:
                <input
                type="email"
                name="email"
                placeholder="Correo Electronico"
                value={email}
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
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="rounded-xl mt-2 border py-3 px-3"

                />
            </label>
            <br />
            <button type="submit" className="rounded-2xl bg-white mx-16 mt-4 p-2 text-center">
                Registrar
            </button>
        </form>
        <Link to="../login" className="text-center block">
                ¿Ya tienes una cuenta? Inicia Sesión
            </Link>
    </div>
</>
    );
}

export default FormRegister;