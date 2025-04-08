import Sidebar from "@/components/dashboard/Sidebar";
import Image from "next/image";
import { FaHome, FaBed, FaRunning, FaUser } from "react-icons/fa";
import { GiMeditation, GiCoffeeCup, GiChatBubble } from "react-icons/gi";
import { MdOutlineSpaceDashboard, MdOutlineGraphicEq } from "react-icons/md";

const navItems = [
  { label: "Home", icon: <FaHome className="text-green-300 text-xl" /> },
  { label: "Meditate", icon: <GiMeditation className="text-cyan-300 text-xl" /> },
  { label: "Sleep", icon: <FaBed className="text-purple-300 text-xl" /> },
  { label: "Work", icon: <GiCoffeeCup className="text-orange-400 text-xl" /> },
  { label: "Thoughts", icon: <GiChatBubble className="text-white text-xl" /> },
  { label: "Move", icon: <FaRunning className="text-pink-500 text-xl" /> },
  { label: "Profile", icon: <FaUser className="text-purple-400 text-xl" /> },
];

const dummySections = [
  {
    title: "Meditate",
    items: ["Calm Breathing", "Focus Session", "Mindful Body Scan"]
  },
  {
    title: "Sleep",
    items: ["Night Sounds", "Deep Sleep", "Gentle Rain"]
  },
  {
    title: "Work",
    items: ["Productivity Boost", "Background Lo-Fi", "Calm Office"]
  },
  {
    title: "Thoughts",
    items: ["Journaling", "Gratitude", "Reflect & Release"]
  },
  {
    title: "Move",
    items: ["Morning Stretch", "Light Yoga", "Evening Walk"]
  }
];

const Page = () => {
  return (
    <div className="flex">
      <Sidebar navItems={navItems} />
      <main
        className="flex-1 min-h-screen px-4 sm:px-12 pb-20 right-7"
        style={{ backgroundImage: "url('/dashBoard.png')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="flex justify-between items-center p-4 bg-[#1a3a6b]">
          <div className="text-white text-sm sm:text-base">Good Evening, User</div>
          <div className="flex items-center gap-4">
            <MdOutlineSpaceDashboard className="text-purple-300 text-xl" />
            <MdOutlineGraphicEq className="text-purple-300 text-xl" />
            <button className="bg-white text-black text-xs px-4 py-1 rounded-full">Try Safe Space for Free</button>
          </div>
        </div>

        <div className="space-y-12 mt-10">
          {dummySections.map((section, index) => (
            <div key={index}>
              <h2 className="text-white text-xl font-semibold mb-4">{section.title}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="h-28 rounded-lg bg-gray-300 opacity-90 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-center text-black font-medium px-2"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;