"use client";

import React, { useRef, useState, useEffect } from "react";
import { Volume2, MoreVertical, Play, Pause } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Button } from "./ui/button";

const Tab = ({ tabName, tabData,grad }) => {
  return (
    <div className="flex justify-center px-4 py-8">
      <Tabs
  defaultValue={tabName[0].toLowerCase().replace(/\s+/g, "-")}
  className="w-full max-w-6xl bg-[#F2F2F2] rounded-2xl p-4 sm:p-6 mx-auto max-sm:w-full "
>
  {/* Tabs */}
  <TabsList className="flex flex-wrap justify-center items-center mx-auto bg-white p-1 rounded-full mb-6 gap-2">
  {tabName.map((name, index) => (
    <TabsTrigger
      key={index}
      value={name.toLowerCase().replace(/\s+/g, "-")}
      className={`text-sm sm:text-base px-4 py-3 rounded-full data-[state=active]:bg-gradient-to-b [state=active]:${grad} data-[state=active]:text-black transition font-medium`}
    >
      {name}
    </TabsTrigger>
  ))}
</TabsList>


  {/* Tab Content */}
  {tabData.map((data, index) => (
    <TabsContent
      key={index}
      value={tabName[index].toLowerCase().replace(/\s+/g, "-")}
    >
      <AudioTabContent data={data} />
    </TabsContent>
  ))}
</Tabs>

    </div>
  );
};

const AudioTabContent = ({ data }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    audio?.addEventListener("timeupdate", handleTimeUpdate);
    return () => audio?.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    const handleEnded = () => setIsPlaying(false);
    audio?.addEventListener("ended", handleEnded);
    return () => audio?.removeEventListener("ended", handleEnded);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-4 sm:px-6">
      {/* Left Text Content */}
      <div className="flex-1 space-y-5 max-w-md">
        <h2 className="text-xl font-semibold text-gray-800">
          {data.heading}
        </h2>
        <p className="text-gray-600 text-[15px] leading-relaxed">{data.desc}</p>
        <Button className="hover:bg-[#ffffff9a] bg-white text-black text-sm font-medium px-5 py-2 rounded-full">
          {data.btn}
        </Button>
        <div>
          <p className="font-semibold text-gray-900">{data.musicName}</p>
          <p className="text-sm text-gray-500">Narrated by {data.musicAuthor}</p>
        </div>

        {/* Audio Player */}
        <div className="flex items-center justify-between w-full max-w-md bg-white rounded-full p-2 shadow-md">
          {/* Play / Pause Button */}
          <button onClick={togglePlay} className="p-2 rounded-full hover:bg-gray-100">
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>

          {/* Waveform Progress */}
          <div className="flex-1 mx-2 flex items-center justify-center gap-[2px] border-x border-gray-300 px-4 relative">
            {Array.from({ length: 11 }).map((_, i) => (
              <div
                key={i}
                className="w-[2px] bg-black rounded-full transition-all duration-300"
                style={{
                  height: `${(Math.sin(i) + 1.5) * 8}px`,
                  opacity: i === 5 ? 1 : 0.8,
                }}
              />
            ))}
            <div
              className="absolute bottom-0 left-0 h-1 bg-blue-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Volume Icon */}
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Volume2 className="w-5 h-5" />
          </button>

          {/* More Options */}
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <MoreVertical className="w-5 h-5" />
          </button>

          {/* Audio Element */}
          <audio ref={audioRef} src={data.audioSrc || "/audio/sample.mp3"} preload="auto" />
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative flex-1 max-w-md">
        <div className="rounded-[36px] overflow-hidden shadow-2xl">
          <Image
            src={data.imageUrl || "/sleepTab1.png"}
            alt="Phone Screenshot"
            width={400}
            height={900}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay Text */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center px-4">
          <h3 className="text-lg font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
            {data.musicName}
          </h3>
          <p className="text-xs max-w-xs break-words">
            {data.subheading}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tab;
