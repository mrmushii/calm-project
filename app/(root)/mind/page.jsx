import React from "react";
import Mind from "@/components/folder/Mind";
import ExploreMind from "@/components/folder/ExploreMind";
import Tab from "@/components/Tab";
import Subscription from "@/components/Subscription";
import Aaccordion from "@/components/Accordion";
const mindTabs = [
  "Guided Meditations",
  "Mindful Practices",
  "Focus Music",
  "Daily Programs"
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

const minds = [
  {
    title:
      "Calm your mind with mindfulness exercises, relaxation techniques, and soothing soundscapes for mental clarity.",
    description:
      "Experience better focus and mental well-being with guided mindfulness exercises, exclusive mental clarity music, and calming sounds. With hundreds of options to choose from, you’ll find peace and clarity with ease. Just press play and relax.",
    image: "/mind-hero.png",
    classname: "bg-gradient-to-b from-[#214D72] to-[#3A8FD7]",
    textClr:
      "bg-gradient-to-r from-[#A062F3] to-[#322AA7] bg-clip-text text-transparent",

    btnDesc: "Improve your mental clarity for free",
    bgClr: "bg-[#D9D9D9]",
  },
];

const tab = [
  {
    heading: "Find peace through mindfulness",
    desc: "Choose a soothing voice to guide you through mindfulness meditations, helping you let go of stress, focus your mind, and find clarity. These sessions will help you achieve a state of calm awareness.",
    btn: "Free Sample",
    musicName: "Mindful Moments",
    subheading: "Relax your Mind and Release Stress with Guided Meditation",
    musicAuthor: "Narrated by CalmVoice",
    imageUrl: "/mindTab1.png",
    audioSrc: "/audio/stress.mp3"
  },
  {
    heading: "Sounds of nature to calm the mind",
    desc: "Immerse yourself in calming nature sounds, designed to help you focus and center your thoughts. Whether it's the sound of a forest, ocean waves, or a peaceful stream, these soundscapes bring mental relaxation.",
    btn: "Try Sound",
    musicName: "Forest Breeze",
    subheading: "Center Your Thoughts with Nature’s Healing Soundscapes",
    musicAuthor: "Nature’s Serenade",
    imageUrl: "/mindTab1.png",
    audioSrc: "/audio/stress.mp3"
  },
  {
    heading: "Ambient music to focus the mind",
    desc: "Listen to calming instrumental music and ambient tones that foster concentration and mental clarity. Perfect for work, study, or relaxing after a long day, these melodies will keep your mind at ease.",
    btn: "Listen Now",
    musicName: "Focused Intentions",
    subheading: "Achieve Mental Clarity with Soothing Instrumental Music",
    musicAuthor: "MentalFlow Collective",
    imageUrl: "/mindTab1.png",
    audioSrc: "/audio/stress.mp3"
  },
  {
    heading: "Track your mental health journey",
    desc: "Monitor your mental well-being and gain insights into your mindfulness practices. Use our tools to track your mood, thoughts, and progress, helping you stay balanced and centered.",
    btn: "Start Tracking",
    musicName: "Clarity Awaits",
    subheading: "Track Your Mental Health with Mindfulness Practices",
    musicAuthor: "MindfulSoul",
    imageUrl: "/mindTab1.png",
    audioSrc: "/audio/stress.mp3"
  }
];




const page = () => {
  return (
    <>
    <div className="flex flex-col gap-48">
      <Mind mind = {minds} />
      <Tab grad = {"from-[#A062F3] to-[#322AA7]"} tabName = {mindTabs} tabData = {tab} />
      <ExploreMind />
      <Subscription grad = {"from-[#A062F3] to-[#322AA7]"}/>
      
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
