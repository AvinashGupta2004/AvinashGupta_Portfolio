
function Services({children}){
    return(
        <div className="flex p-4 overflow-x-auto lg:grid lg:grid-cols-3 lg:gap-20 gap-8 lg:p-4 lg:w-[95%] mx-auto my-6 justify-evenly">
            {children}
        </div>
    )
}

export default Services;
