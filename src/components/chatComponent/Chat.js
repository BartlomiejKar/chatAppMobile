import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useQuery } from "@apollo/client"
import { MessagesRoom } from "../utils/data"



const Chat = ({ route }) => {
    const { id } = route.params
    const idRoom = id
    const { data } = useQuery(MessagesRoom, {
        variables: { id: idRoom },
    });
    console.log(data)
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