import Toast from 'react-native-toast-message';

export const showToast = (text1, type = 'error', onHide) => {
  Toast.show({
    type: type,
    text1: text1,
    visibilityTime: 3000,
    autoHide: true,
    onHide: () => {
      onHide && onHide();
    },
    position: 'top',
  });
};
