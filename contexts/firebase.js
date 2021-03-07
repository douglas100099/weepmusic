import React, { createContext, useState, useEffect } from 'react';
import * as firebase from 'firebase';
import { bannerData, albumData, musicData } from '../constants/fakedb';

const FirebaseContext = createContext({data: {}});

export const FirebaseProvider = ({ children }) => {

    const [bannerdata] = useState(bannerData)
    const [albumdata] = useState(albumData)
    const [musicdata] = useState(musicData)

    return (
        <FirebaseContext.Provider
            value={{
                data: bannerdata,
                data2: albumdata,
                data3: musicdata,
            }}>
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseContext;