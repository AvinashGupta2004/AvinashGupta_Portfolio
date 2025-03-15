function Skill(props){
    return(
        <div className="flex gap-3 px-4 py-2 max-w-lg rounded-lg bg-slate-50 mx-4 justify-center items-center">
            <div className="flex items-center justify-center">
                <img className="h-8 w-8 rounded-sm" src={props.image}></img>
            </div>
            <h3 className="text-lg font-[700] text-gray-800 font-nunito">{props.title}</h3>
        </div>
    )
}

export default Skill;