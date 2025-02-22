import React from 'react'
import { FaPlayCircle } from "react-icons/fa";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-36 px-12 text-white absolute bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-5 text-lg w-1/2'>{overview}</p>
      <div className='flex'>
        <button 
          className='flex bg-white text-black font-bold p-3 px-10 text-lg hover:bg-opacity-80 rounded-md'
        >
            <FaPlayCircle className='h-6 pt-[6px]'/> <span className='ml-[6px]'>Play</span>
        </button>
        <button
          className='bg-gray-600 mx-2 text-white font-bold p-3 px-8 text-lg bg-opacity-50 rounded-md'
        >
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
