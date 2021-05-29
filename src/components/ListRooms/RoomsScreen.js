import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Card from "./Card"

const RoomsScreen = () => {

    return (
        <View style={styles.list}>
            <Card />
            <Card />
            <Card />
        </View>
    )
}


const styles = StyleSheet.create({
    list: {
        backgroundColor: "#E5E5E5",
        height: 10000,
    }
})
export default RoomsScreen