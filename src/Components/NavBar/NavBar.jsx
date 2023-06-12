import "./NavBar.css";
import "./CartWidget";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/"  >Logo</Link>
      <div className="hidden sm:flex" >
      <Link to="/"><button>Productos</button></Link>
      <Link to={`/category/Hombre`}><button>Hombre</button></Link>
      <Link to={`/category/Mujer`}><button>Mujer</button></Link>
       </div>
      <Link to='/cart' className=""><CartWidget /></Link>
    </nav>
  );
};

export default NavBar;
