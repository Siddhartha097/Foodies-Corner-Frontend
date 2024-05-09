import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="border-b-2 border-b-rose-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className=" text-3xl font-bold tracking-tight text-rose-500"
        >
          Foodies Corner
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="max-md:hidden">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
