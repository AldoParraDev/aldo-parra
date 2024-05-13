import { PiSlidersLight } from "react-icons/pi";
import logo from "../assets/logo.svg";
// import { PiMagnifyingGlassLight } from "react-icons/pi";

export default function Header({ handleOpenFilters }) {
   return (
      <header className="header w-full">
         <div className="container flex w-fit laptop:w-full items-center justify-center">
            {/* Logo de la web */}
            <figure>
               <img src={logo} alt="Logo DevMovies+" width={200} height={200} />
            </figure>
         </div>
         <button className="header__button" onClick={() => handleOpenFilters(true)}>
            <PiSlidersLight />
         </button>
      </header>
   );
}
