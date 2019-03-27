import React from 'react';
import {
    Text,
    View
  } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';

import DetailsScreen from './DetailsScreen';
import HomeScreen from './HomeScreen';

export default RootStack = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: DetailsScreen,
        },
    },{
        contentComponent: (props) => (
            <View>
                <Text>Custom Header</Text>
                <DrawerItems {...props} />
                <Text>Custom Footer</Text>
                </View>
        )
    }
    );