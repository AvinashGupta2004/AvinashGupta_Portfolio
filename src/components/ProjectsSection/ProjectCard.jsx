
// function ProjectCard({title,description,image}){
//     return(
//         <div className="min-w-[20rem] bg-white p-4 rounded-lg hover:border-blue-600 border-1 border-white shadow-md shadow-gray-300 transition duration-300 ease-in-out mx-auto">
//             <img src={image} className="h-[10rem] aspect-auto mx-auto rounded-lg"></img>
//             <div className="mt-4">
//                 <h3 className="text-2xl text-gray-700 font-rubik font-[600] text-center">{title}</h3>
//                 <p className="text-md text-gray-500 font-nunito font-[500] text-center">{description}</p>
//             </div>
//         </div>
//     )
// }

// export default ProjectCard;

function ProjectCard({ title, description, image }) {
    return (
      <div className="min-w-[20rem] max-w-[25rem] flex-col justify-center items-center gap-2 bg-white p-4 rounded-md hover:border-blue-600 border-1 border-transparent shadow-md hover:shadow-lg transition-all duration-300 ease-in-out lg:mx-0">
        {/* Image Section */}
        <div className="overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
  
        {/* Content Section */}
        <div className="mt-4">
          <h3 className="text-xl font-bold text-gray-800 font-rubik text-center">
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-600 font-nunito font-medium text-center">
            {description}
          </p>
        </div>
      </div>
    );
  }
  
  export default ProjectCard;