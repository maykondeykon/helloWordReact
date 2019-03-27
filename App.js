import React from 'react';
import { createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import RootStack from './RootStack';

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}