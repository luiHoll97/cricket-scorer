import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Image,
    SimpleGrid,
    Text,
    Flex,
    Center,
    WrapItem,
    Avatar
} from '@chakra-ui/react'
import { useContext } from 'react'
import Scorebox from '../context/Scorebox'

const Scorebook = (): JSX.Element => {

    const { onStrikeBatsman, setOnStrikeBatsman } = useContext(Scorebox.ScoreboardContext);
    const { offStrikeBatsman, setOffStrikeBatsman } = useContext(Scorebox.ScoreboardContext);
    const { ballNumber, setBallNumber } = useContext(Scorebox.ScoreboardContext);
    const { currentBowler, setCurrentBowler } = useContext(Scorebox.ScoreboardContext);
    const { scoreboard, setScoreboard } = useContext(Scorebox.ScoreboardContext);
    const { googleUser, setGoogleUser } = useContext(Scorebox.ScoreboardContext);

    return (
        <div>
            <Table variant="striped" colorScheme="linkedin">
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Batsman</Th>
                        <Th>Runs</Th>
                        <Th>Balls</Th>
                        <Th>4s</Th>
                        <Th>6s</Th>
                        <Th>SR</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>

                        <Td>
                            <Flex alignItems="center">
                                <WrapItem>
                                    <Avatar name='Kent Dodds' src='//resources.ecb.co.uk/player-photos/test/150x150/170.png' />
                                </WrapItem>
                                <Text paddingLeft={5}>{onStrikeBatsman.name}</Text>
                            </Flex>
                        </Td>

                        <Td>{onStrikeBatsman.runs}</Td>
                        <Td>{onStrikeBatsman.balls}</Td>
                        <Td>{onStrikeBatsman.fours}</Td>
                        <Td>{onStrikeBatsman.sixes}</Td>

                        <Td>{(onStrikeBatsman.runs / onStrikeBatsman.balls) * 100}</Td>
                    </Tr>
                    <Tr>

                        <Td>
                            <Flex alignItems="center">
                                <WrapItem>
                                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                </WrapItem>
                                <Text paddingLeft={5}>{offStrikeBatsman.name}</Text>
                            </Flex>
                        </Td>

                        <Td>{offStrikeBatsman.runs}</Td>
                        <Td>{offStrikeBatsman.balls}</Td>
                        <Td>{offStrikeBatsman.fours}</Td>
                        <Td>{offStrikeBatsman.sixes}</Td>

                        <Td>{(offStrikeBatsman.runs / offStrikeBatsman.balls) * 100}</Td>
                    </Tr>

                </Tbody>

            </Table>
        </div>
    )
}

export default Scorebook