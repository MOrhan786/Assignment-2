"use client";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="h-screen w-{100%}   bg-gradient-to-r from-blue-500 to-pink-500  justify-center ">
      <h1 className="text-center font-bold text-3xl  ">
        <Typewriter
          options={{
            strings: ["Hello", "This is  Hero Section "],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <p className="mt-20 text-center text-lg ">
        This is Hero Section descrition
      </p>
     

    </div>
  );
};

export default Hero;
