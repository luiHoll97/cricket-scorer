import { Heading } from "@chakra-ui/layout"
import Navbar from "../components/Navbar"
import MatchSetup from "../components/MatchSetup"
const Results = ({firebaseApp}: any) => {
    return (
        <>
        <Navbar firebaseApp={firebaseApp} />
        <Heading>Results</Heading>
        <MatchSetup />
        </>
    )
}
export default Results