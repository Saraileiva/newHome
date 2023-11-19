import { useState } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import axios from 'axios'

const FormRegister = () => {
    const [first_name, setName] = useState('')
    const [last_name, setApellido] = useState('')
    const [email_address, setEmail] = useState('')
    const [passwoord, setPassword] = useState('')
    const [country, setCountry] = useState('')
    const [address, setAddress] = useState('')
    const [cel_extension, setCelExtension] = useState('')
    const [cel_number, setCelNumber] = useState('')

const handleSubmit = async (e) => {
    e.preventDefault();

    if([first_name, last_name, email_address, passwoord, country, address, cel_extension, cel_number].includes('')){
        swal({
            title: "Hay campos vacíos",
            icon: "error",
            button: "Aceptar"
        });
        return
    }
    // crear usuario en la API
    try {
        const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`,
        {first_name, last_name, email_address, passwoord})

        console.log(data)
        console.log('Datos ingresados')

        swal({
            title: "¡Se ha creado exitosamente su cuenta!",
            icon: "success",
            button: "Aceptar"
        })

        setName('')
        setApellido('')
        setEmail('')
        setPassword('')
        setCountry('')
        setAddress('')
        setCelExtension()
        setCelNumber()

    } catch (error) {
        console.log(error)
    }
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
                value={first_name}
                onChange={e => setName(e.target.value)}
                className="rounded-xl mt-2 border py-3 px-3"
                />
            </label>
            <br />
            <label
                    className=" flex flex-col px-3 font-semibold">
                Apellido:
                <input
                type="text"
                name="username"
                placeholder="Apellido"
                value={last_name}
                onChange={e => setApellido(e.target.value)}
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
            
            <label    
                className=" flex flex-col px-3 font-semibold">
                País:
                <input
                type="text"
                name="country"
                placeholder="País"
                value={country}
                onChange={e => setCountry(e.target.value)}
                className="rounded-xl mt-2 border py-3 px-3"
                />
            </label>
            <br />
            <label
                className=" flex flex-col px-3 font-semibold">
                Dirección de residencia:
                <input
                type="text"
                name="address"
                placeholder="Dirección de residencia"
                value={address}
                onChange={e => setAddress(e.target.value)}
                className="rounded-xl mt-2 border py-3 px-3"
                />
            </label>
            <br />
            <label
                className=" flex flex-col px-3 font-semibold">
                Extensión de tel:
                <input
                type="text"
                name="extension"
                placeholder="Tel. extensión"
                value={cel_extension}
                onChange={e => setCelExtension(e.target.value)}
                className="rounded-xl mt-2 border py-3 px-3"
                />
            </label>
            <br />
            <label
                className=" flex flex-col px-3 font-semibold">
                Número de tel:
                <input
                type="text"
                name="phone"
                placeholder="Teléfono"
                value={cel_number}
                onChange={e => setCelNumber(e.target.value)}
                className="rounded-xl mt-2 border py-3 px-3"
                />
            </label>
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