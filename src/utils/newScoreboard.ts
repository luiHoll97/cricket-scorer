import { Scoreboard } from "../types/scoreboard";

const newScoreboard = (): Scoreboard => {
    const scoreboard: Scoreboard = {
        runs: 0,
        wickets: 0,
        overs: 0,
        balls: 0,
    }
    return scoreboard;
}

export default newScoreboard;