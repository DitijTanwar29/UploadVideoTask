// import { useEffect, useRef, useState } from "react"
// import { useDropzone } from "react-dropzone"
// // import { FiUploadCloud, FiDelete } from "react-icons/fi"
// // import { useSelector } from "react-redux"
// import { BiArrowFromBottom } from "react-icons/bi";
// import { AiFillFileImage } from "react-icons/ai"
// import "video-react/dist/video-react.css"
// import { Player } from "video-react"
// import { MdDelete } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import HorizontalNonLinearStepper from "./HorizontalNonLinearStepper"
// import OutlinedTimeline from "./OutlinedTimeline";




    





// export default function Upload({

// }) {
  
//   const [video,setVideo] = useState(null);
  
//   const { acceptedFiles, getRootProps, getInputProps, inputRef } = useDropzone({
//     accept: 'video/*', // Specify accepted file types (e.g., video)
//     onDrop: (acceptedFiles) => {
//       setVideo(acceptedFiles[0]);
//     },
//   });

  
  
  
//   const {language} = useSelector((state) => state.language);
//   const [fileName, setFileName] = useState("No file selected");
//   console.log(language)
  
//   return (
//     <div className="w-screen h-screen flex flex-col justify-center items-center  bg-black ">

//       <div className="w-[80%] h-[80%] bg-zinc-800 rounded-2xl  mt-24 p-4 ">
        
//         <HorizontalNonLinearStepper />
//         {/* <OutlinedTimeline/> */}
        
//         {/* Div for the upload functionality */}
//         <div className=" flex justify-evenly items-between  -ml-9 ">

//           <div className="w-[355px] h-[355px] flex flex-col justify-center items-center border-[1px] border-solid border-[rgba(0,0,0,1)] rounded-2xl cursor-pointer "
//           >
            
//               <div 
//               className="  w-[300px] h-[300px] flex flex-col justify-center items-center border-[2px] border-dashed border-[rgba(45,46,47,1)] rounded-2xl  cursor-pointer"
//               {...getRootProps()}>
//               <input {...getInputProps()} />

//               {video ?
//                   <video className="w-[100%] h-[100%]"  controls
//                   >
//                   <source src={video}/>
//                   </video>
//               :
//               <>
//                 <BiArrowFromBottom className="text-slate-400 w-[90%] h-[90%] rounded-sm"/>
//                 <p className=" text-white bold ">Browse files to upload</p>
//               </>
              
//               }
              
//         </div>
            
            
//             {/* <section className="w-[355px] flex justify-between items-center place-self-start
//               ml-6  text-white cursor-pointer">
              
//                 <AiFillFileImage className="text-slate-400"/>
//                 <span className="flex items-center">
//                   {fileName} -
//                 </span>
//                   <MdDelete className="text-slate-400"
//                     onClick={() => {
//                       setFileName("")
//                       setVideo(null)
//                     }}
//                   />

//             </section>  */}
              
            
//           </div>
          

//           {/* Div for the text  */}
//           <div className="flex flex-col justify-center items-center text-white font-bold gap-4">
//             <h3 className="text-2xl ">Drag and drop video files to upload</h3>
//             <p className="text-l">Your videos will be private until you publish them.</p>
//             <div className="flex gap-6">

//             <button className="  bg-cyan-500 w-[10rem] rounded-md p-4 text-lg uppercase">{language}</button>
//             <button className="  bg-cyan-500 w-[10rem] rounded-md p-4 text-lg uppercase" onClick={() => { inputRef.current.click()}} >Select Media</button>
//             </div>
//           </div>

//         </div>
        
//       </div>


         




//     </div>




//   )
// }




















import { useState } from "react";
import "video-react/dist/video-react.css";
import { useSelector } from "react-redux";
import { useDropzone } from "react-dropzone";
import { BiArrowFromBottom } from "react-icons/bi";

export default function Upload({selectedVideo, setSelectedVideo}) {
  const { language } = useSelector((state) => state.language);

  const { acceptedFiles, getRootProps, getInputProps, inputRef } = useDropzone({
    accept: "video/*", // Specify accepted file types (e.g., video)
    onDrop: (acceptedFiles) => {
      setSelectedVideo(acceptedFiles[0]);
    },
  });

  const handleUpload = () => {
    // Handle the upload logic here (e.g., send the file to the server)
    console.log("Uploading video:", selectedVideo);
  };

  return (
      <div className="flex justify-between h-[60vh]">

        {/* Div for the upload functionality */}
        <div
          className=" p-4 w-[355px] h-[355px] aspect-video flex flex-col justify-center items-center border-[1px] border-solid border-[rgba(0,0,0,1)] rounded-2xl cursor-pointer "
          onClick={() => inputRef.current.click()}
        >
          <div
            className="h-[300px] w-[300px]  flex flex-col justify-center items-center border-[2px] border-dotted border-[rgba(45,46,47,1)] rounded-2xl  cursor-pointer"
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            
            {selectedVideo ? (
              <aside className=" top-10 left-5 w-[300px]  ">
                <video className="aspect-video rounded-md" src={URL.createObjectURL(selectedVideo)} controls></video>
              </aside>
            )
            :
            <>
              <BiArrowFromBottom className="text-slate-400 w-[90%] h-[90%] rounded-sm" />
              <p className=" text-white bold ">Browse files to upload</p>

            </>}

          </div>
        </div>

        {/* Div for the text  */}
        <div className="flex flex-col justify-center items-center text-white font-bold gap-4">
          <h3 className="text-2xl ">Drag and drop video files to upload</h3>
          <p className="text-l">Your videos will be private until you publish them.</p>
          <div className="space-x-2">
            <button className="bg-cyan-500 w-[10rem] rounded-md p-4 text-lg uppercase">{language}</button>
            <button
              className="bg-cyan-500 w-[10rem] rounded-md p-4 text-lg uppercase"
              onClick={() => inputRef.current.click()}
            >
              Select Media
            </button>
          </div>
        </div>

      </div>
    
  );
}
