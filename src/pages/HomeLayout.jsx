import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components/global";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
