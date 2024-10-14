import { location } from "../../pages/LocationsPage";
import IconsContainer from "./IconsContainer";

const Footer = () => {
  return (
    <footer className="bg-accent-content text-white p-6 pt-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-bold mb-2 text-yellow-500">Kontakt</h4>
          <p className="text-gray-400">Adresse: {location.address}</p>
          <p className="text-gray-400">Telefon: {location.phone}</p>
          <p className="text-gray-400">E-Mail: {location.email}</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-bold mb-2 text-yellow-500">
            Öffnungszeiten
          </h4>
          <p className="text-gray-400">{location.hours.WeekDays}</p>
          <p className="text-gray-400">{location.hours.Sonday}</p>
        </div>
        <IconsContainer />
      </div>
      <div className="mt-6 text-center border-t border-gray-700 pt-4">
        <p>© 2024 FriseurSalon Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
};

export default Footer;
