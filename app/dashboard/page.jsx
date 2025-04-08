import DashboardNav from "@/components/dashboard/DashboardNav";
import Sidebar from "@/components/dashboard/Sidebar";
import Image from "next/image";

const navItems = [
  { label: "Home", img: "/home.png" },
  {
    label: "Meditate",
    img: "/mediate.png",
  },
  { label: "Sleep", img: "/moon-stars.png" },
  { label: "Work", img: "/coffee-cup.png" },
  { label: "Thoughts", img: "/thoughts.png" },
  { label: "Move", img: "/move.png" },
  { label: "Profile", img: "/profile.png" },
];

const dummySections = [
  {
    title: "Meditate",
    items: ["Calm Breathing", "Focus Session", "Mindful Body Scan"],
  },
  {
    title: "Sleep",
    items: ["Night Sounds", "Deep Sleep", "Gentle Rain"],
  },
  {
    title: "Work",
    items: ["Productivity Boost", "Background Lo-Fi", "Calm Office"],
  },
  {
    title: "Thoughts",
    items: ["Journaling", "Gratitude", "Reflect & Release"],
  },
  {
    title: "Move",
    items: ["Morning Stretch", "Light Yoga", "Evening Walk"],
  },
];

const Page = () => {
  return (
    <div className="flex">
      <Sidebar navItems={navItems} />
      <main
        className="flex-1 min-h-screen pb-20 right-7"
        style={{
          backgroundImage: "url('/dashBoard.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <DashboardNav />
        <div className="space-y-12 mt-32 px-4 sm:px-12">
          <h2 className="text-white text-sm sm:text-base md:text-2xl">
            Good Evening, User
          </h2>

          {dummySections.map((section, index) => (
            <div key={index}>
              <h2 className="text-white text-xl font-semibold mb-4">
                {section.title}
              </h2>
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
