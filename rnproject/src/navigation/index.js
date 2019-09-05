import React, { Component } from 'react'
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {
    Login,
    PhoneLogin
} from '../pages/index'

const SketchRouter = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        PhoneLogin: {
            screen: PhoneLogin,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        }
    },

    {
        headerBackTitleVisible: false
    }
)

export default createAppContainer(SketchRouter);