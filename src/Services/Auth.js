import auth from '@react-native-firebase/auth';
import {showToast} from '../Component/Toast/Toast';
import {dispatchRememberMe, dispatchUid} from '../redux/Slicee';

const TIMEOUT_DURATION = 10000;

const handleTimeout = () =>
  new Promise((_, reject) => {
    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      reject(
        new Error('Network timeout: Please check your internet connection.'),
      );
    }, TIMEOUT_DURATION);
  });

const handleError = (error, customErrors = {}) => {
  switch (error.code) {
    case 'auth/email-already-in-use':
      showToast('That email address is already in use!');
      break;
    case 'auth/invalid-email':
      showToast('That email address is invalid!');
      break;
    case 'auth/user-not-found':
      showToast('No user found with this email.');
      break;
    case 'auth/network-request-failed':
      showToast(
        'Network error: Please check your internet connection and try again.',
      );
      break;
    default:
      showToast(customErrors[error.code] || error.message);
  }
};

const SignUp = async (email, password, navigation) => {
  try {
    const createUserPromise = auth().createUserWithEmailAndPassword(
      email.trim(),
      password,
    );
    await Promise.race([createUserPromise, handleTimeout()]);
    showToast('You have been register successfully', 'success', () => {
      navigation.replace('Login');
    });
  } catch (error) {
    handleError(error);
  }
};

const LogIn = async (email, password, navigation, dispatch) => {
  try {
    const signInPromise = auth().signInWithEmailAndPassword(
      email.trim(),
      password,
    );
    const userCredential = await Promise.race([signInPromise, handleTimeout()]);
    const uid = userCredential.user.uid;
    dispatch(dispatchRememberMe(true));
    dispatch(dispatchUid(uid));
    showToast('You have been login successfully', 'success', () => {
      navigation.replace('Home');
    });
  } catch (error) {
    handleError(error, {
      'auth/invalid-credential':
        'The supplied auth credential is incorrect, malformed, or has expired.',
    });
  }
};

const ForgotPassword = async (email, navigation) => {
  try {
    const resetPasswordPromise = auth().sendPasswordResetEmail(email.trim());
    await Promise.race([resetPasswordPromise, handleTimeout()]);
    showToast(
      'Password reset email sent. Please check your email.',
      'success',
      () => {
        navigation.replace('Login');
      },
    );
  } catch (error) {
    handleError(error);
  }
};

const SignOut = async () => {
  try {
    await auth().signOut();
    console.log('User signed out successfully!');
  } catch (error) {
    console.error('Error signing out:', error);
  }
};

export const Auth = {
  SignUp,
  LogIn,
  ForgotPassword,
  SignOut,
};
