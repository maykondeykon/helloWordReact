import React from 'react';
import { Image, StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Button,
  Text,
  Icon,
  Right
} from "native-base";

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Details',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./notif-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

    render() {
      return (
        <Container>
        <Header>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon active name="menu" />
            </Button>
          </Right>
        </Header>

      <Text>Details</Text>
      </Container>
      );
    }
  }