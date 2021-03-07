import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';


import AuthContext from '../contexts/auth';
import { colors } from '../constants';

const Routes = () => {
  const { signed, loading } = useContext(AuthContext);
  
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItem: 'center', backgroundColor: colors.darkblue }}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes;