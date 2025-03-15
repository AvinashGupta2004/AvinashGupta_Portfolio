import Marquee from "react-fast-marquee";
import Skill from "./Skill";
import {skills} from "../../../assets/data";

function SkillsMarquee(){
    return(
        <div className="flex justify-center items-center h-20">
            <div className="lg:w-xl w-screen">
            <Marquee direction="left" speed={30} gradient = "true" gradientWidth={"10%"}>
                {
                    skills.map((skill)=>{
                        return(
                            <Skill title={skill.title} image={skill.image} key= {skill.id}></Skill>
                        )
                    })
                }
            </Marquee>
            </div>
        </div>
    )
}

export default SkillsMarquee;
