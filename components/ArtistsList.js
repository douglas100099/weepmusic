import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { colors, font } from '../constants';
import { Feather } from '@expo/vector-icons';

import FirebaseContext from '../contexts/firebase';

const ArtistsList = () => {

    const { data3 } = useContext(FirebaseContext)

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{
                paddingRight: 34,
                alignItems: 'center'
            }}
            onPress={() => console.log(item.musicName)}
        >
            <Image
                source={item.artistImage}
                style={{
                    width: 115,
                    height: 115,
                }}
            />
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10
                }}
            >
                <Text
                    style={{
                        fontFamily: font.regular,
                        fontSize: 13,
                        color: colors.white
                    }}
                >{item.musicName}</Text>
                <Text
                    style={{
                        fontFamily: font.regular,
                        fontSize: 13,
                        color: 'rgba(255,255,255, 0.4)'
                    }}
                >{item.artistName}</Text>
            </View>
        </TouchableOpacity>
    )

    return (
        <View style={{ marginTop: 35 }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginHorizontal: 24
                }}>
                <Text
                    style={{
                        fontFamily: font.regular,
                        fontSize: 18,
                        color: colors.white
                    }}
                >Novos albuns</Text>
                <TouchableOpacity
                    onPress={() => console.log('See all pressed')}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}
                >
                    <Text
                        style={{
                            fontFamily: font.regular,
                            fontSize: 18,
                            color: colors.white
                        }}
                    >Todos</Text>
                    <Feather
                        style={{ marginLeft: 4 }}
                        name="chevron-right"
                        size={24}
                        color={colors.redlight}
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                contentContainerStyle={{marginTop: 15, marginLeft: 24 }}
                data={data3}
                scrollEnabled={true}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

export default ArtistsList;