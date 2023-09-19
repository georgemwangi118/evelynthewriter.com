import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="flex flex-col lg:flex-row">
      <h1 className="text-sm font-semibold">Deadline</h1>

      {/* Display Current Date and Time */}
      {/* <div className="mb-4">
        <p className="text-lg font-semibold">
          Current Date and Time: {selectedDate.toLocaleString()}
        </p>
      </div> */}

      {/* Calendar Picker */}
      <div className="relative w-full">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy h:mm aa"
          showTimeSelect
          timeFormat="h:mm aa"
          className="border border-gray-300 p-2 rounded-lg cursor-pointer"
        />
        {/* <span className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 4h4a1 1 0 011 1v4m-5 9h14a1 1 0 001-1V7a1 1 0 00-1-1H5a1 1 0 00-1 1v5a1 1 0 001 1z"
            />
          </svg>
        </span> */}
      </div>
    </div>
  );
};

export default DateTimePicker;
