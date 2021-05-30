import React from 'react';
import { Poppins_700Bold, useFonts } from "@expo-google-fonts/poppins";
import { View, StyleSheet, Text, Image } from "react-native"
import PhoneIcon from '../../../assets/phone';
import VideoCall from '../../../assets/videocall';
const ChatHeader = (props) => {
    const userInfo = props.avatar.map(el => {
        return el.user.avatar
    })
    let [poppinsLoaded] = useFonts({
        Poppins_700Bold,
    });

    if (!poppinsLoaded) {
        return null
    }
    return (
        <View style={styles.container}>
            <Image style={styles.avatar} source={{ uri: userInfo[0] }} />
            <View style={styles.titleContainer}>
                <Text style={styles.text}>The Widlarz Group</Text>
                <Text style={styles.active}>Active now</Text>
            </View>
            <View style={styles.icons}>
                <PhoneIcon style={styles.searchIcon} />
                <VideoCall style={styles.peopleIcon} />
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#B6DEFD",
        height: 125,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        paddingLeft: 16,
        // marginBottom: 24
    },
    text: {
        fontSize: 16,
        color: "#5603AD",
        fontFamily: "Poppins_700Bold",
        top: 60,
        left: 16
    },
    icons: {
        flexDirection: "row",
        top: 65
    },
    peopleIcon: {
        marginLeft: 8,
        marginRight: 16
    },
    active: {
        fontSize: 14,
        color: "white",
        top: 60,
        left: 16,
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 50,
        top: 60
    },
    titleContainer: {
        marginLeft: -70
    }
})
export default ChatHeader