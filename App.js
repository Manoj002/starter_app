import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class App extends React.Component {

  render() {

    return(
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Start editing your app</Text>
      </View>
    )

  }
}

export default App;