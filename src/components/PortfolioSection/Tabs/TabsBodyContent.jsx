function TabsBodyContent(props) {
  return (
    <div className="flex justify-center items-center lg:w-[50%] w-full">
      <div className="w-full h-full flex-col justify-center items-center gap-5 pt-8">
        <h4 className="text-3xl lg:my-5 my-2 text-gray-700 font-[600] font-rubik text-center uppercase">
          {props.title}
        </h4>
        <p className="text-lg font-[500] font-nunito text-gray-500 text-center">
            {props.description}
        </p>
      </div>
    </div>
  );
}

export default TabsBodyContent;
