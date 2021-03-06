import React from 'react';
import { View, Text, Image } from 'react-native';
const images = require('../assets/images/IconBackground.png')

const BackgroundImage = () => {

    return (
        <View>
            <Image source={images}
                style={{
                    resizeMode: "cover",
                    justifyContent: "center",
                    left: -360,
                    position: 'absolute'
                }}/>
        </View>
    )
}
export default BackgroundImage;