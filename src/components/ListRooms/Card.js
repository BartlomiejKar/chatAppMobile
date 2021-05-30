import React from 'react';
import ProfileIcon from "../../../assets/profile"

import { View, Text, StyleSheet, Image } from "react-native"


const Card = ({ rooms }) => {
    const { name, id, roomPic } = rooms;
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {roomPic ? <Image source={{ uri: roomPic }} style={{ width: 64, height: 64, borderRadius: 100, backgroundColor: "blue" }} /> : <ProfileIcon />}
            </View>
            <View style={styles.messages}>
                <Text>{name}</Text>
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