import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'

export default class LoginScreen extends React.Component {
    
    state = {
        userid: "",
        password: "",
        errMsg : ""
    }

    onLogin = () => {
        if(this.state.userid == 'Admin' && this.state.password == "Admin"){
            this.props.navigation.navigate('Dashboard');
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
                    style={{ borderBottomColor: '#ddd', marginTop: 40, borderBottomWidth: 1, paddingBottom: 20, marginLeft: 30, marginRight: 30, textTransform: 'lowercase' }}
                    placeholder="User ID" 
                    onChangeText = {(text) => {
                        this.setState({ errMsg: "" }),
                        this.setState({ userid: text })}
                    }
                        
                    />

                <TextInput
                    style={{ borderBottomColor: '#ddd', marginTop: 40, borderBottomWidth: 1, paddingBottom: 20, marginLeft: 30, marginRight: 30, textTransform: 'lowercase' }}
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
                       onPress={() => this.onLogin()}
                        style={{
                            width: 200, backgroundColor: '#2196f3', padding: 10, alignItems: 'center', justifyContent: 'center',
                            borderRadius: 40, marginTop: 30
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>Login Now</Text>
                    </TouchableOpacity>

                    <Text 
                    onPress={() => this.props.navigation.navigate('Forgotpassword')}
                    style={{ marginTop: 20 }}>Forgot Password?</Text>

                </View>
                <Text style={{ marginTop: 40, textAlign: 'center' }}>Or via social media</Text>
                <View style={{ flexDirection: 'row', marginTop: 30, alignItems: 'center', justifyContent: 'center' }}>
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

                <View style={{ marginTop: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Don't have an account?</Text>
                    <Text 
                    onPress={() => this.props.navigation.navigate('Registration')}
                    style={{ fontSize: 16, fontWeight: 'bold' }}>Sign Up</Text>
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
