import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-10 gap-2 ">
        <div className="w-1/2">
          <img src="/error bg.png" alt="error png" />
        </div>

        <div>
          <h1 className="text-4xl font-bold">Seems Like You Are Lost.</h1>
          <p className="text-center  text-lg py-1 font-medium">
            {" "}
            Get Back Home. Co-ordinates Are Below.
          </p>
        </div>

        <Link to="/">
          <button className=" bg-yellow-400  my-2 px-4 py-1 rounded-sm hover:bg-yellow-300">
            Home
          </button>
        </Link>
      </div>
    </>
  );
}

export default Error