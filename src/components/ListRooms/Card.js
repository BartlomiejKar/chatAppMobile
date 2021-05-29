import React from 'react';

import { View, Text, StyleSheet, Image } from "react-native"


const Card = () => {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={{ width: 64, height: 64, borderRadius: 100, backgroundColor: "blue" }} />
            </View>
            <View style={styles.messages}>
                <Text>header title</Text>
                <Text>Some messages</Text>
            </View>
        </View >

    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        borderRadius: 12,
        marginBottom: 12
    },
    messages: {
        justifyContent: "center"
    },
    imageContainer: {
        margin: 16,
    }
})
export default Card