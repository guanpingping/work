import React, { Component } from 'react'
import { Platform, StyleSheet } from 'react-native'
import SketchRouter from './src/navigation/index'

export default class App extends Component {
    render () {
        console.disableYellowBox = true
        return (
            <SketchRouter />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});