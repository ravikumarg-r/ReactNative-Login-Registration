import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class DashboardScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Dashboard Screen </Text>
                <Button  title="Signout"
                onPress={() => {
                    this.props.navigation.navigate('Home')
                }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
