import database from '@react-native-firebase/database';
import {showToast} from '../Component/Toast/Toast';

const TIMEOUT_DURATION = 10000;

const withTimeout = (promise, timeout) => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('Request timed out'));
    }, timeout);

    promise
      .then(result => {
        clearTimeout(timer);
        resolve(result);
      })
      .catch(error => {
        clearTimeout(timer);
        reject(error);
      });
  });
};

const handleDatabaseError = error => {
  if (error.code === 'auth/network-request-failed') {
    showToast(
      'Network error: Please check your internet connection and try again.',
    );
  } else {
    showToast(`Database error: ${error}`);
  }
};

export const storeTask = async (uid, title, description) => {
  try {
    const taskKey = database().ref().child(`tasks/${uid}`).push().key;
    const task = {
      id: taskKey,
      title: title,
      description: description,
    };

    await withTimeout(
      database().ref(`tasks/${uid}/${taskKey}`).set(task),
      TIMEOUT_DURATION,
    );
    showToast('Your task has been added successfully', 'success');
    return true;
  } catch (error) {
    handleDatabaseError(error);
    return false;
  }
};

export const getTasks = async (uid, onDataChange) => {
  try {
    const tasksRef = database().ref(`tasks/${uid}`);
    const onValueChange = snapshot => {
      const tasksArray = [];
      snapshot.forEach(childSnapshot => {
        const taskId = childSnapshot.key;
        const taskData = childSnapshot.val();
        tasksArray.push({id: taskId, ...taskData});
      });
      onDataChange({tasks: tasksArray});
    };

    tasksRef.on('value', onValueChange, handleDatabaseError);

    return () => tasksRef.off('value', onValueChange);
  } catch (error) {
    handleDatabaseError(error);
    return false;
  }
};

export const deleteTasks = async (uid, tasks, setIsVisible) => {
  try {
    const tasksRef = database().ref(`tasks/${uid}`);
    for (const task of tasks) {
      await withTimeout(tasksRef.child(task.id).remove(), TIMEOUT_DURATION);
    }

    showToast('Your task has been deleted successfully', 'success', () => {
      setIsVisible(false);
    });
    return true;
  } catch (error) {
    handleDatabaseError(error);
    return false;
  }
};

export const updateTask = async (uid, taskId, title, description) => {
  try {
    const tasksRef = database().ref(`tasks/${uid}/${taskId}`);
    const newData = {
      title: title,
      description: description,
    };
    await withTimeout(tasksRef.update(newData), TIMEOUT_DURATION);

    showToast('Your task has been updated successfully', 'success');

    return true;
  } catch (error) {
    handleDatabaseError(error);
    return false;
  }
};
