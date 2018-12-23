import React from 'react';
import { View, StyleSheet } from 'react-native';

import MapView from 'react-native-maps'

const usersMap = props =>  {
    return (
        <View style={styles.mapContainer}>
            <MapView 
            initialRegion={{
                latitude: 6.62944,
                longitude: 3.33275,
                latitudeDelta: 0.0622,
                longitudeDelta: 0.0421,
              }}
            style={styles.map} />
        </View>
    )
}

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: 200
    },
    map: {
        width: '100%',
        height: '100%'
    }
})

export default usersMap