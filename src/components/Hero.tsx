import React from "react"
import bgImg from "../assets/bg-image.jpg"
const Hero = () => {
  return (
    <div className=" h-screen relative flex flex-col justify-center gap-4 text-white">
      <img src={bgImg} className="absolute w-full h-full -z-10" alt="" />
      <h1 className="text-center font-600 text-4xl ">MotorMax</h1>
      <p className="text-center text-lg">
        Best place to find the car of your dream
      </p>
    </div>
  )
}

export default Hero
