import PersonalDetails from "./PersonalDetails";
import Introduction from "./Introduction";

function AboutSection({id}){
    return(
        <div  id = {id} className="grid grid-cols-1 rounded-xl bg-white shadow-[0_0_7px_rgba(0,0,0,0.1)] z-10 lg:w-[80%] lg:translate-y-[20%] mx-auto lg:p-6 gap-5 md:grid-cols-2 p-2 w-[90%]">
            <PersonalDetails></PersonalDetails>
            <Introduction></Introduction>
        </div>
    )
}

export default AboutSection;


