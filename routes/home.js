import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../components/Login';
import JoinNewJob from '../containers/JoinNewJob';
import VolunteerPage from '../containers/VolunteerPage';
import Profile from '../components/Profile';
import Gif from '../containers/Gif';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            headerTitle: ()=> <Header />,
        },
    },
    JoinNewJob: {
        screen: JoinNewJob,
        navigationOptions: {
            headerTitle: () => <Header/>
        },
    },
    VolunteerPage: {
        screen: VolunteerPage,
        navigationOptions: {
            headerTitle: () => <Header/>
        },

    },
    'Thank You!': {
        screen: Gif,
        navigationOptions: {
            headerTitle: () => <Header/>
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            headerTitle: () => <Header />
        },
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack)