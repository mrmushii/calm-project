
import Aaccordion from "@/components/Accordion";
import ExploreSleep from "@/components/folder/ExploreSleep";
import Sleep from "@/components/folder/Sleep";
import Subscription from "@/components/Subscription";

import Tab from "@/components/Tab";

import React from "react";

const sleepTabs = [
  "Sleep Meditations", "Soundscapes", "Music", "Sleep Tracking"
];

const generalData = [
  {
    name: "What is Safe Space?",
    ans: "Safe Space is a digital sanctuary designed to support your mental wellness through guided meditations, sleep aids, stress relief techniques, and calming soundscapes.",
  },
  {
    name: "What is included in our Subscription?",
    ans: "Your subscription gives you unlimited access to guided meditations, sleep support tools, anxiety-reducing exercises, curated soundscapes, and regular wellness updates.",
  },
  {
    name: "How do I get started?",
    ans: "Simply download the app, sign up, and start exploring. You can try some free sessions or subscribe for full access to our wellness library.",
  },
  {
    name: "What devices support Safe Space?",
    ans: "Safe Space works on iOS, Android, tablets, and most modern web browsers. Just ensure you have an internet connection for streaming content.",
  },
  {
    name: "How do I cancel?",
    ans: "You can cancel anytime through your app store or account settings. Your access will continue until the end of the current billing cycle.",
  },
];

const sleeps = [
  {
    title:
      "Fall asleep easier with sleep meditations, relaxing music, and calming soundscapes for your best rest.",
    description:
      "Experience better sleep with guided meditations, exclusive sleep music, and calming sounds. With hundreds of options to choose from, you’ll drift off to dreamland effortlessly. Just press play and relax.",
    image: "/sleep-hero.png",
    classname: "bg-gradient-to-b from-[#214D72] to-[#3A8FD7]",
    textClr:
      "bg-gradient-to-r from-[#A062F3] to-[#322AA7] bg-clip-text text-transparent",

    btnDesc: "Improve your sleep for free",
    bgClr: "bg-[#D9D9D9]",
  },
];

const tab = [
  {
    heading: "A bit of guidance to help you drift off",
    desc: "Choose a soothing voice to guide you through Calm's Sleep Meditations, featuring mindfulness techniques like body scans, gratitude exercises, and progressive muscle relaxation. Let them lead you to a peaceful night's rest.",
    btn: "Free Sample",
    musicName: "Fall into Dreams",
    subheading: "Unwind into Sleep with Calming Breathwork and Body Awareness",
    musicAuthor: "Narrated by Lofi",
    imageUrl: "/sleepTab1.png",
    audioSrc: "/audio/stress.mp3"
  },
  {
    heading: "Nature’s lullaby to ease your mind",
    desc: "Immerse yourself in the calming sounds of nature — from gentle rainfall to ocean waves. Soundscapes are designed to quiet your thoughts and create a peaceful sleep environment.",
    btn: "Try Sound",
    musicName: "Rain on Leaves",
    subheading: "Unwind into Sleep with Calming Breathwork and Body Awareness",
    musicAuthor: "Nature’s Orchestra",
    imageUrl: "/sleepTab1.png",
    audioSrc: "/audio/stress.mp3"
  },
  {
    heading: "Soft melodies to help you unwind",
    desc: "Listen to soothing instrumental music and ambient tones, crafted to help your body relax and your mind prepare for rest. Perfect for winding down after a long day.",
    btn: "Listen Now",
    musicName: "Midnight Haze",
    subheading: "Unwind into Sleep with Calming Breathwork and Body Awareness",
    musicAuthor: "Dreamtone Collective",
    imageUrl: "/sleepTab1.png",
    audioSrc: "/audio/stress.mp3"
  },
  {
    heading: "Track your sleep, know your rest",
    desc: "Monitor your sleep patterns and gain insights into your nightly rest. Use our tools to build healthier sleep habits and wake up feeling refreshed.",
    btn: "Start Tracking",
    musicName: "Gentle Awakening",
    subheading: "Unwind into Sleep with Calming Breathwork and Body Awareness",
    musicAuthor: "Silent Echo",
    imageUrl: "/sleepTab1.png",
    audioSrc: "/audio/stress.mp3"
  }
];

 

const page = () => {
  
  return (

    <>
      <div className="flex flex-col gap-48">
      <Sleep sleeps={sleeps}/>
      <Tab grad = {"from-[#214D72] to-[#3A8FD7]"} tabName = {sleepTabs} tabData = {tab} />
      <ExploreSleep />
      <Subscription grad = {"from-[#214D72] to-[#3A8FD7]"}/>
      
      <div>
      <h1 className="text-[28px] sm:text-[32px] md:text-[40px] text-center mb-6">
        Frequently Asked Questions
      </h1>
      <Aaccordion datas={generalData}  />
      </div>
      </div>
    </>
  );

};

export default page;
