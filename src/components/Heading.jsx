import React from 'react'
import { GoUpload } from "react-icons/go";
const Heading = () => {
  return (
    <div className='w-[80%] h-[20%] mx-auto text-white font-medium text-xl flex  justify-between items-center border-zinc-700 border-b-2 p-3 '>
        <div className='flex gap-2'>
            {/* upload wala icon  */}
            <GoUpload className='bg-cyan-500 rounded-full p-1' size={30}/>
            {/* upload ki heading  */}
            <span>Upload new video</span>
        </div>

        <div>3 Step Video Upload</div>

    </div>
  )
}

export default Heading