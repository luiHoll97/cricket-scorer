

import Scorebook from '../components/Scorebook';
import Navbar from '../components/Navbar';
import OverviewWithScorer from '../components/OverviewWithScorer';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

const ScoringDashboard = ({ firebaseApp }: any) => {
    return (
        <div>
            <Navbar firebaseApp={firebaseApp} />
            <br />
            <Tabs isFitted variant='enclosed'>
                <TabList mb='1em'>
                    <Tab>Scorebook</Tab>
                    <Tab>Batsmen</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Scorebook />
                    </TabPanel>
                    <TabPanel>
                        <OverviewWithScorer/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default ScoringDashboard
