import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { colors, font } from '../constants';
import { Feather } from '@expo/vector-icons';

import FirebaseContext from '../contexts/firebase';

const AlbunsList = () => {

    const { data2 } = useContext(FirebaseContext)

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{
                paddingRight: 40,
                alignItems: 'center'
            }}
            onPress={() => console.log(item.albumName)}
        >
            <Image
                source={item.albumImage}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
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
                >{item.albumName}</Text>
                <Text
                    style={{
                        fontFamily: font.regular,
                        fontSize: 13,
                        color: 'rgba(255,255,255, 0.4)'
                    }}
                >{item.artist}</Text>
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
                data={data2}
                scrollEnabled={true}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

export default AlbunsList;