import React from "react";

const SidePanel = () => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-xl w-full max-w-sm">
      {/* Doctor Fees Section */}
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <p className="text-lg font-bold">Doctor Fees</p>
        <h2 className="text-xl font-bold text-[#01b5c5]">Rs 1000</h2>
      </div>

      {/* Available Time Slots Section */}
      <h1 className="text-lg font-semibold text-gray-800 mb-3">Available Time Slots</h1>
      <div className="flex justify-between bg-gray-100 p-3 rounded-lg shadow-sm">
        <div className="text-gray-700 font-medium">
          <p>Sunday</p>
          <p>Monday</p>
          <p>Wednesday</p>
        </div>
        <div className="text-gray-600 text-right">
          <p>4:00PM - 9:30PM</p>
          <p>6:00PM - 8:30PM</p>
          <p>3:00PM - 9:00PM</p>
        </div>
      </div>

      {/* Book Appointment Button */}
      <button className="mt-6 w-full bg-[#01b5c5] text-white py-2 rounded-lg font-semibold transition duration-300 cursor-pointer hover:bg-[#0190a5]">
        Book Appointment
      </button>
    </div>
  );
};

export default SidePanel;
