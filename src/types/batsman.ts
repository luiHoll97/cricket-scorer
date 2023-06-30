export interface Batsman {
    id: string;
    name: string;
    runs: number;
    balls: number;
    fours: number;
    sixes: number;
    innings: [];
    out: boolean;
    outMethod: string;
    outFielder: string;
    outBowler: string;
}