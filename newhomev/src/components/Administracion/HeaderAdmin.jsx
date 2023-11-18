import {
  //RiNotification3Line,
  RiArrowDownSLine,
  RiSettings3Line,
  RiLogoutCircleRLine,
  //RiThumbUpLine,
  //RiChat3Line,
} from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";

const HeaderAdmin = () => {
  return (
    <header className="h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end">
      <nav className="flex items-center gap-2">

        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-x-2  hover:bg-orange-200 p-2 rounded-lg transition-colors">
              <img
                src="https://i.pinimg.com/474x/d2/97/a3/d297a3eced48990f8001c8624ec84145.jpg"
                className="w-10 h-7 object-cover rounded-full"
              />
              <span>Aqui va nombre de usuario</span>
              <RiArrowDownSLine />
            </MenuButton>
          }
          align="end"
          arrow
          arrowClassName="bg-secondary-100"
          transition
          menuClassName="bg-secondary-100 p-4"
        >
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/perfil"
              className="rounded-lg transition-colors text-gray-300  hover:bg-sky-800  flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <img
                src="https://i.pinimg.com/474x/d2/97/a3/d297a3eced48990f8001c8624ec84145.jpg"
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="flex flex-col text-sm">
                <span className="text-sm text-black">Name</span>
                <span className="text-xs text-black">user@gmail.com</span>
              </div>
            </Link>
          </MenuItem>
          <hr  />
          <MenuItem >
            <Link
              to="/configuracion"
              className="rounded-lg transition-colors text-black hover:bg-sky-800 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <RiSettings3Line /> Configuración
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/cerrar-sesion"
              className="rounded-lg transition-colors text-black hover:bg-sky-800 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <RiLogoutCircleRLine /> Cerrar sesión
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
};

export default HeaderAdmin;
