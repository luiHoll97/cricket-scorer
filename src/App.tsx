
import { ChakraProvider } from "@chakra-ui/react"
import { getFirebaseConfig } from "./firebase-config"
import { initializeApp } from "firebase/app"
import Scorebox from "./context/Scorebox"
import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import Results from "./routes/Results"
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
          <Route path="/results" element={<Results />} />
          
          {/*<Scorebook />
          <CurrentBatsmen />
          <PlayerCard />*/}
          </Routes>
        </Scorebox.ScoreboxProvider>
      </ChakraProvider>
    </>
  )
}
