import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Chat = () => {
    return (
        <View style={styles.container}>
            <Text>This is chat</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
        height: "100%"
    }
})
export default Chat