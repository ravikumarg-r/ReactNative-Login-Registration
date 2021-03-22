import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'

export default class ForgotpasswordScreen extends React.Component {
    
    state = {
        userid: "",
        errMsg : ""
    }

    onGetOTP = () => {
        if(this.state.userid == 'Admin'){
            this.props.navigation.navigate('Resetpassword');
        } else {
            // alert("Error");
            this.setState({errMsg: 'Invalid login credentials'})
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 35, marginLeft: 30 }}>Welcome</Text>
                <Text style={{ color: 'grey', marginTop: 20, marginLeft: 30 }}>Sign in to continue with your kyra account</Text>

                <TextInput
                    style={{ borderBottomColor: '#ddd', marginTop: 40, borderBottomWidth: 1, paddingBottom: 20, marginLeft: 30, marginRight: 30 }}
                    placeholder="User ID" 
                    onChangeText = {(text) => {
                        this.setState({ errMsg: "" }),
                        this.setState({ userid: text })}
                    }
                />

                <Text style={{ color: 'red', textAlign: 'center', marginTop: 30 }}>{this.state.errMsg}</Text>

                <View style={{ marginTop: 40, alignItems: 'center', justifyContent: 'center' }}>

                    <TouchableOpacity
                       onPress={() => this.onGetOTP()}
                        style={{
                            width: 200, backgroundColor: '#2196f3', padding: 10, alignItems: 'center', justifyContent: 'center',
                            borderRadius: 40, marginTop: 30
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>Get OTP Now</Text>
                    </TouchableOpacity>

                    

                </View>
               
                <View style={{ marginTop: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Already have an account?</Text>
                    <Text 
                    onPress={() => this.props.navigation.navigate('Login')}
                    style={{ fontSize: 16, fontWeight: 'bold' }}>Sign In</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
       
    }
})
