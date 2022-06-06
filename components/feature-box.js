import React from 'react'
import Lottie from 'react-lottie'
export default function FeatureBox({width,height,lottieData,title,body}) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lottieData,
        rendererSettings: {
          preserveAspectRation: "xMidYMid slice",
        },
      };
  return (
    <div className='flex flex-col justify-center items-center md:w-1/6 text-center'>
        <div className='h-40 w-full'>
        <Lottie  options={defaultOptions} />
        </div>
       
        <h1 className='font-bold text-2xl'>{title}</h1>
        <p>{body}</p>
    </div>
  )
}
