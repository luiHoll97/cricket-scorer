import { Heading } from "@chakra-ui/layout"
import Navbar from "../components/Navbar"
const Results = ({firebaseApp}: any) => {
    return (
        <>
        <Navbar firebaseApp={firebaseApp} />
        <Heading>Results</Heading>
        </>
    )
}
export default Results