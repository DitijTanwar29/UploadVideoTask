import React from "react";
import HorizontalNonLinearStepper from "./HorizontalNonLinearStepper";
import Upload from "./Upload";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import Details from "./Details";
import { FaArrowLeft } from "react-icons/fa";
import SearchBar from "./SearchBar";
import Heading from "./Heading";

const Layout = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="min-h-screen pt-5  bg-black">

      <SearchBar/>
      <Heading/>
      <div className="mx-auto w-[80%] h-[70%] bg-zinc-800 rounded-md  py-10 px-20 mt-10 relative ">
        <HorizontalNonLinearStepper
          activeStep={activeStep}
          completed={completed}
        />
        {activeStep === 0 && (
          <Upload
            selectedVideo={selectedVideo}
            setSelectedVideo={setSelectedVideo}
          />
        )}

        {
            activeStep === 1 && (
                <Details/>
            )
        }

        {selectedVideo && (
          <button
            onClick={() => {
              if (activeStep === 3) return;
              setActiveStep(activeStep + 1);
            }}
          >
            <FaArrowRight className="text-white absolute right-10" size={25} />
          </button>
        )}

        {activeStep > 0 && (
          <button
            onClick={() => {
              
              setActiveStep(activeStep - 1);
            }}
          >
            <FaArrowLeft className="text-white absolute left-10" size={25} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Layout;
