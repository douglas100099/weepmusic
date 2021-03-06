import React from 'react';
import { View, Image } from 'react-native';
const images = require('../assets/images/logo.png')

const Logo = () => (
    <View>
        <Image source={images}
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                resizeMode: "cover",
            }}
        />
    </View>
)

export default Logo;