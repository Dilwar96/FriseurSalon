import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../features/menu/menuSlice";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const isOpen = useSelector((state) => state.menu.isOpen);
  const dispatch = useDispatch();

  const handleOpen = () => {
    document.getElementById("sidebar").classList.remove("translate-x-full");
    setTimeout(() => dispatch(toggle()), 700);
  };

  return (
    <nav className="bg-accent-content">
      <div className="navbar container mx-auto px-4 lg:px-6 py-2 flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <p className="text-yellow-500 font-[Pacifico] text-lg sm:text-2xl md:text-3xl lg:text-4xl shadow-lg">
            Friseur<span className="font-extrabold">Salon</span>
          </p>
        </NavLink>

        <div className="hidden lg:block">
          <ul className="menu menu-horizontal space-x-4">
            <NavLinks />
          </ul>
        </div>

        {/* Mobile Menu Button */}

        <div id="sidebar">
          <button className="lg:hidden" onClick={handleOpen}>
            <FaBarsStaggered className="h-6 w-6 text-yellow-500" />
          </button>
        </div>

        {/* Conditional rendering of the MobileMenu component */}
        {isOpen && <MobileMenu toggle={toggle} />}
      </div>
    </nav>
  );
};

export default Navbar;
