import React from 'react';
import { StyleSheet } from "react-native"
import { Bubble, InputToolbar, Composer, Send } from "react-native-gifted-chat";
import { SvgXml } from "react-native-svg"
import sendIcon from "../../../assets/send"

export const renderBubble = (props) => {
    return <Bubble
        {...props}
        wrapperStyle={{
            right: {
                maxWidth: 245,
                backgroundColor: "#993AFC",
            },
            left: {
                maxWidth: 245,
                backgroundColor: "white",
            },
        }}
    />
}
export const renderInput = (props) => {
    return <InputToolbar
        {...props}
        containerStyle={{
            backgroundColor: "#B6DEFD",
            borderTopColor: "#B6DEFD",
        }}
    />
}

export const renderComposer = (props) => {
    return <Composer
        {...props}
        textInputStyle={styles.textInputStyle}
        placeholder=""
    />
}
export const renderSend = (props) => {
    return (
        <Send
            {...props}
        >
            <SvgXml style={styles.sendIcon} xml={sendIcon} />
        </Send>
    )
}

const styles = StyleSheet.create({
    textInputStyle: {
        backgroundColor: 'white',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 12,
        marginHorizontal: 16,
        padding: 12,
        minHeight: 41,
    },
    sendIcon: {
        marginRight: 10,
    }
})