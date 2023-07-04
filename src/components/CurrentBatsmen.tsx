import { useContext } from 'react';
import { Button, Box, Center } from '@chakra-ui/react';
import Scorebox from '../context/Scorebox';


const CurrentBatsmen = (): JSX.Element => {

    const { onStrikeBatsman, setOnStrikeBatsman } = useContext(Scorebox.ScoreboardContext);
    const { offStrikeBatsman, setOffStrikeBatsman } = useContext(Scorebox.ScoreboardContext);
    const { ballNumber, setBallNumber } = useContext(Scorebox.ScoreboardContext);

    const changeStrike = () => {
        const temp = onStrikeBatsman
        setOnStrikeBatsman(offStrikeBatsman)
        setOffStrikeBatsman(temp)
    }

    const addBallsToBatsman = () => {
        const temp = onStrikeBatsman
        temp.balls += 1
        setOnStrikeBatsman(temp)
    }

    const addBoundariesToBatsman = (runs: number) => {
        const temp = onStrikeBatsman
        if (runs === 4) {
            temp.fours += 1
        }
        if (runs === 6) {
            temp.sixes += 1
        }
    }

    const addRunsToBatsman = (runs: number) => {
        setBallNumber(ballNumber + 1)
        addBallsToBatsman()
        addBoundariesToBatsman(runs)
        const temp = onStrikeBatsman
        temp.runs += runs
        setOnStrikeBatsman(temp)
        if (runs % 2 !== 0) {
            changeStrike()
        }
    }

    


    return (
        <>
            <Box borderRadius='500px'>
                <Center>
                    <Button onClick={() => addRunsToBatsman(0)}>Dot Ball</Button>
                    <Button onClick={() => addRunsToBatsman(1)}>1</Button>
                    <Button onClick={() => addRunsToBatsman(2)}>2</Button>
                    <Button onClick={() => addRunsToBatsman(3)}>3</Button>
                    <Button onClick={() => addRunsToBatsman(4)}>4</Button>
                    {/*<Button colorScheme="teal">5</Button>*/}
                    <Button onClick={() => addRunsToBatsman(5)}>5</Button>
                    <Button onClick={() => addRunsToBatsman(6)}>6</Button>
                    <Button>W</Button>
                    
                </Center>
            </Box>
        </>
    )
}

export default CurrentBatsmen