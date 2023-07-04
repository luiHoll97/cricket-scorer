
import { getFirestore, collection, addDoc } from "firebase/firestore";
import 'firebase/firestore';



// ...

const CreateMatch = async () => {
    const db = getFirestore();
  try {
    const matchData = {
      homeTeam: 'Your Home Team',
      awayTeam: 'Your Away Team',
      venue: 'Match Venue',
      date: 'Match Date',
      motm: 'Man of the Match',
    };

    const matchRef = await addDoc(collection(db, 'match'), matchData);

    const innings1Ref = await addDoc(collection(matchRef, 'innings 1'), {});
    await addDoc(collection(innings1Ref, 'balls'), {
      ballNumber: 1,
      runsScored: 4,
      wicketTaken: false,
      batsmanId: 'batsman1',
      bowlerId: 'bowler1',
    });
    await addDoc(collection(innings1Ref, 'batsmen'), {
      name: 'Player 1',
      runsScored: 40,
      ballsFaced: 30,
      fours: 6,
      sixes: 2,
      balls: [],
    });
    await addDoc(collection(innings1Ref, 'bowlers'), {
      name: 'Bowler 1',
      oversBowled: 4,
      runsGiven: 30,
      wicketsTaken: 2,
      economyRate: 7.5,
    });

    const innings2Ref = await addDoc(collection(matchRef, 'innings 2'), {});
    await addDoc(collection(innings2Ref, 'balls'), {
      ballNumber: 1,
      runsScored: 1,
      wicketTaken: true,
      batsmanId: 'batsman2',
      bowlerId: 'bowler2',
    });
    await addDoc(collection(innings2Ref, 'batsmen'), {
      name: 'Player 2',
      runsScored: 20,
      ballsFaced: 15,
      fours: 2,
      sixes: 1,
      balls: [],
    });
    await addDoc(collection(innings2Ref, 'bowlers'), {
      name: 'Bowler 2',
      oversBowled: 3,
      runsGiven: 25,
      wicketsTaken: 1,
      economyRate: 8.33,
    });

    console.log('Match created with ID:', matchRef.id);
  } catch (error) {
    console.error('Error creating match:', error);
  }
};

// Call the function
export default CreateMatch
