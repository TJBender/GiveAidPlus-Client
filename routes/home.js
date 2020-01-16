import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import JoinNewJob from '../containers/JoinNewJob'
import VolunteerPage from '../containers/VolunteerPage'
// import MainContainer from '../containers/MainContainer';


const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login'
        }
    },
    JoinNewJob: {
        screen: JoinNewJob
    },
    VolunteerPage: {
        screen: VolunteerPage,
        navigationOptions: 'My Jobs'

    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack)