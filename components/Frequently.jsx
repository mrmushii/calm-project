import React from "react";
import { Button } from "./ui/button";

import Aaccordion from "./Accordion";
import Subscription from "./Subscription";
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


const medicationData = [
  {
    name: "What is a Meditation?",
    ans: "Meditation is a practice that helps you focus your mind, reduce stress, and build awareness. It often involves breathing techniques, visualization, or mindfulness.",
  },
  {
    name: "What is mindfulness?",
    ans: "Mindfulness is being fully present in the moment—aware of your thoughts, feelings, and surroundings without judgment. It helps reduce stress and improve emotional balance.",
  }
];

const stressData = [
  {
    name:"What causes stress and anxiety?",
    ans: "Stress and anxiety can be triggered by work pressure, personal challenges, trauma, or even lifestyle habits. They’re natural responses to overwhelming situations.",
  },
  {
    name:"How can I handle stress and anxiety?",
    ans: "Regular meditation, physical activity, deep breathing, journaling, and healthy sleep routines can help. Safe Space offers tools to support you through this journey.",
  },
];


const sleepData = [
  {
    name:"Why do I have trouble sleeping?",
    ans: "Sleep issues can stem from stress, screen time, inconsistent schedules, or medical conditions. Understanding the cause is key to improving sleep quality.",
  },
  {
    name:"How can I sleep better?",
    ans: "Try a consistent bedtime, reduce screen use before bed, and practice calming rituals like meditation or listening to soothing soundscapes—like the ones in Safe Space.",
  },
];


const soundData = [
  {
    name: "How do different sound frequencies effect your brain?",
    ans: "Certain frequencies, like binaural beats or theta waves, can encourage relaxation, focus, or even deeper sleep by syncing with your brain's natural rhythms.",
  },
  {
    name: "How can the soundscape evoke a sense of peace and tranquility?",
    ans: "Soundscapes use nature sounds, soft tones, and calming rhythms to create an immersive environment that soothes the mind and reduces stress.",
  },
];


const Frequently = () => {
  return (
    <>
    {/* Header Text */}
    <div className="text-[28px] sm:text-[32px] md:text-[36px] flex flex-col items-center text-center px-4">
      <h1>Start your free Trial of</h1>
      <h1>Safe Space</h1>
    </div>

    {/* Plan Card */}
    

    {/* Subscription Info + Button */}
    <Subscription grad = {"from-[#4972E1] to-[#DB6FEE]"}/>

    {/* FAQ Section */}
    <section className="mt-20 sm:mt-28 px-4">
      <h1 className="text-[28px] sm:text-[32px] md:text-[40px] text-center mb-6">
        Frequently Asked Questions
      </h1>
      <div className="space-y-6">
        <Aaccordion datas={generalData} name="GENERAL" />
        <Aaccordion datas={medicationData} name="MEDITATION AND MINDFULNESS" />
        <Aaccordion datas={stressData} name="STRESS & ANXIETY" />
        <Aaccordion datas={sleepData} name="SLEEP" />
        <Aaccordion datas={soundData} name="SOUNDSCAPES" />
      </div>
    </section>
  </>
  );
};

export default Frequently;
