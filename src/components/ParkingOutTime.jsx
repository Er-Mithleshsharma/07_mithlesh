import React, { useState } from 'react';

const ParkingOutTime = ({ onSubmit }) => {
    const [parkOutTime, setParkOutTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(parkOutTime);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Enter Parking Out Time</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="parkOutTime" className="text-sm font-medium text-gray-600 mb-2">Park-Out Time:</label>
                        <input
                            type="time"
                            id="parkOutTime"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                            value={parkOutTime}
                            onChange={(e) => setParkOutTime(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-300 focus:outline-none transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ParkingOutTime;
