import React from "react";

function Contact() {
  return (
    <div className="w-full h-screen flex justify-center items-center dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700 dark:text-white ">
      <div className="w-4/5  h-4/5 flex  rounded-3xl border-2  overflow-hidden">
        <div className=" w-3/5 h-full object-cover ">
          <div className=" my-10 mx-10">
            <h1 className="text-4xl font-medium ">Contact Me</h1>
            <p className=" font-normal py-2">
              Hey Folks! You can send messages using the form below. Any tips or feedback to improve UI/UX is welcomed.
              Positive Criticism is also welcomed.
            </p>
          </div>

          <form className=" mx-10 flex flex-col gap-3" action="">
            <label htmlFor="name">Name</label>
            <input
              className="border-2 w-3/5 rounded-lg bg-transparent  border-yellow-400 r py-1 px-2"
              type="text"
              id="name"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              className="border-2 w-3/5 bg-transparent rounded-lg border-yellow-400 py-1 px-2"
              type="email"
              name="email"
              id="email"
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              className="border-2 w-3/5 h-28 rounded-2xl border-yellow-400 px-2 py-2 pt-1 bg-transparent align-top"
              id="message"
              defaultValue=""
            />
            <button className="  w-20 h-8 rounded-2xl text-white  mx-32 my-2 bg-yellow-400 ">
              Submit
            </button>
          </form>
        </div>
        <div className=" w-2/5 h-full object-cover">
          <img
            src="/art.jpeg"
            alt="art background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
