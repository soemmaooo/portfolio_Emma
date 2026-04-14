const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="w-10 flex items-center">
          <img src="/lemon_cat_logo.png" alt="lemon_cat_logo" />
          <span className="text-main-yellow-400 text-2xl font-silkscreen font-normal ms-1 hidden md:block">
            EMMA
          </span>
        </div>
        <ul className="flex space-x-6 text-sm md:text-base font-silkscreen font-normal text-slate-600">
          <li>
            <a href="#about" className="hover:text-green-600 transition">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-green-600 transition">
              PORTFOLIO
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green-600 transition">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
