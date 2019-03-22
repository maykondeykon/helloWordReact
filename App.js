import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button,Alert} from 'react-native';

export default class App extends Component{

  state = {
    nome : '',
    data : '',
    nomeSalvo : '',
    dataSalvo : ''
  }

  salva = () =>{

    this.setState({
      nomeSalvo : this.state.nome,
      dataSalvo : this.state.data,
      nome : '',
      data : '',
    })
  }

  render() {


    return (
      <View style={styles.container}>
        
        <TextInput placeholder="Person"
          value = {this.state.nome}
          onChangeText={(e) => this.setState({nome : e})}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}/>
       
        <TextInput 
          style = {styles.inputBirthDate}
          placeholder="Birthdate"
          value = {this.state.data}
          onChangeText={(e) => this.setState({data : e})}/>
        
        <Button
            title="Salvar"
            color="#841584"
            onPress = {this.salva}
            accessibilityLabel="Learn more about this purple button"
        />

        <Text>{this.state.nomeSalvo}</Text>
        <Text>{this.state.dataSalvo}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   padding : 10,
  },
  inputBirthDate : {
    height: 40, 
    borderColor: 'blue', 
    borderWidth: 1,
    margin:2,
  }
});