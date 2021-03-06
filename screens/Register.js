import React, { useContext,useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StatusBar,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Alert
} from 'react-native';
import { BackgroundImage, Button, Logo } from '../components';
import { font, colors } from '../constants';
import { Feather } from '@expo/vector-icons';

import AuthContext from '../contexts/auth';

const Register = () => {

    const { register } = useContext(AuthContext);

    const [togglePass, setTogglePass] = useState(true);
    const [togglePass2, setTogglePass2] = useState(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    function checkEmail() {
        if (email.length > 2) {
            return true
        } else {
            return false
        }
    }

    function checkPass() {
        if (password.length > 2) {
            if (password === password2) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    async function handleRegister(email, password) {
        try {
            if (checkEmail() && checkPass()) {
                const registerUser = await register(email, password);
                if (registerUser) {
                    console.log('Logado com sucesso');
                }
            } else {
                Alert.alert(
                    'Campos incorretos',
                    'Por favor, verifique os campos novamente.',
                    [
                        {
                            text: 'OK'
                        }
                    ]
                )
            }
        } catch (e) {
            alert(e)
        }
    }

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
                >CADASTRAR</Text>
                <View style={{ height: 50, width: '80%', justifyContent: 'center' }}>
                    <Feather
                        name="mail"
                        size={18}
                        color={colors.redlight}
                        style={{
                            position: 'absolute',
                            left: 8,
                            zIndex: 99
                        }}
                    />
                    <TextInput
                        onChangeText={(email) => setEmail(email)}
                        placeholder='Digite seu e-mail'
                        placeholderTextColor='rgba(255,255,255, 0.4)'
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
                        onChangeText={(password) => setPassword(password)}
                        placeholder='Digite sua senha'
                        placeholderTextColor='rgba(255,255,255, 0.4)'
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
                        onChangeText={(password2) => setPassword2(password2)}
                        placeholder='Confirme sua senha'
                        placeholderTextColor='rgba(255,255,255, 0.4)'
                        secureTextEntry={togglePass2}
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
                                onPress={() => setTogglePass2(!togglePass2)}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Button
                    styleView={{ marginTop: 50 }}
                    onPress={() => handleRegister(email, password)}
                >
                    CADASTRAR
                </Button>
                <View style={{
                    marginTop: 25,
                }}>
                    <Text style={{
                        fontFamily: font.bold,
                        color: 'rgba(255,255,255, 0.8)',
                        fontSize: 14
                    }}>Ao se cadastar você aceita os termos</Text>
                </View>
                <StatusBar barStyle='light-content' translucent={true} backgroundColor="transparent" />
            </View>
        </View>
    );
}

export default Register;