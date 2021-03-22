import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'

export default class HomeScreen extends React.Component {
    render() {

   

        return (
            <View style={styles.container}>
                
            <View style={styles.top}>
              <Image
                style={styles.image}
                source={require('./assets/logo-t.png')}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.head}>Hey welcomes you</Text>
            <Text style={styles.subheader}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
        
            <View style={{ flexDirection: 'row', margin: 20, paddingVertical: 20 }}>
              
              <TouchableOpacity 
              onPress={() => this.props.navigation.navigate('Login')}
              style={{ padding: 15, width: 150, borderRadius: 30, backgroundColor: '#2196f3', marginHorizontal: 3 }}>
                <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>Sign In</Text>
              </TouchableOpacity>
        
              <TouchableOpacity 
               onPress={() => this.props.navigation.navigate('Registration')} 
               style={{ padding: 15, width: 150, borderRadius: 30, backgroundColor: '#2196f3', marginHorizontal: 3 }}>
                <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>Sign Up</Text>
              </TouchableOpacity>
        
            </View>
        
            <Text>Or via social media</Text>
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
              <View style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: '#01579b', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>f</Text>
              </View>
              <View style={{ alignItems: 'center', justifyContent: 'center', height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: '#d32f2f', marginHorizontal: 10 }}>
                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>G</Text>
              </View>
              <View style={{ alignItems: 'center', justifyContent: 'center', height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: '#1976d2' }}>
                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>in</Text>
              </View>
            </View>
        
        
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    // marginTop: 70,
    alignItems: 'center',
    // justifyContent: 'center'
    backgroundColor: '#fff',
   
    },
    top: {
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center'
    },
    image: {
    width: 200,
    height: 200,
    marginTop: 40
    },
    head: {
    fontSize: 33,
    color: '#000',
    marginTop: 40
    },
    subheader: {
    marginRight: 60,
    marginLeft: 60
    },
    
    });
    