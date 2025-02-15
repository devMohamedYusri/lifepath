import { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, isSameMonth } from 'date-fns';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // Track the current date
  const [selectedDate, setSelectedDate] = useState(null);
  
  const events = {
    "2024-04-16": true 
  };

  const getDaysInGrid = (date) => {
    const start = startOfWeek(startOfMonth(date)); // Start from the beginning of the week
    const end = endOfWeek(endOfMonth(date)); // End at the end of the week
    return eachDayOfInterval({ start, end }); // Get all days in the interval
  };

  const daysInGrid = getDaysInGrid(currentDate);
  const weekDays = ['السبت', 'الاحد', 'الاثنين', 'الثلاثاء', 'الاربعاء', 'الخميس', 'الجمعة'];
  
  const isEventDay = (day) => {
    const dateStr = format(day, 'yyyy-MM-dd');
    return events[dateStr];
  };


  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1)); 
  };

  const handleNextYear = () => {
    setCurrentDate(addMonths(currentDate, 12)); 
  };

  const handlePrevYear = () => {
    setCurrentDate(subMonths(currentDate, 12)); 
  };


  return (
    <div className="w-[98%] mt-2 bg-white rounded-3xl shadow px-3 py-3 rtl">
      <div className="flex justify-between items-center mb-4">
      <button className="text-gray-600" onClick={handlePrevYear}>»»</button>
        <button className="text-gray-600" onClick={handlePrevMonth}>»</button>
        <div className="text-lg font-semibold">{format(currentDate, 'MMMM yyyy')}</div>
        <button className="text-gray-600" onClick={handleNextMonth}>«</button>
        <button className="text-gray-600" onClick={handleNextYear}>««</button>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2">
        {weekDays.map((day, index) => (
          <div key={index} className="text-center text-sm text-gray-600 w-full">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {daysInGrid.map((day) => {
          const isCurrentMonth = isSameMonth(day, currentDate);
          return (
            <button
              key={day}
              onClick={() => setSelectedDate(day.getDate())}
              className={`
                p-2 text-center rounded hover:bg-gray-100
                ${selectedDate === day.getDate() ? 'bg-blue-100' : ''}
                ${isEventDay(day) ? 'text-red-500 font-bold' : ''}
                ${!isCurrentMonth ? 'text-gray-400' : ''} // Gray out days not in the current month
              `}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>

      <button className="mt-4 w-full py-2 text-[#4E70FB] rounded-lg flex items-center justify-center gap-2 border border-[#4E70FB]">
        <span>+</span>
        <span>حجز موعد جديد</span>
      </button>
    </div>
  );
};

export default Calendar;