import React from 'react';
import Navbar from '../components/Navbar'
import CurrentBatsmen from '../components/CurrentBatsmen';
import Scorebook from '../components/Scorebook';

const ScoringDashboard = () => {
    return (
        <div>
            {/*<Navbar />*/}
            <Scorebook />
            <CurrentBatsmen />
        </div>
    )
}

export default ScoringDashboard
