import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./src/components/Main/Main";
import FormLogin from "./src/components/Form/FormLogin"
import FormRegister from "./src/components/Form/FormRegister";
import Header from "./src/components/Header/Header";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header/>}>
                    <Route index element={<Main/>}/>
                    <Route path="login" element={<FormLogin />}/>
                    <Route path="register" element={<FormRegister />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App