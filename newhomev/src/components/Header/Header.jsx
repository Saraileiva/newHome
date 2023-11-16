import logo from "../../assets/logo.png";
import Button from '../Button/Button';
import text from '../../assets/homlog.png';
import { Outlet } from "react-router-dom";

const Header = () => {
    return (
        <>
    <header className= "bg-[#e28743] p-1 flex justify-between top-0 w-full">
            <div className="flex justify-start ">
                <figure className='h-25 w-25'>
                    <img src={logo} alt="" className= "h-20 w-20 "/>
                </figure>
                <figure className="flex items-center h-full">
                    <img src={text} alt="" className= "h-9 flex items-center "/>
                </figure>

                
            </div>
            <div className="flex justify-end w-1/2 px-5 items-center ">
                <Button> </Button>
            </div>
    </header>
    <div>
        <Outlet/>
    </div>
        </>
    );
}

export default Header;