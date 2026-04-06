import { Icon } from "@iconify/react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const hours = Array.from({ length: 9 }, (_, i) => i + 9); // 9AM - 5PM

// fake data
const getValue = () => Math.floor(Math.random() * 5);

const getColor = (value: number) => {
  if (value === 0) return "bg-gray-100";
  if (value === 1) return "bg-blue-100";
  if (value === 2) return "bg-blue-300";
  if (value === 3) return "bg-blue-500";
  return "bg-[#1b58a1]";
};

export default function TeamActivity() {
  return (
    <div className=" p-4 ">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-xl font-extrabold">Team Activity</p>
          <p className="text-sm font-light">
            Understand your team productive and workload
          </p>
        </div>
        <div className=" ">
          <Icon icon="majesticons:more-menu-vertical" width="24" height="24" />
        </div>
      </div>

      <div className="grid grid-cols-8 gap-2 mt-4 ">
        {/* Empty corner */}
        <div></div>

        {/* Days */}
        {days.map((day) => (
          <div key={day} className="text-xs text-center text-gray-500">
            {day}
          </div>
        ))}

        {/* Rows */}
        {hours.map((hour) => (
          <>
            {/* Hour label */}
            <div key={hour} className="text-xs text-gray-400">
              {hour}:00
            </div>

            {/* Cells */}
            {days.map((day) => {
              const value = getValue();

              return (
                <div
                  key={day + hour}
                  className={`h-8 rounded ${getColor(value)}`}
                />
              );
            })}
          </>
        ))}
      </div>
    </div>
  );
}
