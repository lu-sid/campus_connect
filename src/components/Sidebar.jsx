import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-sidebar h-screen rounded-r-3xl p-6 flex flex-col justify-between shadow-lg">

      {/* Profile */}
      <div>
        <div className="flex items-center gap-3 mb-10">
          <img src="https://i.pravatar.cc/60" className="w-12 h-12 rounded-full" />
          <div>
            <h2 className="text-sm font-semibold">Adam</h2>
            <p className="text-xs text-textLight">Student</p>
          </div>
        </div>

        {/* Nav menu */}
        <div className="flex flex-col gap-3">
          {["Dashboard", "Courses", "Homeworks", "Exams", "Statistics"].map((item) => (
            <NavLink
              key={item}
              to={`/dashboard/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `p-3 rounded-xl flex items-center gap-3 transition ${
                  isActive ? "bg-primary text-white" : "text-textDark hover:bg-gray-200"
                }`
              }
            >
              📌 {item}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Support */}
      <div className="p-3 rounded-xl bg-white shadow-md cursor-pointer hover:bg-gray-100">
        🆘 Need support?
      </div>
    </div>
  );
}
