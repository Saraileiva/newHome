import { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import LayoutAdmin from '../Administracion/LayoutAdmin';

const FormLogin = () => {
    const [email_address, setEmail] = useState('')
    const [passwoord, setPassword] = useState('')
    const [loginSuccesful, setLoginSuccesful] = useState(false);

    
    const handleSubmit = async (e) => {
        function parseJwt (token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        
            return JSON.parse(jsonPayload);
        }
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
        console.log('Cuenta Validada con Token')

        if (data.token) {
            localStorage.setItem('token', data.token);
            setLoginSuccesful(true)
            console.log(localStorage.getItem('token'))
            console.log(parseJwt(localStorage.getItem('token')));

            //window.location = '/profile-homepage';
        } else {
            setLoginSuccesful(false)
        }

        const testToken = () => {
            axios.post('url', { email_address, passwoord }, { headers : { 'Authorization' : `Bearer ${localStorage.getItem('token')}`}})
        }
        axios.get('url', {headers : { 'Authorization' : `Bearer ${localStorage.getItem('token')}`}})
        //localStorage.getItem('token')
        //console.log("hola mundo")
    } catch (error) {
        console.log("hola mundo")
    }

};


    return (
    <> {loginSuccesful ?  <LayoutAdmin />:
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
        
    }</>
        );
    }
    
    export default FormLogin;