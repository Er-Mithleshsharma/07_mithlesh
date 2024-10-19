import React, { useState } from 'react';
import CarRegistrationForm from '../src/components/CarRegistrationForm';
import ParkingOutTime from '../src/components/ParkingOutTime';
import Receipt from '../src/components/Receipt';
import Header from './components/Header';

function App() {
    const [vehicleDetails, setVehicleDetails] = useState(null);
    const [parkOutTime, setParkOutTime] = useState(null);

    const handleCarRegistration = (details) => {
        setVehicleDetails(details);
    };

    const handleParkOutTime = (time) => {
        setParkOutTime(time);
    };

    return (
        <div>
          <Header/>
            {!vehicleDetails && <CarRegistrationForm onSubmit={handleCarRegistration} />}
            {vehicleDetails && !parkOutTime && <ParkingOutTime onSubmit={handleParkOutTime} />}
            {vehicleDetails && parkOutTime && <Receipt vehicleDetails={vehicleDetails} parkOutTime={parkOutTime} />}
        </div>
    );
}

export default App;
