import React from "react";
import { FiArrowRight } from "react-icons/fi";

const DashboardHome = () => {
  return (
    <div className="space-y-8 fade-in text-gray-800 dark:text-gray-200">

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* GPA CARD */}
        <div className="rounded-3xl p-6 bg-pastel-green dark:bg-[#1e293b] shadow-md flex flex-col items-center justify-center">
          <div className="w-32 h-32 bg-white dark:bg-[#0f172a] rounded-full flex items-center justify-center text-4xl font-bold text-pastel-purple dark:text-pink-400">
            A-
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 font-semibold">Current GPA</p>
        </div>

        {/* HOMEWORKS + EXAMS CARD */}
        <div className="rounded-3xl p-6 bg-white dark:bg-[#1e293b] shadow-md">
          <p className="font-bold text-gray-700 dark:text-gray-200 mb-4">Progress</p>

          <div className="flex flex-col gap-3">
            <StatRow title="Homeworks" value="8/10" percent="80" />
            <StatRow title="Exams" value="5/12" percent="42" />
          </div>
        </div>

        {/* OFFER CARD */}
        <div className="rounded-3xl p-6 bg-pastel-pink dark:bg-[#1e1b2e] shadow-md relative overflow-hidden">
          <h3 className="font-bold text-gray-800 dark:text-gray-100 text-lg">Special Offer</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Subscribe to unlock premium content</p>

          <button className="mt-4 bg-white dark:bg-pink-600 dark:text-white text-pink-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-pink-600 hover:text-white transition">
            I want this!
          </button>
          <span className="absolute bottom-3 right-4 text-xs font-bold text-pink-800 dark:text-pink-300">
            -20%
          </span>
        </div>
      </div>

      {/* COURSES */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Courses</h2>
          <button className="text-gray-600 dark:text-gray-300 text-sm flex items-center gap-1 hover:text-black dark:hover:text-white">
            View All <FiArrowRight />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseData.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>

      {/* EXAMS LIST */}
      <div>
        <h2 className="text-xl font-bold mb-4">Upcoming Exams</h2>

        <div className="bg-white dark:bg-[#1e293b] shadow-md rounded-3xl p-6 space-y-4">
          {exams.map((exam) => (
            <ExamRow key={exam.title} {...exam} />
          ))}
        </div>
      </div>

    </div>
  );
};

/* COMPONENTS */

const StatRow = ({ title, value, percent }) => (
  <div>
    <div className="flex justify-between text-sm font-semibold text-gray-600 dark:text-gray-300">
      <span>{title}</span>
      <span>{value}</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <div className="h-2 rounded-full bg-pastel-purple" style={{ width: `${percent}%` }}></div>
    </div>
  </div>
);

const courseData = [
  { title: "Modern Design & Modeling", lessons: "7/10", assignments: "8/12", time: "25h", gpa: "A+", color: "bg-pastel-yellow" },
  { title: "Positive Psychology", lessons: "5/10", assignments: "4/8", time: "32h", gpa: "C", color: "bg-pastel-blue" },
  { title: "Creative Writing Specialization", lessons: "6/12", assignments: "7/10", time: "40h", gpa: "B", color: "bg-pastel-rose" },
];

const CourseCard = ({ title, lessons, assignments, time, gpa, color }) => (
  <div className="rounded-3xl p-5 bg-white dark:bg-[#1e293b] shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
    <div className={`h-28 rounded-2xl ${color} mb-4`}></div>
    <h3 className="font-bold text-gray-800 dark:text-gray-100">{title}</h3>

    <div className="text-sm text-gray-500 dark:text-gray-300 mt-3 space-y-1">
      <p>Lessons: {lessons}</p>
      <p>Assignments: {assignments}</p>
      <p>Time: {time}</p>
    </div>

    <div className="mt-3 text-pastel-purple dark:text-pink-300 font-bold">GPA: {gpa}</div>
  </div>
);

const exams = [
  { date: "10 AUGUST", title: "Psychological First Aid", time: "3:00 PM" },
  { date: "08 JUNE", title: "Graphic Design Theory", time: "11:00 AM" },
  { date: "02 JUNE", title: "Creative Writing", time: "Done" },
];

const ExamRow = ({ date, title, time }) => (
  <div className="flex items-center justify-between border-b dark:border-gray-700 pb-3 last:border-none">
    <div className="text-center text-sm font-bold text-pastel-purple dark:text-pink-300">{date}</div>
    <div className="flex-1 px-5">
      <h3 className="font-semibold text-gray-700 dark:text-gray-200">{title}</h3>
    </div>
    <span className="text-gray-600 dark:text-gray-300">{time}</span>
  </div>
);

export default DashboardHome;
