
function Footer({children}){
    return(
        <div className="h-full p-8 bg-gray-100">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:gap-0 justify-center items-stretch w-[80%] mx-auto">
                {children}
            </div>
        </div>
    )
}

export default Footer;