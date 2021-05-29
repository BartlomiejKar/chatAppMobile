
import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Header from "./src/components/header/Header"
import RoomsScreen from "./src/components/ListRooms/RoomsScreen"

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View>
        <Header />
        <RoomsScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    height: 46,
    backgroundColor: "#B6DEFD"
  },
});
