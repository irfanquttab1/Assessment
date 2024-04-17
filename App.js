import React from 'react';
import Toast from 'react-native-toast-message';
import StackNaviation from './src/Navigation/StackNaviation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/Store';
import {StatusBar, View} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{flex: 1}}>
          <StatusBar backgroundColor={'teal'} barStyle="dark-content" />
          <StackNaviation />
          <Toast />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
