import Particular from "./Particulars/Particular";
import Label from "./Particulars/Label";
import Detail from "./Particulars/Detail";
import { details } from "../../assets/data";
function PersonalDetails(){
    return(
        <div className="w-full bg-gray-100 rounded-lg p-4 px-5">
            <h3 className="text-[1.2rem] my-1 text-gray-800 font-[600] font-nunito border-b-1 border-dashed border-gray-400 pb-2">Personal Details</h3>
            {
                details.map((detail,index)=>{
                    return(
                        <Particular key={index}>
                            <Label>{detail.label}</Label>
                            <Detail>{detail.detail}</Detail>
                        </Particular>
                    )
                })
            }
        </div>
    )
}

export default PersonalDetails;