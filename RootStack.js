import { createStackNavigator } from 'react-navigation';

import DetailsScreen from './DetailsScreen';
import HomeScreen from './HomeScreen';

export default RootStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: DetailsScreen,
        },
    },
    {
        initialRouteName: 'Home',
    }
    );