import * as React from "react"
import { useState, useEffect } from "react"
import {
  ChakraProvider,
  Button,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Select,
  ModalFooter,
  CircularProgress,
  CircularProgressLabel,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { getFirebaseConfig } from "./firebase-config"
import { initializeApp } from "firebase/app"
import { getFirestore, collection, onSnapshot, collectionGroup } from "firebase/firestore"
import CreateMatch from "./components/CreateMatch"
import newBatsman from "./utils/newBatsman"
import CurrentBatsmen from "./components/CurrentBatsmen"
import Scorebox from "./context/Scorebox"
import Scorebook from "./components/Scorebook"
import PlayerCard from "./components/PlayerCard"

export const App = () => {

  const [onStrikeBatsman, setOnStrikeBatsman] = useState(newBatsman())
  const [offStrikeBatsman, setOffStrikeBatsman] = useState(newBatsman())
  const [currentBowler, setCurrentBowler] = useState('')
  const [ballNumber, setBallNumber] = useState(0)
  const [Scoreboard, setScoreboard] = useState({
    runs: 0,
    wickets: 0,
    overs: 0,
    balls: 0,
  })




  useEffect(() => {
    readCollectionGroupInnings();
    console.log('onStrikeBatsman', onStrikeBatsman, 'offStrikeBatsman', offStrikeBatsman)
    readCollectionBatsmen()
    readCollectionBalls();
    onSnapshot(collection(getFirestore(), "/matches"), (snapshot) => {
      snapshot.forEach((doc) => {
        console.log('match', doc.data())
      })
    })
  }, [ballNumber])

  const readCollectionGroupInnings = () => {
    const db = getFirestore()
    const query = collectionGroup(db, "innings")
    onSnapshot(query, (snapshot) => {
      snapshot.forEach((doc) => {
        console.log('innings:', doc.data())
      })
    })
  }

  const readCollectionBalls = () => {
    const db = getFirestore()
    const query = collectionGroup(db, "balls")
    onSnapshot(query, (snapshot) => {
      snapshot.forEach((doc) => {
        console.log('balls', doc.data())
      })
    })
  }

  const readCollectionBatsmen = () => {
    const db = getFirestore()
    const query = collectionGroup(db, "batsmen")
    onSnapshot(query, (snapshot) => {
      snapshot.forEach((doc) => {
        console.log('bats', doc.data())
      })
    })
  }
  const firebaseConfig = getFirebaseConfig()
  const firebaseApp = initializeApp(firebaseConfig)

  return (
    <>
      <ChakraProvider>
        <Scorebox.ScoreboxProvider>
          <Box p={4} bg={"blue.100"}>
            <Center>
              <Text fontSize="2xl" fontWeight="bold">
                Cricket Scoreboard
              </Text>
            </Center>

          </Box>
          
          <Scorebook />
          <CurrentBatsmen />
          <PlayerCard />
        </Scorebox.ScoreboxProvider>
      </ChakraProvider>
    </>
  )
}
