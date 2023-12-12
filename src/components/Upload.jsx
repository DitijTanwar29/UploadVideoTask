import { useEffect, useRef, useState } from "react"
import { useDropzone } from "react-dropzone"
// import { FiUploadCloud, FiDelete } from "react-icons/fi"
// import { useSelector } from "react-redux"
import { BiArrowFromBottom } from "react-icons/bi";
import { AiFillFileImage } from "react-icons/ai"
import "video-react/dist/video-react.css"
import { Player } from "video-react"
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {ProgressBar} from "./ProgressBar"


export default function Upload({
  // name,
  // label,
  // register,
  // setValue,
  // errors,
  // video = false,
  // viewData = null,
  // editData = null,
  selectedLang
}) {



//   const { course } = useSelector((state) => state.course)
//   const [selectedFile, setSelectedFile] = useState(null)
//   const [previewSource, setPreviewSource] = useState(
//     viewData ? viewData : editData ? editData : ""
//   )
//   const inputRef = useRef(null)

//   const onDrop = (acceptedFiles) => {
//     const file = acceptedFiles[0]
//     console.log("accepted file - ", file)
//     if (file) {
//       previewFile(file)
//       setSelectedFile(file)
//     }
//   }

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     accept: !video
//       ? { "image/*": [".jpeg", ".jpg", ".png"] }
//       : { "video/*": [".mp4"] },
//     onDrop,
//   })

//   const previewFile = (file) => {
//     console.log("preview file data from frontend - ",file)
//     const reader = new FileReader()
//     reader.readAsDataURL(file)
//     reader.onloadend = () => {
//       setPreviewSource(reader.result)
//     }
//   }

// //   useEffect(() => {
// //     register(name, { required: true })
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [register])

// //   useEffect(() => {
// //     setValue(name, selectedFile)
// //     console.log("selectedFile - ", selectedFile);;
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [selectedFile, setValue])


  const {language} = useSelector((state) => state.language);
  const [video,setVideo] = useState(null);
  const [fileName, setFileName] = useState("No file selected");
  console.log(language)

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center  bg-black ">

      <div className="w-[80%] h-[80%] flex justify-center items-evenly bg-gray-700 rounded-md gap-20 mt-24 p-4 ">
        
        {/* <ProgressBar/> */}
        
        {/* Div for the upload functionality */}
        <div className="w-[355px] h-[355px] flex flex-col justify-center items-center border-[1px] border-solid border-[rgba(0,0,0,1)] rounded-md -ml-48  mt-20 cursor-pointer "
            // onClick={() => { document.querySelector(".input-field").click()}}
        >
          <form className="  w-[300px] h-[300px] flex flex-col justify-center items-center border-[2px] border-dashed border-[rgba(45,46,47,1)] rounded-md  cursor-pointer"
            onClick={() => { document.querySelector(".input-field").click()}}
          >
            <input type="file" accept="mp4/*" className="input-field" hidden
              onChange={({ target: {files} }) => {
                files[0] &&  setFileName(files[0].name)
                if(files){
                  setVideo(URL.createObjectURL(files[0]))
                }
              }}
            />

            {video ?
                <video className="w-[100%] h-[100%]"  controls
                >
                <source src={video}/>
                </video>
            :
            <>
              <BiArrowFromBottom className="text-slate-400 w-[90%] h-[90%] rounded-sm"/>
              <p className=" text-white bold ">Browse files to upload</p>
            </>
            
            }
            
          </form>
           
          <section className="w-[355px] flex justify-between items-center place-self-start
            ml-6  text-white cursor-pointer">
            
              <AiFillFileImage className="text-slate-400"/>
              <span className="flex items-center">
                {fileName} -
              </span>
                <MdDelete className="text-slate-400"
                  onClick={() => {
                    setFileName("")
                    setVideo(null)
                  }}
                />

          </section> 
            {/* <section className="flex items-center cursor-pointer">
                <p>Delete</p>
            </section> */}
          
          </div>
        

       {/* Div for the text  */}
        <div className="flex flex-col justify-center items-center text-white font-bold gap-4">
          <h3 className="text-2xl ">Drag and drop video files to upload</h3>
          <p className="text-l">Your videos will be private until you publish them.</p>
          <button className="  bg-cyan-500 w-[10rem] rounded-md p-4 text-lg uppercase">{language}</button>
        </div>
      </div>


         




    </div>

























    // <div className="flex flex-col space-y-2">
    //   <label className="text-sm text-richblack-5" htmlFor={name}>
    //     {label} {!viewData && <sup className="text-pink-200">*</sup>}
    //   </label>
    //   <div
    //     className={`${
    //       isDragActive ? "bg-richblack-600" : "bg-richblack-700"
    //     } flex min-h-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-dotted border-richblack-500`}
    //   >
    //     {previewSource ? (
    //       <div className="flex w-full flex-col p-6">
    //         {!video ? (
    //           <img
    //             src={previewSource}
    //             alt="Preview"
    //             className="h-full w-full rounded-md object-cover"
    //           />
    //         ) : (
    //           <Player aspectRatio="16:9" playsInline src={previewSource} />
    //         )}
    //         {!viewData && (
    //           <button
    //             type="button"
    //             onClick={() => {
    //               setPreviewSource("")
    //               setSelectedFile(null)
    //               setValue(name, null)
    //             }}
    //             className="mt-3 text-richblack-400 underline"
    //           >
    //             Cancel
    //           </button>
    //         )}
    //       </div>
    //     ) : (
    //       <div
    //         className="flex w-full flex-col items-center p-6"
    //         {...getRootProps()}
    //       >
    //         <input {...getInputProps()} ref={inputRef} />
    //         <div className="grid aspect-square w-14 place-items-center rounded-full bg-pure-greys-800">
    //           <FiUploadCloud className="text-2xl text-yellow-50" />
    //         </div>
    //         <p className="mt-2 max-w-[200px] text-center text-sm text-richblack-200">
    //           Drag and drop an {!video ? "image" : "video"}, or click to{" "}
    //           <span className="font-semibold text-yellow-50">Browse</span> a
    //           file
    //         </p>
    //         <ul className="mt-10 flex list-disc justify-between space-x-12 text-center  text-xs text-richblack-200">
    //           <li>Aspect ratio 16:9</li>
    //           <li>Recommended size 1024x576</li>
    //         </ul>
    //       </div>
    //     )}
    //   </div>
    //   {errors[name] && (
    //     <span className="ml-2 text-xs tracking-wide text-pink-200">
    //       {label} is required
    //     </span>
    //   )}
    // </div>



  )
}