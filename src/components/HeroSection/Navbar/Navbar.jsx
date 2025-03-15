import NavLogo from "./NavLogo";
import NavLink from "./NavLink";
import { links } from "../../../assets/data";
function Navbar() {
  return (
    <div className="h-[15%] flex justify-around items-center">
      <div className="nav-logo-container">
        <NavLogo>Avinash Gupta</NavLogo>
      </div>
      <div className="nav-links-container justify-center items-center gap-12 hidden lg:flex" id="nav-bar">
        {
          links.map((link)=>{
            return(
              <NavLink target = {link.target} key={link.id}>{link.title}</NavLink>
            )
          })
        }
      </div>
        <button className="lg:hidden h-10 w-10 aspect-square rounded-lg border-1 border-gray-200 p-2">
          <img src="/images/menu-burger.svg" className="h-full w-full"></img>
        </button>
    </div>
  );
}

export default Navbar;


