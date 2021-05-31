import React, { useState, useCallback, useEffect } from 'react';
import { useQuery, useMutation } from "@apollo/client"
import { MessagesRoom, sendMessages } from "../utils/data"
import { GiftedChat } from 'react-native-gifted-chat'
import { renderBubble, renderComposer, renderInput, renderSend } from "./GiftChatComponents"
import ChatHeader from "../header/ChatHeader"



const Chat = ({ route }) => {
    const [messages, setMessages] = useState([]);
    const [SendMessage] = useMutation(sendMessages);
    const [avatar, setAvatar] = useState([])
    const { id } = route.params
    const idRoom = id
    const { data } = useQuery(MessagesRoom, {
        variables: { id: idRoom },
    });
    const idUser = data?.room?.user?.id
    useEffect(() => {
        if (data) {
            const avatar = data?.room?.messages.map(el => {
                let avatarIcon = {
                    user: {
                        _id: el.user.id,
                        avatar: el.user.profilePic,
                    }
                }
                return avatarIcon
            })
            setAvatar(avatar)
            const messagesInRoom = data?.room?.messages.map(el => {
                let messages = {
                    ...el,
                    _id: el.id,
                    text: el.body,
                    createdAt: el.insertedAt,
                    user: {
                        _id: el.user.id,
                        avatar: el.user.profilePic,
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

    return (
        <>
            <ChatHeader avatar={avatar} />
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
        </>
    )

}




export default Chat