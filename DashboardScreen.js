import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

export default class DashboardScreen extends React.Component {
    render() {
        return (
            // <View style={styles.container}>
            //     <Text> Dashboard Screen </Text>
            //     <Button  title="Signout"
            //     onPress={() => {
            //         this.props.navigation.navigate('Home')
            //     }}
            //     />
            // </View>
            <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Settings" component={DashboardScreen} />
            </Tab.Navigator>
          </NavigationContainer>

            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})
