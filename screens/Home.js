import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../constants';
import { Feather } from '@expo/vector-icons';
import {
    AlbunsList,
    ArtistsList,
    Button,
    DiscoverMusic,
} from '../components';

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: colors.darkblue }}>
            <ScrollView style={{ flex: 1 }}>
                <DiscoverMusic />
                <AlbunsList />
                <ArtistsList />
            </ScrollView>
        </View>
    );
}

export default Home;