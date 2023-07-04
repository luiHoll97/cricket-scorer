import { Match } from "../types/match"
import { Box, Image, Badge, Text } from "@chakra-ui/react";
const MatchInfo = (match: Match) => {


  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
    >
      <Box p="4">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Image src={match.homeTeamEmblem} alt={`${match.homeTeam} emblem`} boxSize="50px" />
          <Text fontWeight="bold" fontSize="lg">
            {`${match.homeTeam} vs ${match.awayTeam}`}
          </Text>
          <Image src={match.awayTeamEmblem} alt={`${match.awayTeam} emblem`} boxSize="50px" />
        </Box>
        <Box mt="3" display="flex" justifyContent="space-between">
        <Text fontSize="sm">
            Format: <Badge colorScheme="blue">{match.format}</Badge>
          </Text>
          <Text fontSize="sm">
            Date: <Badge colorScheme="blue">{match.date}</Badge>
          </Text>
          <Text fontSize="sm">
            Venue: <Badge colorScheme="blue">{match.venue}</Badge>
          </Text>
        </Box>
        <Box mt="3">
          <Text fontSize="lg" fontWeight="bold">
            {match.result}
          </Text>
        </Box>
        <Box mt="3">
          <Text fontSize="sm">
            Winning Team: <Badge colorScheme="green">{match.winner}</Badge>
          </Text>
          <Text fontSize="sm">
            Man of the Match: <Badge colorScheme="purple">{match.motm}</Badge>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default MatchInfo;

