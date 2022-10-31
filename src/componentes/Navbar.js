import { CartWidget } from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbarDisplay">
      <ul className="ulDisplay">
        <li className="liDisplay">Remeras</li>
        <li className="liDisplay">Jeans</li>
        <li className="liDisplay">Zapatillas</li>
      </ul>
      <CartWidget />
    </nav>
  );
}
export default Navbar;
