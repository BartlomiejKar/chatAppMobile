import React, { useEffect, useState } from 'react';
import { SvgXml } from "react-native-svg"
import ProfileIcon from "../../../assets/profile"
import { useQuery } from "@apollo/client";

import { View, Text, StyleSheet, Image } from "react-native"

import { MessagesRoom } from "../utils/data"


const Card = ({ rooms }) => {
    const [messages, setMessages] = useState([])
    const { name, roomPic } = rooms;
    const { data } = useQuery(MessagesRoom, {
        variables: { id: rooms.id }
    })
    const messagesArray = messages.map(el => {
        return el.text
    })
    useEffect(() => {
        if (data) {
            const messagesInRoom = data?.room?.messages.map(el => {
                let messages = {
                    _id: el.id,
                    text: el.body,
                }
                return messages
            })
            setMessages(messagesInRoom)
        }

    }, [data])
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {roomPic ? <Image source={{ uri: roomPic }} style={{ width: 64, height: 64, borderRadius: 100, backgroundColor: "blue" }} /> : <SvgXml xml={ProfileIcon} />}
            </View>
            <View style={styles.messages}>
                <Text style={styles.titleMessages}>{name}</Text>
                <Text>{messagesArray[messagesArray.length - 1]}</Text>
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
        justifyContent: "center",
        padding: 5
    },
    imageContainer: {
        margin: 16,
    },
    titleMessages: {
    }
})
export default Card