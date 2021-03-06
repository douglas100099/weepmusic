import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import * as Updates from 'expo-updates';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

import { AuthProvider } from './contexts/auth'
import Routes from './routes';

const firebaseConfig = Constants.manifest.extra.firebaseConfig;
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const App = () => {

  const [assetsLoader, setAssetsLoader] = useState(false)
  const [msg, setMsg] = useState('')

  useEffect(() => {
    if (__DEV__) {
      setMsg("Carregando, aguarde")
      _loadResourcesAsync().then(() => {
        setAssetsLoader(true)
      });
    } else {
      try {
        setMsg("Checando atualizações")
        updates()
      } catch (e) {
        console.log(e);
      }
    }
  })

  const _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/splash.png'),
      ]),
      Font.loadAsync({
        'Product-Sans-Bold': require('./assets/fonts/Product-Sans-Bold.ttf'),
        'Product-Sans-Regular': require('./assets/fonts/Product-Sans-Regular.ttf'),
      }),
    ]);
  }

  const updates = async () => {
    const update = await Updates.checkForUpdateAsync();
    if (update.isAvailable) {
      setMsg("Baixando atualizações")
      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync();
    } else {
      setMsg("Carregando assets")
      _loadResourcesAsync().then(() => {
        setAssetsLoader(true)
      });
    }
  }

  return (
    assetsLoader ?
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
      :
      <View style={{ flex: 1 }}>
        <ActivityIndicator />
      </View>
  )
}

export default App;
