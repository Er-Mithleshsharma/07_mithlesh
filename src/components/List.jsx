import React, { useEffect, useState } from 'react';
import Header from './Header';

const VehiclesList = () => {
    const [vehicles, setVehicles] = useState([]);

    // Fetch vehicles from local storage when the component mounts
    useEffect(() => {
        const storedVehicles = localStorage.getItem('vehicleDetails');
        if (storedVehicles) {
            const parsedVehicles = JSON.parse(storedVehicles);
            // Sort vehicles by bill in descending order
            const sortedVehicles = parsedVehicles.sort((a, b) => b.bill - a.bill);
            setVehicles(sortedVehicles);
        }
    }, []);

    return (
        <div>
            <Header />
            <div className="container mx-auto mt-8">
                <h2 className="text-2xl font-bold mb-4 text-center">List of Vehicles</h2>
                {vehicles.length > 0 ? (
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="py-2 px-4 border">Vehicle Number</th>
                                <th className="py-2 px-4 border">Vehicle Model</th>
                                <th className="py-2 px-4 border">Parking Date</th>
                                <th className="py-2 px-4 border">Owner Contact</th>
                                <th className="py-2 px-4 border">Park-In Time</th>
                                <th className="py-2 px-4 border">Bill</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vehicles.map((vehicle, index) => (
                                <tr key={index} className="text-center border-b">
                                    <td className="py-2 px-4 border">{vehicle.vehicleNumber}</td>
                                    <td className="py-2 px-4 border">{vehicle.vehicleModel}</td>
                                    <td className="py-2 px-4 border">{vehicle.parkingDate}</td>
                                    <td className="py-2 px-4 border">{vehicle.ownerContact}</td>
                                    <td className="py-2 px-4 border">{vehicle.parkInTime}</td>
                                    <td className="py-2 px-4 border">₹{vehicle.bill}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-red-500 text-center">No vehicles found in the parking list.</p>
                )}
            </div>
        </div>
    );
};

export default VehiclesList;
