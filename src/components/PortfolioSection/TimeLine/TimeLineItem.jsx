import TimeLineContent from "./TimeLineContent";
function TimeLineItem(props) {
  return (
    <div className="border-dashed border-l-2 border-gray-300 p-4 pr-0 mb-4 lg:px-8 relative">
      <div className="h-8 w-8 rounded-full absolute top-0 left-0 -translate-[50%] bg-blue-700 text-md text-white font-rubik flex justify-center items-center">
        {props.experience.index}
      </div>
      <div className="rounded-lg bg-slate-100 lg:p-4 p-3">
        <div className="flex items-start w-full space-x-4 flex-col">
          <div className="flex flex-row items-center justify-between w-full pr-2">
            <div className="h-10 w-10 aspect-square rounded-full bg-blue-700 flex items-center justify-center mb-2">
              <img
                src="/images/icons8-star-100.png"
                alt=""
                className="h-4 w-4"
              />
            </div>
            <h5 className="text-blue-500 text-sm font-nunito font-[700]">
              {props.experience.duration}
            </h5>
          </div>
          <div className="leading-4">
            <div>
              <h3 className="text-gray-800 font-[600] font-rubik lg:text-xl text-lg uppercase leading-5 lg:leading-6 mt-1">
                {props.experience.title}
              </h3>
              <h4 className="text-gray-500 font-[700] font-nunito text-md mt-1 leading-4">
                {props.experience.company}
              </h4>
              <div className="timeline-card-content mt-4">
                {props.experience.description.map((desc) => {
                  return <TimeLineContent>{desc}</TimeLineContent>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeLineItem;
