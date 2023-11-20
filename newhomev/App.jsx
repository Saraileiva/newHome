import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import AddPerro from "./src/pages/AddPerro";
import MainDesing from "./src/components/Main/MainDesign";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header/>}>
                    <Route index element={<MainDesing/>}/>
                    <Route path="login" element={<FormLogin />}/>
                    <Route path="register" element={<FormRegister />}/>
                </Route>
             
            <Route path="/profile-homepage" element={<LayoutAdmin />}>
            <Route index element={<Homepage/>} />
            <Route path="edit" element={<EditarPerfil/>}/>
            <Route path="solicitudes" element={<Solicitudes/>}/>
            <Route path="add" element ={<AddPubli/>}/>
            <Route path="perros" element ={<AddPerro/>}/>
            </Route>


            <Route path="/superadmin" element={<LayoutSuperAd/>}>
            <Route index element={<Homepage/>} />
            <Route path="editusers" element ={<Usuarios/>}/>
            </Route>
            

            <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App