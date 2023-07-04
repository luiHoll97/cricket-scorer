import React from 'react'
import Navbar from '../components/Navbar'
import NewUserHome from '../components/NewUserHome'
import { Link } from 'react-router-dom'


const Home = ( { firebaseApp }: any) : JSX.Element => {
    return (
        <div>
            <Link to={'/results'}>Results</Link>
            <Navbar firebaseApp={firebaseApp}/>
            <NewUserHome />
        </div>
    )
}

export default Home