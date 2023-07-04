
import Navbar from '../components/Navbar'
import NewUserHome from '../components/NewUserHome'
import { HStack, Center } from '@chakra-ui/layout'
import HomeScreenSelection from '../components/HomeScreenSelection'


const Home = ( { firebaseApp }: any) : JSX.Element => {
    return (
        <div>
            <Navbar firebaseApp={firebaseApp}/>
            <Center>
            <HStack spacing='4'>
            <HomeScreenSelection
                imageSrc={'https://images.unsplash.com/photo-1512719994953-eabf50895df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JpY2tldCUyMHRlYW18ZW58MHx8MHx8fDA%3D&w=1000&q=80'}
                heading={'New Match'}
                text={'Start a new match. Enter the teams and players and start scoring!'}
            />
            <HomeScreenSelection
                imageSrc={'https://www.bodyset.co.uk/wp-content/uploads/2019/05/Cricket-50-900x700.png'}
                heading={'My Shed'}
                text={'View the teams and players you have created. Edit them, or create new ones!'}
            />
            <HomeScreenSelection
                imageSrc={'https://pbs.twimg.com/media/FzFg6WrakAAyEBN.jpg:large'}
                heading={'Results'}
                text={'View the results of your previous matches. See Scorecards, Match Reports, and more!'}
            />
            </HStack>
            </Center>
            <NewUserHome />
        </div>
    )
}

export default Home