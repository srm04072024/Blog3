import React from "react";
import { Button, Input } from "../index";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <section className=" w-[full] py-28 lg:py-28 xl:py-36 shadow-md mt-16">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 justify-center">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to{" "}
              <span className=" px-3 py-1 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 rounded-lg text-white lowercase">
                Bloggers
              </span>
              <span className=" bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-500 to-lime-500 italic">
                Point
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-2xl text-center">
              Your platform for sharing ideas, stories, and knowledge. Join our
              community of writers and readers today.
            </p>
          </div>
          <div className="space-x-4">
            <Link to={"/signup"}>
              <Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 uppercase text-white font-bold">
                Sign Up
              </Button>
            </Link>
            <Link to={"/login"}>
              <Button
                textColor="text-white"
                className=" bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-white font-bold"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
