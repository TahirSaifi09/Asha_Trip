import { useState } from "react";

export default function Journey() {
  const [isVideo, setIsVideo] = useState(false);

  function handleVideo() {
    if (isVideo) setIsVideo(false);
    else setIsVideo(true);
    console.log("value", isVideo);
  }
  return (
    <div className="bg-[#ECECF2] px-20 py-10 flex justify-center">
      <div className="w-full rounded-2xl h-screen shadow-xl text-center bg-white">
        <div className="w-full px-80  text-5xl py-8 font-medium">
          <h4>Where Your Journey Begins with Quality and Reliability</h4>
          <p className="text-sm font-medium text-gray-500 py-8">
            Lorem ipsum dolor sit amet consectetur. Nibh vivamus quis risus
            augue odio eget donec leo phasellus. Auctor est aliquam commodo enim
            auctor libero. Cras sed sagittis id in ridiculus amet vel euismod.
            Eu nunc lacus dui natoque. Consequat aenean tristique accumsan
            dictum augue.
          </p>
        </div>
        <div className="w-full px-10  ">
          <button onClick={handleVideo}>
            <img
              src="blog-banner.png"
              alt="Blog Banner"
              className="rounded-3xl"
            />
          </button>
          <video src="airline-ad.mp4" alt="airline-ad" className='${isVideo? "flex" : "hidden"}'></video>
        </div>
      </div>
    </div>
  );
}
