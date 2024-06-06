"use client";
import React from 'react';

interface DriverConcernProps {
    title: string;
    loadNumber: string;
    billTo: string;
    date: string;
    concernText: string;
}

export const BottomCard = ({ title, loadNumber, billTo, date, concernText }: DriverConcernProps) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 m-4  bg-white shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <span className="text-2xl mr-2">🚚</span>
                    <span className="font-bold text-lg">{title}</span>
                </div>
                <span className="text-gray-500 text-sm">{date}</span>
            </div>
            <div className="mb-4">
                <span className="block text-sm text-gray-600">Load No: {loadNumber},</span>
                <span className="block text-sm text-gray-600">Bill To: {billTo}</span>
            </div>
            <div className="text-gray-700 mb-4">
                {concernText}
            </div>
            <div className="flex justify-end">
                <button className="px-4 py-2 mx-7 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none">Ignore</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none">Resolve</button>
            </div>
        </div>
    );
};
