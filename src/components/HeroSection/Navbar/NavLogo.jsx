function NavLogo({ children }) {
  return (
    <div className="flex">
      <div className="bg-linear-[120deg] from-[#182e4d] to-[#289dbc] bg-clip-text">
        <div className="nav-logo-text text-transparent text-2xl uppercase font-[700] font-rubik sm:text-3xl md:text-3xl lg:text-3xl">
          {children}
        </div>
      </div>
      <div className="nav-logo-ball h-3 w-3 rounded-full bg-linear-to-r from-[#182e4d] to-[#289dbc]"></div>
    </div>
  );
}

export default NavLogo;
