import { useState } from "react";
import Image from "next/image";

const preferences = [
  { label: "Ease stress and anxiety", icon: "/stress1.png" },
  { label: "Grow personally", icon: "/leaf.png" },
  { label: "Sleep better", icon: "/sleep.png" },
  { label: "Sharpen focus", icon: "/sharpen.png" },
  { label: "Explore more", icon: "/explore.png" },
];

const questionnaireData = {
  "Ease stress and anxiety": [
    { question: "When do you feel most stressed?", options: ["Morning", "Afternoon", "Evening", "All day"] },
    { question: "What helps you de-stress?", options: ["Breathing", "Talking", "Nature walk", "Music"] },
    { question: "How often do you feel anxious?", options: ["Rarely", "Sometimes", "Often", "Daily"] },
  ],
  "Sleep better": [
    { question: "What is your biggest sleep challenge?", options: ["Falling asleep", "Staying asleep", "Waking up too early", "Other"] },
    { question: "What helps you relax before bed?", options: ["Music", "Breathing", "Reading", "Warm shower"] },
    { question: "When do you go to bed?", options: ["Before 10 PM", "10-11 PM", "11 PM - 12 AM", "After 12 AM"] },
  ],
  "Grow personally": [
  {
    question: "What area of growth matters most to you?",
    options: ["Emotional intelligence", "Self-discipline", "Creativity", "Confidence"],
  },
  {
    question: "How do you prefer to reflect?",
    options: ["Journaling", "Meditation", "Talking to others", "Thinking alone"],
  },
  {
    question: "Which describes your personal growth style?",
    options: ["Goal-driven", "Free-flowing", "Structured", "Intuitive"],
  },
],
  "Sharpen focus": [
  {
    question: "When is your focus strongest?",
    options: ["Morning", "Afternoon", "Evening", "Late night"],
  },
  {
    question: "What usually distracts you the most?",
    options: ["Social media", "People", "Noise", "Multitasking"],
  },
  {
    question: "What helps you regain focus?",
    options: ["Breathing", "To-do lists", "Breaks", "Silence"],
  },
],
  "Explore more": [
  {
    question: "What do you enjoy exploring most?",
    options: ["Ideas", "Places", "Cultures", "Yourself"],
  },
  {
    question: "How do you prefer to explore?",
    options: ["Reading", "Traveling", "Talking to people", "Trying new things"],
  },
  {
    question: "What inspires your curiosity?",
    options: ["Art & creativity", "Science & facts", "Spirituality", "Human behavior"],
  },
],

};

const PreferenceSelection = ({ selected, onSelect, onNext }) => {
  const handleToggle = (label) => {
    onSelect((prev) =>
      prev.includes(label)
        ? prev.filter((l) => l !== label)
        : [...prev, label]
    );
  };

  return (
    <div className="max-w-lg mx-auto text-center py-12 space-y-6">
      <h2 className="text-xl font-bold">Searching for your Safe-Space?</h2>
      <p className="text-sm text-gray-400">Select all that apply</p>
      <div className="space-y-4">
        {preferences.map((pref) => (
          <div
            key={pref.label}
            onClick={() => handleToggle(pref.label)}
            className={`flex items-center gap-4 px-4 py-3 rounded-full border transition cursor-pointer ${
              selected.includes(pref.label)
                ? "border-green-400 bg-green-100 text-black"
                : "border-gray-300 bg-white hover:bg-gray-100"
            }`}
          >
            <Image src={pref.icon} alt={pref.label} width={24} height={24} />
            <span className="text-sm sm:text-base">{pref.label}</span>
          </div>
        ))}
      </div>

      <button
        disabled={selected.length === 0}
        onClick={onNext}
        className={`mt-6 px-6 py-2 rounded-full font-medium transition ${
          selected.length > 0
            ? "bg-black text-white hover:bg-gray-800"
            : "bg-gray-300 text-white cursor-not-allowed"
        }`}
      >
        Continue
      </button>
    </div>
  );
};

const Questionnaire = ({ preference, onComplete }) => {
  const questions = questionnaireData[preference];
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const currentQuestion = questions[currentQIndex];

  const handleNext = () => {
    if (!selectedOption) return;
    const updatedAnswers = [...answers, selectedOption];
    setAnswers(updatedAnswers);
    setSelectedOption(null);

    if (currentQIndex + 1 < questions.length) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      onComplete(preference, updatedAnswers);
    }
  };

  return (
    <div className="max-w-lg mx-auto text-center py-12 space-y-6">
      <p className="text-sm text-gray-400">
        Question {currentQIndex + 1} of {questions.length}
      </p>
      <h2 className="text-lg font-semibold">{currentQuestion.question}</h2>
      <div className="space-y-3">
        {currentQuestion.options.map((opt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedOption(opt)}
            className={`p-3 rounded-full border cursor-pointer transition ${
              selectedOption === opt
                ? "bg-gray-300 text-black border-gray-400"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            {opt}
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={!selectedOption}
        className={`mt-6 px-10 py-2 rounded-full font-medium transition ${
          selectedOption ? "bg-black text-white hover:bg-gray-800" : "bg-gray-300 text-white cursor-not-allowed"
        } ${currentQIndex === questions.length - 1 && "border-green-400 bg-green-400 hover:bg-green-500"}`}
      >
        {currentQIndex === questions.length - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
};

const OnboardingFlow = () => {
  const [step, setStep] = useState(0); 
  const [selectedPrefs, setSelectedPrefs] = useState([]);
  const [currentPrefIndex, setCurrentPrefIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleComplete = (pref, answersSet) => {
    setAnswers((prev) => ({ ...prev, [pref]: answersSet }));
    if (currentPrefIndex + 1 < selectedPrefs.length) {
      setCurrentPrefIndex(currentPrefIndex + 1);
    } else {
      
      console.log("FINAL ANSWERS:", answers);
      
    }
  };

  return (
    <div className=" bg-gray-100 px-6 rounded-4xl">
      {step === 0 ? (
        <PreferenceSelection
          selected={selectedPrefs}
          onSelect={setSelectedPrefs}
          onNext={() => setStep(1)}
        />
      ) : (
        <Questionnaire
          preference={selectedPrefs[currentPrefIndex]}
          onComplete={handleComplete}
        />
      )}
    </div>
  );
};

export default OnboardingFlow;
