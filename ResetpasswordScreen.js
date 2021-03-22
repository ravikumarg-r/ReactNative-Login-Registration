import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'

export default class ResetpasswordScreen extends React.Component {
    
    state = {
        otp: "",
        oldPassword: "",
        password: "",
        errMsg : ""
    }

    onResetPassword = () => {
        if(this.state.otp == 'Admin' && this.state.oldPassword == "Admin" && this.state.password == "Admin"){
            this.props.navigation.navigate('Login');

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
                    placeholder="OTP" 
                    onChangeText = {(text) => {
                        this.setState({ errMsg: "" }),
                        this.setState({ otp: text })}
                    }
                    />

                <TextInput
                    style={{ borderBottomColor: '#ddd', marginTop: 40, borderBottomWidth: 1, paddingBottom: 20, marginLeft: 30, marginRight: 30 }}
                    placeholder="Old Password"
                    onChangeText = {(text) => 
                    {
                        this.setState({ errMsg: "" }),
                        this.setState({ oldPassword: text })} 
                    }
                    />

                   <TextInput
                    style={{ borderBottomColor: '#ddd', marginTop: 40, borderBottomWidth: 1, paddingBottom: 20, marginLeft: 30, marginRight: 30 }}
                    placeholder="Password"
                    onChangeText = {(text) => 
                    {
                        this.setState({ errMsg: "" }),
                        this.setState({ password: text })} 
                    }
                    />


                    <Text style={{ color: 'red', textAlign: 'center', marginTop: 30 }}>{this.state.errMsg}</Text>

                <View style={{ marginTop: 40, alignItems: 'center', justifyContent: 'center' }}>

                    <TouchableOpacity
                       onPress={() => this.onResetPassword()}
                        style={{
                            width: 200, backgroundColor: '#2196f3', padding: 10, alignItems: 'center', justifyContent: 'center',
                            borderRadius: 40, marginTop: 30
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>Reset Password Now</Text>
                    </TouchableOpacity>

                </View>
               

                <View style={{ marginTop: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Remember your password?</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Sign In</Text>
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
