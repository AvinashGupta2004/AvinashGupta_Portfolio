import { TypeAnimation } from "react-type-animation";
import ImageGroup from "./ImageGroup";
function TextGroup() {
  return (
    <div className="leading-15 flex flex-col justify-center items-center h-[65%]">
      <ImageGroup></ImageGroup>
      <div className="greetings font-nunito lg:text-[2.4rem] font-[800] text-blue-700 uppercase tracking-[1px] drop-shadow-md text-3xl w-full flex justify-center items-center">
        <TypeAnimation
          sequence={["Namaste!", 3000, "Hello World!", 2000]}
          wrapper="span"
          speed={10}
          repeat={Infinity}
        ></TypeAnimation>
      </div>

      <div className="font-rubik lg:text-[2.6rem] text-gray-800 uppercase font-[700] tracking-[1px] text-[2rem] text-center leading-9 px-2">
                Myself <span>Avinash Gupta</span>
            </div>
      <div className="text-lg font-rubik font-[600] uppercase tracking-[5px] text-gray-500 text-center my-1 mb-5 ">
        Aspiring Full Stack Developer
      </div>
      <hr className="w-[40%]"></hr>
    </div>
  );
}

export default TextGroup;
