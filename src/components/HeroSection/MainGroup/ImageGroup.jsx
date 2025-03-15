// import { profilePhoto } from "../../../assets/data";

// function ImageGroup(){
//     return(
//         <div className="drop-shadow-2xl shadow-gray-800">
//             <img src={profilePhoto} className="h-48 w-48 rounded-full mb-10 ring-5 ring-blue-900 ring-offset-5 animate-photo"></img>
//         </div>
//     )
// }

// export default ImageGroup;

import { profilePhoto } from "../../../assets/data";

function ImageGroup() {
  return (
    <div className="drop-shadow-2xl shadow-gray-800">
      <img
        src={profilePhoto}
        className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 rounded-full mb-6 sm:mb-8 md:mb-10 ring-4 sm:ring-5 ring-blue-900 ring-offset-4 sm:ring-offset-5 animate-photo"
        alt="Profile Photo"
      />
    </div>
  );
}

export default ImageGroup;