import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <Link 
        to="/" 
        className="inline-block hover:scale-105 transition-transform duration-300"
      >
        <img 
          src="/logo.png" 
          alt="BOSS Logo" 
          className="h-10 md:h-12 w-auto logo-green"
        />
      </Link>
    </header>
  );
};

export default Header;
