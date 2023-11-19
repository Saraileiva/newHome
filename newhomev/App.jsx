import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./src/components/Main/Main";
import FormLogin from "./src/components/Form/FormLogin"
import FormRegister from "./src/components/Form/FormRegister";
import Header from "./src/components/Header/Header";
import Error404 from "./src/pages/Error404";
import LayoutAdmin from "./src/components/Administracion/LayoutAdmin";
import EditarPerfil from "./src/pages/EditarPerfil";
import Homepage from "./src/pages/Homepage";
import Solicitudes from "./src/pages/Solicitudes";
import LayoutSuperAd from "./src/components/Administracion/LayoutSuperAd";
import AddPubli from "./src/pages/AddPubli";
import Usuarios from "./src/pages/Usuarios";
import { useLocalStorage } from "react-use";
import PrivateRoute from "./src/components/PrivateRoute/PrivateRoute";
import PropTypes from 'prop-types';


function App() {

    const [token] = useLocalStorage('token');

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header/>}>
                    <Route index element={<Main/>}/>
                    <Route path="login" element={<FormLogin />}/>
                    <Route path="register" element={<FormRegister />}/>
                </Route>
            <Route element={<PrivateRoute canActivate={token} />}>
                <Route path="/profile-homepage" element={<LayoutAdmin />}/>
                <Route index element={<Homepage/>} />
                <Route path="edit" element={<EditarPerfil/>}/>
                <Route path="solicitudes" element={<Solicitudes/>}/>

            </Route>
            
            <Route path="/superadmin" element={<LayoutSuperAd/>}>
            <Route index element={<Homepage/>} />
            <Route path="editusers" element ={<Usuarios/>}/>
            <Route path="addpublication" element ={<AddPubli/>}/>
                </Route>
            

            <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}
PrivateRoute.propTypes = {
    canActivate: PropTypes.elementType.isRequired,
    RedirectPath: PropTypes.string.isRequired, 
};


export default App