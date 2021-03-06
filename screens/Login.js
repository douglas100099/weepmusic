import React, {useState} from 'react';
import { View, Text, TextInput, StatusBar } from 'react-native';
import { BackgroundImage, Button, Logo } from '../components';
import { colors, font } from '../constants/theme';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = () => {

    const [togglePass, setTogglePass] = useState(true)

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
                            backgroundColor: 'rgba(255,255,255, 0.2)',
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
                        secureTextEntry={togglePass}
                        style={{
                            height: 50,
                            borderRadius: 5,
                            padding: 5,
                            paddingLeft: 40,
                            paddingRight: 35,
                            backgroundColor: 'rgba(255,255,255, 0.2)',
                            fontFamily: font.regular,
                            fontSize: 16,
                            color: 'rgba(255,255,255, 0.8)'
                        }}
                    />
                    <View style={{ width: 20, height: 20, position: 'absolute', right: 8 }}>
                        <TouchableOpacity>
                            <Feather
                                name="eye"
                                size={18}
                                color={colors.redlight}
                                onPress={() => setTogglePass(!togglePass)}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Button styleView={{ marginTop: 50 }}>
                    LOGIN
                </Button>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 25,
                }}>
                    <Text style={{
                        fontFamily: font.bold,
                        color: colors.white,
                        fontSize: 16
                    }}>Não possui conta?</Text>
                    <View style={{
                        marginLeft: 3
                    }}>
                        <TouchableOpacity>
                            <Text style={{
                                fontFamily: font.bold,
                                color: colors.redlight,
                                fontSize: 16,
                                textDecorationLine: 'underline',
                            }}>Cadastre-se agora!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <StatusBar barStyle='light-content' translucent={true} backgroundColor="transparent" />
            </View>
        </View>
    );
}

export default Login;