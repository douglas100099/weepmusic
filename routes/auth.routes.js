import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login, Register } from '../screens';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen
            name="Login"
            component={Login} 
            options={{
                headerShown: false
            }}
        />
        <AuthStack.Screen
            name="Register"
            component={Register} 
            options={{
                headerShown: false
            }}
        />
    </AuthStack.Navigator>
)

export default AuthRoutes;