function ServiceCard(props) {
  return (
    <div className="min-w-full border-1 border-white lg:flex bg-white flex-col justify-center items-center gap-2 rounded-md shadow-[0_0_5px_rgba(0,0,0,0.1)] p-4 transition duration-300 linear hover:border-blue-600">
        <div className="w-full h-[10rem] flex justify-center items-center">
            <img src={props.service.image} className="h-full w-full"></img>
        </div>
        <div className="">
            <h2 className="font-rubik text-gray-700 text-xl text-center font-[500]">{props.service.title}</h2>
            <p className="text-md font-nunito text-gray-500 font-[400] text-center mt-1">{props.service.description}</p>
        </div>
    </div>
  );
}

export default ServiceCard;

