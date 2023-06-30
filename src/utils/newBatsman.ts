import { Batsman } from '../types/batsman';

const newBatsman = () => {
const batsman: Batsman = {
    id: '',
    name: '',
    runs: 0,
    balls: 0,
    fours: 0,
    sixes: 0,
    innings: [],
    out: false,
    outMethod: '',
    outFielder: '',
    outBowler: '',
}
return batsman;
}
export default newBatsman;
