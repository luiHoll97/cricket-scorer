const createGoogleUserObject = (googleUser: any) => {
    /**
     * googleUser is the user that is signed in with google
     * user is the user object that is created from the googleUser object
     * */
    const user = {
      localId: googleUser.uid,
      firstname: googleUser.displayName.split(' ')[0],
      surname: googleUser.displayName.split(' ')[1],
      email: googleUser.email,
      photoUrl: googleUser.photoURL,
    }
    return user
  }

  export default createGoogleUserObject