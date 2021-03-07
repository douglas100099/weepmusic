import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import { colors, font } from '../constants';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AppStack = createStackNavigator();

const AppRoutes = () => (
    <AppStack.Navigator>
        <AppStack.Screen
            name="Home"
            component={Home}
            options={{
                headerStyle: {
                    backgroundColor: colors.darkblue,
                },
                headerTitle: "Weep Music",
                headerTitleAlign: "center",
                headerTitleStyle: {
                    color: colors.white,
                    fontFamily: font.bold,
                    fontSize: 15
                },
                headerLeft: (() =>
                    <TouchableOpacity
                        style={{
                            height: 32,
                            width: 32,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: 15
                        }}
                    >
                        <Feather name="menu" size={30} color={colors.white} />
                    </TouchableOpacity>
                ),
                headerRight: (() =>
                    <TouchableOpacity
                        style={{
                            height: 32,
                            width: 32,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: 15
                        }}
                    >
                        <Feather name="search" size={30} color={colors.white} />
                    </TouchableOpacity>
                )
            }}
        />
    </AppStack.Navigator>
)

export default AppRoutes;