import { Grid, GridItem, VStack, Flex, Box, Icon, Text, Avatar, Heading, SimpleGrid } from "@chakra-ui/react";
import CurrentBatsmen from "./CurrentBatsmen";

import { BiCricketBall, BiRun, BiSolidCricketBall } from 'react-icons/bi'
import { FiTarget } from 'react-icons/fi'
import { TbLetterM, TbCricket } from "react-icons/tb";
import { TiLinkOutline } from "react-icons/ti";
import { TfiStatsUp } from "react-icons/tfi";


function OverviewWithScorer() {
    return (
        <Grid
            h='70vh'
            templateRows='repeat(5, 1fr)'
            templateColumns='repeat(4, 1fr)'
            gap={4}
        >


            <GridItem colSpan={2} rowSpan={1} borderRightColor='blue.500' borderRightWidth='3px'>
                <SimpleGrid columns={3} spacing={10}>

                    <Box>
                        <VStack>
                            <Icon as={BiCricketBall} boxSize={10} color="red.400" />
                            <br />
                            <Heading fontSize='lg'>30.3</Heading>
                        </VStack>
                    </Box>
                    <Box>
                        <VStack>
                            <Icon as={BiRun} boxSize={10} color='blue.400' />
                            <br />

                            <Heading fontSize='lg'>8.23</Heading>
                        </VStack>
                    </Box>
                    <Box>
                        <VStack>
                            <Icon as={FiTarget} boxSize={10} color='green.500' />
                            <br />
                            <Heading fontSize='lg'>487</Heading>
                        </VStack>
                    </Box>
                </SimpleGrid>
            </GridItem>
            <GridItem colSpan={2}  >
                <Flex direction='column' align='center'>
                    <Flex>
                        <Avatar size='md' src='https://resources.ecb.co.uk/player-photos/test/150x150/1154.png' />
                        <Box ml='2'>
                            <VStack>
                                <Text fontWeight='bold'>Ben Stokes</Text>
                                <Text fontWeight='bold' fontSize='sm'>60 (55)</Text>
                            </VStack>
                        </Box>
                    </Flex>
                    <Flex mt='2' align='center' ml={20}>
                        <Avatar size='sm' src='https://resources.ecb.co.uk/player-photos/test/150x150/887.png' />
                        <Box>
                            <VStack>
                                <Text ml='2'>Joe Root</Text>
                                <Text fontSize='small'>87 (122)</Text>
                            </VStack>
                        </Box>
                    </Flex>
                </Flex>

            </GridItem>

            <GridItem
                colSpan={4} rowSpan={2}
                display='flex' alignItems="center"
                justifyContent="center" borderTopWidth='2px'
                borderBottomWidth='2px' borderColor='blue.500'
            >

                <Box >
                    <Heading color='blue.500' size='4xl'>352/4</Heading>
                </Box>



            </GridItem>
            <GridItem colSpan={2} borderRightColor='blue.500' borderRightWidth='3px' >
                <Flex direction='column'>
                    <Flex align='center' mt={8} ml={5}>
                        <Avatar size='lg' src='https://resources.ecb.co.uk/player-photos/test/150x150/797.png' />
                        <Box ml='3'>
                            <Text fontWeight='bold'>N.Lyon</Text>
                        </Box>
                        <SimpleGrid columns={5} spacing={6} ml={20}>
                            <Box>
                                <VStack>
                                    <Icon as={BiSolidCricketBall} boxSize={5} color='red.500' />
                            <Text fontWeight='bold'>10.3</Text>
                            </VStack>
                            </Box>
                            <Box>
                                <VStack>
                                    <Icon as={TbLetterM} boxSize={5} color='white.500' />
                            <Text fontWeight='bold'>2</Text>
                            </VStack>

                            </Box>
                            <Box>
                            <VStack>
                                    <Icon as={TbCricket} boxSize={5} color='blue.500' />
                            <Text fontWeight='bold'>34</Text>
                            </VStack>
                            </Box>
                            <Box>
                            <VStack>
                                    <Icon as={TiLinkOutline} boxSize={5} color='red.200' />
                            <Text fontWeight='bold'>3</Text>
                            </VStack>
                            </Box>
                            <Box>
                            <VStack>
                                    <Icon as={TfiStatsUp} boxSize={5} color='green.300' />
                            <Text fontWeight='bold'>3.4</Text>
                            </VStack>
                            </Box>
                        </SimpleGrid>
                    </Flex>

                </Flex>
            </GridItem>
            <GridItem colSpan={2} />
            <GridItem colSpan={1} />
            <GridItem colSpan={2} >
                <VStack p={10}>

                    <CurrentBatsmen />
                </VStack>
            </GridItem>

            <GridItem colSpan={1} />

        </Grid>
    );
}

export default OverviewWithScorer;
