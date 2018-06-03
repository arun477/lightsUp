import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

/**
 * LOCAL FILES AND MODULES
 */
import HomeTab from './TabNavigations/HomeTab';

/**
 * Tab NAVIGATION
 */
const TabNavigation = TabNavigator({
    HomeTab: {
        screen: HomeTab,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="home" size={20} style={{ color: tintColor }} />,
        }
    }
},
    {
        showIcon: true,
        lazyLoad: true,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
            indicatorStyle: {
                opacity: 0
            },
            showIcon: true,
            showLabel: false,
            activeTintColor: '#000',
            inactiveTintColor: '#d1cece',
            style: {
                backgroundColor: 'white',
                borderTopColor: 'white',
                borderTopWidth: 1,
            }
        }
    });

class MainScreen extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <TabNavigation />
        );
    }
}

export default MainScreen;

