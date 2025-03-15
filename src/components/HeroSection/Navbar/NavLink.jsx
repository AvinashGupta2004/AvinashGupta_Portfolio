function NavLink({target,children}){
    return(
        <div>
           <a className="text-base font-[800] font-nunito uppercase text-gray-800 hover:text-blue-700 transition duration-500 ease-in-out" href={target}>{children}</a>
        </div>
    )
}

export default NavLink;