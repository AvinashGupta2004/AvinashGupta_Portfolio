
function TimeLine({children}){
    return(
        <div className="flex flex-col justify-stretch items-stretch mx-auto min-w-full -p-2 lg:p-0">
            {children}
        </div>
    )
}

export default TimeLine;