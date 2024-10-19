import React from 'react';

const calculateBill = (parkInTime, parkOutTime) => {
    // Create date objects for both park-in and park-out times
    const [inHours, inMinutes] = parkInTime.split(':').map(Number);
    const [outHours, outMinutes] = parkOutTime.split(':').map(Number);
    const inTime = new Date();
    inTime.setHours(inHours, inMinutes, 0, 0);

    const outTime = new Date();
    outTime.setHours(outHours, outMinutes, 0, 0);

    // Calculate the difference in time (in minutes)
    const diffInMinutes = (outTime - inTime) / 60000; // 60000 milliseconds in a minute

    if (diffInMinutes <= 0) return 0; // Invalid time difference, no parking fee

    const totalHours = Math.floor(diffInMinutes / 60);
    const totalMinutes = diffInMinutes % 60;
    console.log(totalHours, totalMinutes);
    
    let bill = 10; // Minimum charge for the first hour

    if (totalHours >= 1) {
        bill += 15 * (totalHours - 1); // Charge for additional hours
    }
    if (totalMinutes >= 1 && totalHours % 60 !== 0) {
        bill += 0.5 * totalMinutes; // Charge for additional minutes
    }

    return bill;
};

const Receipt = ({ vehicleDetails, parkOutTime }) => {
    const { parkInTime } = vehicleDetails;
    const bill = calculateBill(parkInTime, parkOutTime);

    // Storing list of all vehicles into local storage in form of an array
    const existingVehicles = JSON.parse(localStorage.getItem('vehicleDetails')) || [];
    existingVehicles.push({ ...vehicleDetails, bill });
    localStorage.setItem('vehicleDetails', JSON.stringify(existingVehicles));

    // Function to download receipt details as a text file
    const handleDownload = () => {
        const receiptText = `
            Parking Receipt
            ----------------------
            Vehicle Number: ${vehicleDetails.vehicleNumber}
            Vehicle Model: ${vehicleDetails.vehicleModel}
            Date of Parking: ${vehicleDetails.parkingDate}
            Park-In Time: ${vehicleDetails.parkInTime}
            Park-Out Time: ${parkOutTime}
            Total Bill: ₹${bill.toFixed(2)}
        `;
        const blob = new Blob([receiptText], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'ParkingReceipt.txt';
        link.click();
    };

    return (
        <div className="flex flex-col items-center h-screen bg-gray-100 p-5">
            <h2 className="text-2xl font-bold mb-6">Parking Receipt</h2>
            <div className="h-{200px} shadow-lg p-7">
                <p className="shadow-lg p-4 font-medium bg-red-300 border-r-2 m-2 rounded-lg">Vehicle Number: {vehicleDetails.vehicleNumber}</p>
                <p className="shadow-lg p-4 font-medium bg-red-300 border-r-2 m-2 rounded-lg">Vehicle Model: {vehicleDetails.vehicleModel}</p>
                <p className="shadow-lg p-4 font-medium bg-red-300 border-r-2 m-2 rounded-lg">Date of Parking: {vehicleDetails.parkingDate}</p>
                <p className="shadow-lg p-4 font-medium bg-red-300 border-r-2 m-2 rounded-lg">Park-In Time: {vehicleDetails.parkInTime}</p>
                <p className="shadow-lg p-4 font-medium bg-red-300 border-r-2 m-2 rounded-lg">Park-Out Time: {parkOutTime}</p>
                <h3 className="shadow-lg p-4 font-medium bg-red-500 border-r-2 m-2 rounded-lg">Total Bill: ₹{bill.toFixed(2)}</h3>
            </div>
            <button
                onClick={handleDownload}
                className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
                Download Receipt
            </button>
        </div>
    );
};

export default Receipt;
