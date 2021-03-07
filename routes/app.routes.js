import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { colors, font } from '../constants';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Menu from '../navigation/Menu';
import { Home, Teste } from '../screens';
import { FirebaseProvider } from '../contexts/firebase';

const AppStack = createStackNavigator();

const OpenDrawer = ({ navigation }) => (
    <TouchableOpacity
        style={{
            height: 32,
            width: 32,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 15
        }}
        onPress={() => navigation.navigate('Teste')}
    >
        <Feather name="menu" size={30} color={colors.white} />
    </TouchableOpacity>
)

const AppRoutes = () => (
    <FirebaseProvider>
        <AppStack.Navigator>
            <AppStack.Screen
                name="Home"
                component={Menu}
                options={{
                    headerShown: false
                }}
            />
        </AppStack.Navigator>
    </FirebaseProvider>
)

export default AppRoutes;