import { useState, useEffect } from 'react';
import { Player } from '../types/player';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { Card, Button, CardBody, CardFooter, Divider, Heading, Image, Stack, Text, Center } from '@chakra-ui/react';

const PlayerCard = () => {

    const [players, setPlayers] = useState<Player[]>([])

    useEffect(() => {
        onSnapshot(collection(getFirestore(), "/players"), (snapshot) => {
            //set players
            setPlayers(snapshot.docs.map((doc) => doc.data() as Player))
            snapshot.forEach((doc) => {
                console.log('player', doc.data())

            })
        })
    }, [])

    return (
        <>
        <Button onClick={() => console.log(players)}></Button>
        
            {players.map((player: Player) => (

                    <Card maxW='25%' align='center'>
                        <CardBody>
                            <Image
                                src={player.icon}
                                alt={player.firstname + ' ' + player.surname}
                                borderRadius='full'
                                boxSize='150px'
                            />
                            <Stack mt='6' spacing='3' align='center'>
                                <Heading size='md' >{player.firstname + ' ' + player.surname}</Heading>
                                <Text>
                                    {player.position}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                    </Card>
                )
            
            )}
        
        </>
    )

}

export default PlayerCard;