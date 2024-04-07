import React from "react";
import { FaArrowRight } from "react-icons/fa";

function TechComp(props) {
  const { subHead1, subHead2, mainHead1, mainHead2, para1, para2 } =
    props.content;


  return (
    <>
      <div className="  w-1/3 h-72 border-2 border-yellow-400 relative rounded-lg">
        <div className="absolute top-1 left-2">
          <h5 className="font-medium"> {subHead1} </h5>
        </div>

        <div className="absolute top-1 right-2">
          <h5 className="font-medium ">{subHead2}</h5>
        </div>

        <div className="absolute top-6 left-2 text-left my-2 py-2">
          <h3 className=" text-xl text-yellow-400 font-bold">{mainHead1}</h3>
          <p className=" text-lg">{para1}</p>
          <br />
          <h3 className="text-xl text-yellow-400 font-bold ">{mainHead2}</h3>
          <p className="text-lg px-1">{para2}</p>
        </div>

        <div className=" absolute  right-4 bottom-1 flex justify-center items-center gap-2">
          <h6>Learn More</h6>
          <FaArrowRight />
        </div>
      </div>
    </>
  );
}

export default TechComp;
