
function ProjectCard({title,description,image}){
    return(
        <div className="min-w-[20rem] bg-white p-4 rounded-lg hover:border-blue-600 border-1 border-white shadow-md shadow-gray-300 transition duration-300 ease-in-out mx-auto">
            <img src={image} className="h-[10rem] aspect-auto mx-auto rounded-lg"></img>
            <div className="mt-4">
                <h3 className="text-2xl text-gray-700 font-rubik font-[600] text-center">{title}</h3>
                <p className="text-md text-gray-500 font-nunito font-[500] text-center">{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard;