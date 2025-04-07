import Aaccordion from "@/components/Accordion";
import ExploreStress from "@/components/folder/ExploreStress";
import Stress from "@/components/folder/Stress";
import Subscription from "@/components/Subscription";
import Tab from "@/components/Tab";
import React from "react";
const stress = [
  {
    title: "Welcome to Tranquil Zone, your resource for stress relief and calm.",
    description:
      "Explore simple tools, meditations, and guided practices to ease anxiety, quiet your mind, and feel better. Whenever you need support, Tranquil Zone is here to help.",
    image: "/stress-hero.png",
    textClr:
      "bg-radial from-[#D6ECF7] to-[#9CE4C2] bg-clip-text text-transparent",
    classname:
      "bg-radial-[at_50%_75%] from-[#D6ECF7] to-[#9CE4C2] text-black",
    btnDesc: "Find relief from stress for free",
    bgClr: "bg-[#D9D9D9]",
  },
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
const stressAnxietyTabs = [
  "Breathing Exercises", "Nature Sounds", "Soothing Music", "Stress Tracking"
];


const tab = [
  {
    heading: "Let go of stress with deep breathing",
    desc: "Learn calming breathing techniques to help you manage stress and anxiety. These exercises will guide you through slow, deep breaths to center your mind and relax your body.",
    btn: "Try a Breathing Exercise",
    musicName: "Breathe In, Breathe Out",
    subheading: "Calm Your Mind with Guided Breathing Techniques",
    musicAuthor: "Narrated by CalmVoice",
    imageUrl: "/stressTab1.png",
    audioSrc: "/audio/stress.mp3"
  },
  {
    heading: "Gentle sounds to ease anxiety",
    desc: "Immerse yourself in calming nature sounds or soft ambient music designed to quiet the mind and reduce anxiety. Let the sounds soothe your nerves and bring you a sense of calm.",
    btn: "Listen Now",
    musicName: "Calm Waters",
    subheading: "Ease Your Anxiety with Nature’s Healing Sounds",
    musicAuthor: "Nature’s Serenade",
    imageUrl: "/stressTab1.png",
    audioSrc: "/audio/stress.mp3"
  },
  {
    heading: "Relax your mind with soothing music",
    desc: "Listen to calming instrumental music that helps reduce stress and anxiety. These soft melodies and ambient tones are designed to bring mental relaxation and promote peace of mind.",
    btn: "Relax Now",
    musicName: "Tranquil Mind",
    subheading: "Ease Your Mind with Gentle, Calming Music",
    musicAuthor: "Silent Harmony",
    imageUrl: "/stressTab1.png",
    audioSrc: "/audio/stress.mp3"
  },
  {
    heading: "Track your stress levels and improve your well-being",
    desc: "Use tools to track your stress and anxiety levels, gaining insights into your emotional patterns. With this information, you can build healthier coping strategies and reduce your overall stress.",
    btn: "Start Tracking",
    musicName: "Healing Soundscape",
    subheading: "Monitor Your Stress Levels and Build Healthy Habits",
    musicAuthor: "MindEase Collective",
    imageUrl: "/stressTab1.png",
    audioSrc: "/audio/stress.mp3"
  }
];

const page = () => {
  return (
    <>
      <div className="flex flex-col gap-48">
      <Stress stress={stress}/>
      <Tab grad = {"from-[#D6ECF7] to-[#9CE4C2]"} tabName = {stressAnxietyTabs} tabData = {tab} />
      <ExploreStress />
      <Subscription grad = {"from-[#D6ECF7] to-[#9CE4C2]"}/>
      
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
