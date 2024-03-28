import { View, Text, StyleSheet, FlatList } from 'react-native'
import Trackinginput from '../component/TrackingInput/Trackinginput';
import AdminButton from '../component/AdminButton/AdminButton';
import React, { useState } from 'react'

const looptest = () => {
    var trackingloop = [];
    const [number, setNumber] = useState('');
    const [number2, setNumber2] = useState('');
    const [track1, setTrack1] = useState('');
    const [track2, setTrack2] = useState('');


    const trackingId = [{
        trackingloop
    }]

    for (let i = track1; i <= track2; i++) {
        trackingloop.push(
            <View key={i}>
                <Text> Tracking : {String(i).padStart(5, '0')}{'\n'}</Text>
            </View>
        );
    }
    const onSignInPressed = (number, number2) => {
        setTrack1(number);
        setTrack2(number2);
        // console.warn(track1, track2)
    }

    return (

        <View >
            <Text >this is test for tracking!!!</Text>

            <FlatList
                data={trackingId}
                renderItem={({ item }) =>
                    <View style={styles.box}>
                        <Text style={styles.item}>{item.trackingloop}</Text>
                    </View>
                }
            />

            {/* <ScrollView>
                {trackingloop}
            </ScrollView> */}

            <Trackinginput
                placeholder="Tracking number"
                value={number}
                setValue={setNumber}
            />

            <Trackinginput
                placeholder="Tracking number2"
                value={number2}
                setValue={setNumber2}
            />
            <AdminButton text="Submin Tracking" onPress={() => onSignInPressed(number, number2)} />
        </View>
    );
}
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    item: {
        fontSize: 24,
        flex: 1,
        maxWidth: 20,
    },
    box: {
        flexDirection: "row",
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 10,
        paddingHorizontal: 20,
    }
})

export default looptest
