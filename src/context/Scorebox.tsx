import React, { createContext, useState } from "react";
import { Batsman } from "../types/batsman";
import { Scoreboard } from "../types/scoreboard";
import newBatsman from "../utils/newBatsman";
import newScoreboard from "../utils/newScoreboard";
import { GoogleUser } from "../types/googleUser";
import { emptyGoogleUser } from "../utils/emptyGoogleUser";

interface ScoreboardProps {
    onStrikeBatsman: Batsman;
    setOnStrikeBatsman: React.Dispatch<React.SetStateAction<Batsman>>;
    offStrikeBatsman: Batsman;
    setOffStrikeBatsman: React.Dispatch<React.SetStateAction<Batsman>>;
    currentBowler: string;
    setCurrentBowler: React.Dispatch<React.SetStateAction<string>>;
    ballNumber: number;
    setBallNumber: React.Dispatch<React.SetStateAction<number>>;
    scoreboard: Scoreboard;
    setScoreboard: React.Dispatch<React.SetStateAction<Scoreboard>>
    googleUser: GoogleUser;
    setGoogleUser: React.Dispatch<React.SetStateAction<GoogleUser>>
}

const ScoreboardContext = createContext<ScoreboardProps>({
  onStrikeBatsman: newBatsman(),
  setOnStrikeBatsman: () => {},
  offStrikeBatsman: newBatsman(),
  setOffStrikeBatsman: () => {},
  currentBowler: '',
  setCurrentBowler: () => {},
  ballNumber: 0,
  setBallNumber: () => {},
  scoreboard: newScoreboard(),
  setScoreboard: () => {},
  googleUser: emptyGoogleUser,
  setGoogleUser: () => {}

});

const ScoreboxProvider = ({children}: {children: React.ReactNode}) => {
    const [googleUser, setGoogleUser] = useState<GoogleUser>(emptyGoogleUser);
    const [onStrikeBatsman, setOnStrikeBatsman] = useState<Batsman>(newBatsman());
    const [offStrikeBatsman, setOffStrikeBatsman] = useState<Batsman>(newBatsman());
    const [currentBowler, setCurrentBowler] = useState('');
    const [ballNumber, setBallNumber] = useState(0);
    const [scoreboard, setScoreboard] = useState({
      runs: 0,
      wickets: 0,
      overs: 0,
      balls: 0,
    });
  
    return (
      <ScoreboardContext.Provider
        value={{
          onStrikeBatsman,
          setOnStrikeBatsman,
          offStrikeBatsman,
          setOffStrikeBatsman,
          currentBowler,
          setCurrentBowler,
          ballNumber,
          setBallNumber,
          scoreboard,
          setScoreboard,
          googleUser,
          setGoogleUser
        }}
      >
        {children}
      </ScoreboardContext.Provider>
    );
  };

  export default { ScoreboxProvider, ScoreboardContext };
  