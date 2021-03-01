import "./Header.css";
import logo from '../assets/imagenes';

function Header(){
  return (
    <header>
        <img src={logo.logo}/>
    </header>
  );
}

export default Header;