import React from "react";

export default function BlockquoteComponent() {
  return (
    <>
      {/* <svg
        className="w-8 h-8 mx-auto mb-3 text-gray-800"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      <div className="text-2xl italic font-medium text-gray-900 text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure culpa
        dolores deleniti quo omnis in? Odit laudantium animi sunt cumque commodi
        quasi dignissimos maiores illo.
      </div>
      <div className="mt-4 flex items-center text-center divide-x-2 rtl:divide-x-reverse divide-gray-500 ">
        <cite className="text-gray-900 pe-3 font-bold md:text-xl">
          Mr. Jhone Deo
        </cite>
        <cite className="ps-3 text-sm md:text-lg text-gray-500">
          CEO at Blogger&apos;s Point
        </cite>
      </div> */}
      <div className="relative">
        <svg
          viewBox="0 0 200 200"
          width="full"
          height="full"
          // className="text-lg tracking-widest animate-spin animatedButton"
          className=" text-sm tracking-widest animate-spin"
          style={{ animationDuration: "5000ms" }}
        >
          <path
            id="circlePath"
            fill="none"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
          <text>
            <textPath href="#circlePath" startOffset="0%">
              Write your story •
            </textPath>
            <textPath href="#circlePath" startOffset="50%">
              Share your idea •
            </textPath>
          </text>
        </svg>
        <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-3/5 h-3/5 bg-blue-800 rounded-full flex items-center justify-center">
          <svg
            fill="#ffffff"
            width="60%"
            height="60%"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z" />
          </svg>
        </div>
      </div>
    </>
  );
}
