
function TimeLineContent({children}){
    return(
        <div className="flex items-center space-x-2 my-1">
            <div className="h-1.5 w-1.5 aspect-square rounded-full bg-gray-700"></div>
            <div>
                <p className="text-[0.9rem] font-nunito text-gray-500 font-[500] leading-3.5">{children}</p>
            </div>
        </div>
    )
}

export default TimeLineContent;