import React, { useState } from 'react';

const CarRegistrationForm = ({ onSubmit }) => {
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [vehicleModel, setVehicleModel] = useState('');
    const [parkingDate, setParkingDate] = useState('');
    const [ownerContact, setOwnerContact] = useState('');
    const [parkInTime, setParkInTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ vehicleNumber, vehicleModel, parkingDate, ownerContact, parkInTime });
        
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Car Registration</h2>
                
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-medium mb-2">Vehicle Number</label>
                    <input
                        type="text"
                        value={vehicleNumber}
                        onChange={(e) => setVehicleNumber(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Vehicle Number"
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-medium mb-2">Vehicle Model</label>
                    <input
                        type="text"
                        value={vehicleModel}
                        onChange={(e) => setVehicleModel(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Vehicle Model"
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-medium mb-2">Date of Parking</label>
                    <input
                        type="date"
                        value={parkingDate}
                        onChange={(e) => setParkingDate(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-medium mb-2">Owner Contact</label>
                    <input
                        type="text"
                        value={ownerContact}
                        onChange={(e) => setOwnerContact(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Owner Contact"
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-medium mb-2">Park-In Time</label>
                    <input
                        type="time"
                        value={parkInTime}
                        onChange={(e) => setParkInTime(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                
                <button
                    type="submit"
                    className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Register Car
                </button>
            </form>
        </div>
    );
};

export default CarRegistrationForm;
