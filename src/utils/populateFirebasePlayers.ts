
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { squads } from "./squads";
import { Player } from "../types/player";


const populateFirebasePlayers = () => {
    const db = getFirestore();

    function replaceIconUrls(squads: Player[]) {
        for (let i = 0; i < squads.length; i++) {
          const player = squads[i];
          if (player.icon.includes('150x150') && player.firstname !== 'Rehan') {
            squads[i].icon = player.icon.replace('150x150', '480x480');
          }
        }
        squads.forEach(async (squad) => {
            await addDoc(collection(db, "players"), squad);
        });
        }
        replaceIconUrls(squads);
      }
      
    

    
    

    export default populateFirebasePlayers;
