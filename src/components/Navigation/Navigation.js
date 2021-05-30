import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import RoomsScreen from "../ListRooms/RoomsScreen";
import Chat from "../chatComponent/Chat"




const Stack = createStackNavigator();

const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName="RoomsScreen">
                <Stack.Screen name='RoomsScreen' component={RoomsScreen} />
                <Stack.Screen name='Chat' component={Chat} />
            </Stack.Navigator >
        </NavigationContainer>
    );
}

export default Navigation
