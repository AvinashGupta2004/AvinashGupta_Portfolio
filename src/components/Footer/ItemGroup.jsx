function ItemGroup({ children, items, onlyImage }) {
  return (
    <div className="w-full h-full ">
      <h3 className="text-gray-800 font-nunito font-[600] text-lg text-center">
        {children}
      </h3>
      <div className="w-full text-center mt-2 flex flex-col justify-center items-center">
        {items.map((item) => {
          return (
            <div className="text-gray-500 font-nunito font-[500] my-1 flex justify-center items-center gap-2 p-1">
              {onlyImage ? (
                <div className="h-12 w-12 aspect-square rounded-full border-1 border-gray-300 flex justify-center items-center hover:bg-gray-200 transition duration-300 linear">
                  <a href={item.target} target="_blank">
                    <img
                      src={item.image}
                      className="aspect-square h-5 w-5"
                    ></img>
                  </a>
                </div>
              ) : (
                <a
                  href={item.target}
                  target="_blank"
                  className="text-gray-500 font-nunito text-md font-[500] hover:text-blue-500 "
                >
                  {item.label}
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ItemGroup;
