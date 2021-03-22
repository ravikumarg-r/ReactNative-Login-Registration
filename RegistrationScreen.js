import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'

export default class RegistrationScreen extends React.Component {

    state = {
        userName: "",
        password: "",
        sponserID: "",
        firstName: "",
        lastName: "",
        middleName: "",
        mobileNumber: "",
        panNumber: "",
        errMsg: ""
    }

    onRegister = () => {
        // if(this.state.userid == 'Admin' && this.state.password == "Admin"){
        this.props.navigation.navigate('Login');
        // } else {
        // alert("Error");
        // this.setState({errMsg: 'Invalid login credentials'})
        // }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 35, marginLeft: 30 }}>Welcome</Text>
                <Text style={{ color: 'grey', marginTop: 20, marginLeft: 30 }}>Sign in to continue with your kyra account</Text>

                <TextInput
                    style={{ borderBottomColor: '#ddd', marginTop: 20, borderBottomWidth: 1, paddingBottom: 20, marginLeft: 30, marginRight: 30, textTransform: 'lowercase' }}
                    placeholder="User ID"
                    onChangeText={(text) => {
                        this.setState({ errMsg: "" }),
                            this.setState({ userName: text })
                    }
                    }

                />

                <TextInput
                    style={{ borderBottomColor: '#ddd', marginTop: 20, borderBottomWidth: 1, paddingBottom: 20, marginLeft: 30, marginRight: 30, textTransform: 'lowercase' }}
                    placeholder="Password"
                    onChangeText={(text) => {
                        this.setState({ errMsg: "" }),
                            this.setState({ password: text })
                    }
                    }
                />

                <TextInput
                    style={{ borderBottomColor: '#ddd', marginTop: 20, borderBottomWidth: 1, paddingBottom: 20, marginLeft: 30, marginRight: 30, textTransform: 'lowercase' }}
                    placeholder="Sponser ID"
                    onChangeText={(text) => {
                        this.setState({ errMsg: "" }),
                            this.setState({ sponserID: text })
                    }
                    }
                />

                <TextInput
                    style={{ borderBottomColor: '#ddd', marginTop: 20, borderBottomWidth: 1, paddingBottom: 20, marginLeft: 30, marginRight: 30, textTransform: 'lowercase' }}
                    placeholder="First Name"
                    onChangeText={(text) => {
                        this.setState({ errMsg: "" }),
                            this.setState({ firstName: text })
                    }
                    }
                />

                <TextInput
                    style={{ borderBottomColor: '#ddd', marginTop: 20, borderBottomWidth: 1, paddingBottom: 20, marginLeft: 30, marginRight: 30, textTransform: 'lowercase' }}
                    placeholder="Last Name"
                    onChangeText={(text) => {
                        this.setState({ errMsg: "" }),
                            this.setState({ lastName: text })
                    }
                    }
                />

                <TextInput
                    style={{ borderBottomColor: '#ddd', marginTop: 20, borderBottomWidth: 1, paddingBottom: 20, marginLeft: 30, marginRight: 30, textTransform: 'lowercase' }}
                    placeholder="Middle Name"
                    onChangeText={(text) => {
                        this.setState({ errMsg: "" }),
                            this.setState({ middleName: text })
                    }
                    }
                />

                <TextInput
                    style={{ borderBottomColor: '#ddd', marginTop: 20, borderBottomWidth: 1, paddingBottom: 20, marginLeft: 30, marginRight: 30, textTransform: 'lowercase' }}
                    placeholder="Mobile Number"
                    onChangeText={(text) => {
                        this.setState({ errMsg: "" }),
                            this.setState({ mobileNumber: text })
                    }
                    }
                />

                <TextInput
                    style={{ borderBottomColor: '#ddd', marginTop: 20, borderBottomWidth: 1, paddingBottom: 20, marginLeft: 30, marginRight: 30, textTransform: 'lowercase' }}
                    placeholder="PAN"
                    onChangeText={(text) => {
                        this.setState({ errMsg: "" }),
                            this.setState({ panNumber: text })
                    }
                    }
                />


                <Text style={{ color: 'red', textAlign: 'center', marginTop: 20 }}>{this.state.errMsg}</Text>

                <View style={{ marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>

                    <TouchableOpacity
                        onPress={() => this.onRegister()}
                        style={{
                            width: 200, backgroundColor: '#2196f3', padding: 10, alignItems: 'center', justifyContent: 'center',
                            borderRadius: 40, marginTop: 0
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>Sign Up Now</Text>
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
