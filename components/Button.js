import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { colors, font } from '../constants/theme'

const Button = ({ onPress, children, styleView }) => {
    return (
        <View
            style={{
                height: 50,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                ...styleView
            }}>
            <TouchableOpacity
                onPress={onPress}
                style={{
                    height: 46,
                    width: '80%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    backgroundColor: colors.redlight
                }}
            >
                <Text style={{
                    fontFamily: font.bold,
                    fontSize: 14,
                    color: colors.white,
                }}>{children}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Button;