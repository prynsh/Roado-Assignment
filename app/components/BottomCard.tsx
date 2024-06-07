// "use client";
// import React from 'react';
// import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

// interface DriverConcernProps {
//     title: string;
//     loadNumber: string;
//     billTo: string;
//     date: string;
//     concernText: string;
// }

// export const BottomCard = ({ title, loadNumber, billTo, date, concernText }: DriverConcernProps) => {
//     return (
//         <div className="border border-gray-300 rounded-lg p-4 m-4  bg-white shadow-sm">
//             <div className="flex justify-between items-center mb-4">
//                 <div className="flex items-center">
//                     <span className="text-2xl mr-2"><DeviceThermostatIcon></DeviceThermostatIcon></span>
//                     <span className="font-bold text-lg">{title}</span>
//                 </div>
//                 <span className="text-gray-500 text-sm">{date}</span>
//             </div>
//             <div className="mb-4">
//                 <span className="block text-sm text-gray-600">Load No: {loadNumber},</span>
//                 <span className="block text-sm text-gray-600">Bill To: {billTo}</span>
//             </div>
//             <div className="text-gray-700 mb-4">
//                 {concernText}
//             </div>
//             <div className="flex justify-end">
//                 <button className="px-4 py-2 mx-7  underline underline text-blue-950 rounded-md">Ignore</button>
//                 <button className="px-4 py-2 bg-indigo-900 text-white rounded-md">Resolve</button>
//             </div>
//         </div>
//     );
// };
"use client";
import React from "react";

interface DriverConcernProps {
  title: string;
  loadNumber: string;
  billTo: string;
  date: string;
  concernText: string;
  thermometerIcon: React.ReactNode; // Add thermometerIcon prop
}

export const BottomCard = ({
  title,
  loadNumber,
  billTo,
  date,
  concernText,
  thermometerIcon,
}: DriverConcernProps) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 m-4 bg-white shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="flex justify-center items-center w-10 h-10 bg-blue-100 rounded-lg mr-2">
            {thermometerIcon}
          </div>
          <span className="font-bold text-lg">{title}</span>
        </div>
        <span className="text-gray-500 text-sm">{date}</span>
      </div>
      <div className="mb-4">
        <span className="block text-sm text-gray-600">
          Load No: {loadNumber},
        </span>
        <span className="block text-sm text-gray-600">Bill To: {billTo}</span>
      </div>
      <div className="text-gray-700 mb-4">{concernText}</div>
      <div className="flex justify-end">
        <button className="px-4 py-2 mx-7 underline text-blue-950 rounded-md">
          Ignore
        </button>
        <button className="px-4 py-2 bg-indigo-900 text-white rounded-md">
          Resolve
        </button>
      </div>
    </div>
  );
};
