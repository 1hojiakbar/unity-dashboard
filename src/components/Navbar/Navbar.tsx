const Navbar: React.FC = () => {
  return (
    <div>
      <div>
        <nav className="bg-light h-14 px-4 border-b-2 border-b-divider-color lg:hidden md:hidden sm:flex">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-1xl text-custom-dark-blue font-bold">
              Navbar
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
