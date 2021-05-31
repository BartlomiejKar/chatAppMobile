import React from 'react';
import { View, StyleSheet, Text } from "react-native"
import { Poppins_700Bold, useFonts } from "@expo-google-fonts/poppins";
import { SvgXml } from "react-native-svg"
import searchIcon from "../../../assets/search"
import peopleIcon from "../../../assets/rooms"

const Header = () => {
    let [poppinsLoaded] = useFonts({
        Poppins_700Bold,
    });

    if (!poppinsLoaded) {
        return null
    }
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Rooms</Text>
            </View>
            <View style={styles.icons}>
                <SvgXml xml={searchIcon} />
                <SvgXml style={styles.peopleIcon} xml={peopleIcon} />
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
        fontSize: 36,
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
    }
})
export default Header