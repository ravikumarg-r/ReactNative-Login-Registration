import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import DashboardScreen from './DashboardScreen';
import Registration from './RegistrationScreen';
import ForgotpasswordScreen from './ForgotpasswordScreen';
import ResetpasswordScreen from './ResetpasswordScreen';
import RegistrationScreen from './RegistrationScreen';


const Stack = createStackNavigator();


export default function App() {
  return (
    
     <View style={styles.container}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Dashboard" component={DashboardScreen} />
                <Stack.Screen name="Registration" component={RegistrationScreen} />
                <Stack.Screen name="Forgotpassword" component={ForgotpasswordScreen} />
                <Stack.Screen name="Resetpassword" component={ResetpasswordScreen} />
              </Stack.Navigator>
            </NavigationContainer>
    </View>
);
}


const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff'
},
});

