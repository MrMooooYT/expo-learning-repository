import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const width = Dimensions.get("window").width;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        flexDirection: width > 1000 ? "row" : "column"
      }}>
        <View style={{margin: 50}}>
          <Text style={{marginTop: 30, color: "#F4E46E", fontSize: 30}}>cows</Text>
          <Text style={{marginTop: 30, color: "#FFFFFF", fontSize: 37.5, width: 270}}>Best place to buy & sell crypto</Text>
          <View style={{flexDirection: "row", borderColor: "#F4E46E", borderWidth: 2, padding: 15, marginTop: 30, borderRadius: 10, width: 200}}>
            <Text style = {{marginRight: 12.5, color: "#F4E46E", fontSize: 22}}>Get Started</Text>
            <Image source={require("./assets/stocks.png")} style={{width: 25, height: 25}}/>
          </View>
        </View>
        <Image source={require("./assets/moneystuff.png")} style={{width: 400, height: 400}}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});