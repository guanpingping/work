import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeIconWithBadge from './tabIcon';
import Ionicons from 'react-native-vector-icons/Ionicons';



import {TabPages} from './router.js';

const TabNavigator = createBottomTabNavigator(
    {
        Home: TabPages.Home,
        Settings: TabPages.Setting,
        Example:TabPages.Example
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = 'ios-home';
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                    IconComponent = HomeIconWithBadge;
                } else if (routeName === 'Settings' ) {
                    iconName = 'ios-options';
                } else if( routeName === 'Example' ){
                    iconName = 'md-apps';
                }
                // You can return any component that you like here!
                return <IconComponent name={iconName}
                    size={25}
                    color={tintColor} />;
            }
        }),
        tabBarOptions: {
            activeTintColor: 'green',
            inactiveTintColor: 'gray'
        }
    }
);


export default TabNavigator;