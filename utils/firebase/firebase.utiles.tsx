import auth from '@react-native-firebase/auth';

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  try {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        if (user) {
          return user;
        }
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  } catch (error) {
    console.log(error);
  }
};
