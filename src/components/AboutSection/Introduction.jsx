import { TypeAnimation } from "react-type-animation";

function Introduction() {
  return (
    <div>
      <div className="strength mt-2 w-full text-2xl text-gray-800 font-nunito font-[600] tracking-[1px] text-nowrap text-center md:text-left">
        I am{" "}
        <TypeAnimation
          sequence={["Student!", 3000, "Developer!", 2000]}
          wrapper="span"
          speed={10}
          repeat={Infinity}
          className="font-[700] text-blue-700"
        ></TypeAnimation>
      </div>
      <div className="flex flex-col justify-stretch items-stretch">
        <p className="text-gray-600 text-md font-nunito font-[400] text-left p-2 lg:p-0">
          Welcome to my{" "}
          <span className="text-gray-500 font-[700] font-nunito">
            Digital space!
          </span>
          . I'm{" "}
          <span className="text-gray-500 font-[700] font-nunito ">
            Avinash Gupta
          </span>
          , a Student at
          <span className="text-gray-500 font-[700] font-nunito">
            {" "}
            Madan Mohan Malviya University of Technology Gorakhpur, Uttar
            Pradesh
          </span>{" "}
          and aspiring Software Developer dedicated to transform ideas into
          impactful realities.
          <p className="my-1">
            Explore my portfolio to witness a curated collection of my work,
            showcasing a blend of innovation, craftsmanship, and a commitment to
            excellence.
          </p>
        </p>
      </div>
      <div className="font-[700] tracking-[1.5px] font-dancing text-2xl my-2 lg:text-left text-center">
        Avinash Gupta
      </div>
    </div>
  );
}

export default Introduction;
