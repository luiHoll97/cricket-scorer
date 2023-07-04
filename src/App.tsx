import * as React from "react"
import { useState, useEffect } from "react"
import { ChakraProvider,Center,Box,Text } from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { getFirebaseConfig } from "./firebase-config"
import { initializeApp } from "firebase/app"
import { getFirestore, collection, onSnapshot, collectionGroup } from "firebase/firestore"
import newBatsman from "./utils/newBatsman"
import CurrentBatsmen from "./components/CurrentBatsmen"
import Scorebox from "./context/Scorebox"
import Scorebook from "./components/Scorebook"
import PlayerCard from "./components/PlayerCard"
import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import ScoringDashboard from "./routes/ScoringDashboard"

export const App = () => {

  const firebaseConfig = getFirebaseConfig()
  const firebaseApp = initializeApp(firebaseConfig)
  

  return (
    <>
      <ChakraProvider>
        <Scorebox.ScoreboxProvider>
          <Routes>
          <Route path="/" element={<Home firebaseApp={firebaseApp} />} />
          <Route path="/scorebook" element={<ScoringDashboard />} />
          
          {/*<Scorebook />
          <CurrentBatsmen />
          <PlayerCard />*/}
          </Routes>
        </Scorebox.ScoreboxProvider>
      </ChakraProvider>
    </>
  )
}
