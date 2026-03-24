import { useState } from "react";

const DAYS_OF_WEEK = ["S", "M", "T", "W", "T", "F", "S"];
const PADDING_CELLS = 2;
const CALENDAR_DAYS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const TIME_SLOTS = ["9:00 AM", "11:30 AM", "2:00 PM", "4:30 PM"];

export default function DemoScheduler() {
  const [selectedDay, setSelectedDay] = useState(4);
  const [selectedSlot, setSelectedSlot] = useState(null);

  return (
    <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl shadow-[0_24px_48px_-12px_rgba(25,28,30,0.06)] overflow-hidden">
      <div className="p-8 border-b border-surface-container">
        <h2 className="font-headline text-xl font-bold text-primary">
          Schedule a Session
        </h2>
        <p className="text-sm text-on-surface-variant mt-1">
          Select a time that works for your team.
        </p>
      </div>

      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Calendar */}
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <span className="font-bold text-sm">October 2024</span>
            <div className="flex gap-2">
              <span className="material-symbols-outlined cursor-pointer hover:text-primary">
                chevron_left
              </span>
              <span className="material-symbols-outlined cursor-pointer hover:text-primary">
                chevron_right
              </span>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">
            {DAYS_OF_WEEK.map((day, i) => (
              <span key={i}>{day}</span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: PADDING_CELLS }).map((_, i) => (
              <div key={`pad-${i}`} className="h-8" />
            ))}
            {CALENDAR_DAYS.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`h-8 w-8 flex items-center justify-center text-xs rounded-full transition-colors ${
                  selectedDay === day
                    ? "bg-primary text-on-primary font-bold"
                    : "hover:bg-surface-container"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        <div className="space-y-3">
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">
            Available Slots
          </p>
          {TIME_SLOTS.map((slot) => (
            <button
              key={slot}
              onClick={() => setSelectedSlot(slot)}
              className={`w-full py-3 px-4 border rounded-lg text-sm font-semibold transition-all text-center ${
                selectedSlot === slot
                  ? "border-primary text-primary bg-primary/5"
                  : "border-outline-variant/30 hover:border-primary hover:text-primary"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
