import React from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { squads } from "./squads";


const populateFirebasePlayers = () => {
    const db = getFirestore();
    

    
    squads.forEach(async (squad) => {
        await addDoc(collection(db, "players"), squad);
    });
    }

    export default populateFirebasePlayers;
