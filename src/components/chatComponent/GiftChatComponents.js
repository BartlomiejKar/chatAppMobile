import React from 'react';
import { StyleSheet } from "react-native"
import { Bubble, InputToolbar, Composer, Send } from "react-native-gifted-chat";
import ProfileIcon from '../../../assets/profile';
import SendIcon from "../../../assets/send";

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
            <SendIcon style={styles.sendIcon} />
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
        width: 34,
        height: 34,
        marginRight: 10,
    }
})