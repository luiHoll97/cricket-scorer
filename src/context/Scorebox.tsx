import React, { createContext, useContext, useState } from "react";
import { Batsman } from "../types/batsman";
import { Scoreboard } from "../types/scoreboard";
import newBatsman from "../utils/newBatsman";
import newScoreboard from "../utils/newScoreboard";

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

});

const ScoreboxProvider = ({children}: {children: React.ReactNode}) => {
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
        }}
      >
        {children}
      </ScoreboardContext.Provider>
    );
  };

  export default { ScoreboxProvider, ScoreboardContext };
  