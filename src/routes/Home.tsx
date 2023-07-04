import React from 'react'
import Navbar from '../components/Navbar'
import NewUserHome from '../components/NewUserHome'

const Home = ( { firebaseApp }: any) : JSX.Element => {
    return (
        <div>
            <Navbar firebaseApp={firebaseApp}/>
            <NewUserHome />
        </div>
    )
}

export default Home