import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Teste } from '../screens';
import { colors, font } from '../constants';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

const Menu = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Home"
                component={Home}
                options={({ navigation, route }) => ({
                    headerShown: true,
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
                                height: 25,
                                width: 25,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginLeft: 15
                            }}
                            onPress={() => navigation.toggleDrawer()}
                        >
                            <Feather name="menu" size={24} color={colors.white} />
                        </TouchableOpacity>
                    ),
                    headerRight: (() =>
                        <TouchableOpacity
                            style={{
                                height: 25,
                                width: 25,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: 15
                            }}
                        >
                            <Feather name="search" size={24} color={colors.white} />
                        </TouchableOpacity>
                    )
                })}
            />
            <Drawer.Screen
                name="Teste"
                component={Teste}
                options={{
                    headerShown: true
                }}
            />
        </Drawer.Navigator>
    );
}

export default Menu;