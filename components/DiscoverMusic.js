import React, {useContext} from 'react';
import { View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { colors, font } from '../constants';

import FirebaseContext from '../contexts/firebase';
import Button from './Button';

const DiscoverMusic = () => {
    const { data } = useContext(FirebaseContext)

    const renderItem = ({ item }) => (
        <View style={{width: '90%', height: 183 }}>
            <Image 
                source={item.bannerImage}
                style={{ height: '100%', width: '100%', borderRadius: 5 }}
                resizeMode='cover'
            />
        </View>
    )

    return (
        <View style={{ flex: 1, marginTop: 30, marginLeft: 24}}>
            <Text
                style={{
                    fontFamily: font.regular,
                    fontSize: 18,
                    color: colors.white
                }}
            >Descubra</Text>
            <FlatList
                contentContainerStyle={{ width: '100%',marginTop: 15 }}
                data={data}
                scrollEnabled={true}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
            />
        </View>
    );
}

export default DiscoverMusic;