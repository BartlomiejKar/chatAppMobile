import React, { useState, useCallback, useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useQuery, useMutation } from "@apollo/client"
import { MessagesRoom, sendMessages } from "../utils/data"
import { Bubble, Composer, GiftedChat, InputToolbar, Send } from 'react-native-gifted-chat'
import ProfileIcon from '../../../assets/profile';
import SendIcon from "../../../assets/send"



const Chat = ({ route }) => {
    const [messages, setMessages] = useState([]);
    const [SendMessage] = useMutation(sendMessages)
    const { id } = route.params
    const idRoom = id
    const { data } = useQuery(MessagesRoom, {
        variables: { id: idRoom },
    });
    const idUser = data?.room?.user?.id

    useEffect(() => {
        if (data) {
            const messagesInRoom = data?.room?.messages.map(el => {
                let messages = {
                    ...el,
                    _id: el.id,
                    text: el.body,
                    createdAt: el.insertedAt,
                    user: {
                        _id: el.user.id,
                        avatar: el.user.profilePic || <ProfileIcon />,
                    }
                }
                return messages
            })
            setMessages(messagesInRoom)
        }

    }, [data])


    const onSend = useCallback((messages = []) => {
        // setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        SendMessage({
            variables: {
                roomId: idRoom,
                body: messages[0].text,
            }
        })
    }, [])
    const renderBubble = (props) => {
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
    const renderInput = (props) => {
        return <InputToolbar
            {...props}
            containerStyle={{
                backgroundColor: "#B6DEFD",
                borderTopColor: "#B6DEFD",
            }}
        />
    }

    const renderComposer = (props) => {
        return <Composer
            {...props}
            textInputStyle={styles.textInputStyle}
            placeholder=""
        />
    }
    const renderSend = (props) => {
        return (
            <Send
                {...props}
            >
                <SendIcon style={styles.sendIcon} />
            </Send>
        )
    }
    return (

        <GiftedChat
            messages={messages.reverse()}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            renderBubble={renderBubble}
            renderInputToolbar={renderInput}
            renderComposer={renderComposer}
            renderSend={renderSend}
            alwaysShowSend={true}
            user={{
                _id: idUser,
            }} />

    )
}

const styles = StyleSheet.create({
    textInputStyle: {
        backgroundColor: 'white',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 12,
        marginHorizontal: 16,
    },
    sendIcon: {
        width: 34,
        height: 34,
        marginRight: 10,
    }
})


export default Chat