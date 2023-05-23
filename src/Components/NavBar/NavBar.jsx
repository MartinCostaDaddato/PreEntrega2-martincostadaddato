import "./NavBar.css";
import "./CartWidget";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="#">Logo</a>
      <div>
        <a href="#"><button>Productos</button></a>
        <a href="#"><button>Destacado</button></a>
        <a href="#"><button>Contacto</button></a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
