import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { BackgroundImage, Logo } from '../components';
import { colors, font } from '../constants/theme';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = () => {
    return (
        <View style={{ flex: 1, backgroundColor: colors.darkblue }}>
            <BackgroundImage />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ marginBottom: 25 }}>
                    <Logo />
                    <Text
                        style={{
                            fontFamily: font.bold,
                            fontSize: 15,
                            color: colors.white
                        }}
                    >Weep Music</Text>
                </View>
                <Text
                    style={{
                        fontFamily: font.regular,
                        color: colors.white,
                        fontSize: 15,
                        marginBottom: 25,
                    }}
                >LOGIN</Text>
                <View style={{ height: 50, width: '80%', justifyContent: 'center' }}>
                    <Feather
                        name="smartphone"
                        size={18}
                        color={colors.redlight}
                        style={{
                            position: 'absolute',
                            left: 8,
                            zIndex: 99
                        }}
                    />
                    <TextInput
                        style={{
                            height: 50,
                            borderRadius: 5,
                            padding: 5,
                            paddingLeft: 40,
                            backgroundColor: 'rgba(255,255,255, 0.3)',
                            fontFamily: font.regular,
                            fontSize: 16,
                            color: 'rgba(255,255,255, 0.8)'
                        }}
                    />
                </View>
                <View style={{ height: 50, width: '80%', justifyContent: 'center', marginTop: 30 }}>
                    <Feather
                        name="lock"
                        size={18}
                        color={colors.redlight}
                        style={{
                            position: 'absolute',
                            left: 8,
                            zIndex: 99
                        }}
                    />
                    <TextInput
                        style={{
                            height: 50,
                            borderRadius: 5,
                            padding: 5,
                            paddingLeft: 40,
                            paddingRight: 35,
                            backgroundColor: 'rgba(255,255,255, 0.3)',
                            fontFamily: font.regular,
                            fontSize: 16,
                            color: 'rgba(255,255,255, 0.8)'
                        }}
                    />
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            height: 20,
                            width: 20,
                            right: 8,
                            zIndex: 99
                        }}
                    >
                        <Feather
                            name="eye"
                            size={18}
                            color={colors.redlight}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Login;