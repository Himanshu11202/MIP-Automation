import React from "react";

interface YoutubeVideoProps {
  src: string;
}

const YoutubeVideo = ({ src }: YoutubeVideoProps) => {
  return (
    <div className="w-full  max-w-3xl mx-auto aspect-video rounded-lg md:rounded-xl overflow-hidden my-10 self-center">
      <iframe
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default YoutubeVideo;
