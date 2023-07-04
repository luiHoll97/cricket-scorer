/*useEffect(() => {
    readCollectionGroupInnings();
    console.log('onStrikeBatsman', onStrikeBatsman, 'offStrikeBatsman', offStrikeBatsman)
    readCollectionBatsmen()
    readCollectionBalls();
    onSnapshot(collection(getFirestore(), "/matches"), (snapshot) => {
      snapshot.forEach((doc) => {
        console.log('match', doc.data())
      })
    })
  }, [ballNumber])

  const readCollectionGroupInnings = () => {
    const db = getFirestore()
    const query = collectionGroup(db, "innings")
    onSnapshot(query, (snapshot) => {
      snapshot.forEach((doc) => {
        console.log('innings:', doc.data())
      })
    })
  }

  const readCollectionBalls = () => {
    const db = getFirestore()
    const query = collectionGroup(db, "balls")
    onSnapshot(query, (snapshot) => {
      snapshot.forEach((doc) => {
        console.log('balls', doc.data())
      })
    })
  }

  const readCollectionBatsmen = () => {
    const db = getFirestore()
    const query = collectionGroup(db, "batsmen")
    onSnapshot(query, (snapshot) => {
      snapshot.forEach((doc) => {
        console.log('bats', doc.data())
      })
    })
  }*/