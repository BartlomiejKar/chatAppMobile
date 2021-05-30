import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Pressable, FlatList } from "react-native";
import Card from "./Card"
import { useQuery } from "@apollo/client"
import { DataRooms } from "../utils/data"

const RoomsScreen = ({ navigation }) => {
    const { data } = useQuery(DataRooms)
    const [dataRooms, setDataRooms] = useState([])

    useEffect(() => {
        if (data) {
            const rooms = data.usersRooms.rooms
            setDataRooms(rooms)
        }
    }, [data])
    return (
        <View style={styles.list}>
            <FlatList
                data={dataRooms}
                renderItem={({ item }) => {
                    return (
                        <Pressable onPress={() => navigation.navigate("Chat", {
                            id: item.id
                        })} >
                            <Card rooms={item} />
                        </Pressable>
                    )
                }}
                keyExtractor={item => item.id}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    list: {
        backgroundColor: "#E5E5E5",
        flex: 1
    }
})
export default RoomsScreen