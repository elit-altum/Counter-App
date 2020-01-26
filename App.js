import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight } from 'react-native';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      buttonText: 'DARK',
      darkMode: 0
    }

    this.onAddNumber = this.onAddNumber.bind(this);
    this.onSubtractNumber = this.onSubtractNumber.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onChangeTheme = this.onChangeTheme.bind(this);
  }

  onAddNumber() {
    this.setState( prevState => ({ count: prevState.count + 1 }));
  }

  onSubtractNumber() {
    this.setState( prevState => ({ count: prevState.count - 1 }));
  }

  onReset() {
    this.setState( () => ({ count: 0 }));
  }

  onChangeTheme() {
    if (this.state.darkMode) {
      this.setState( () => ({
        darkMode: 0,
        buttonText: 'DARK'
      }) )
    } else {
      this.setState( () => ({
        darkMode: 1,
        buttonText: 'LIGHT'
      }) )
    }
  }

  render() {
    return (
      <View style={this.state.darkMode ? styles.containerDark : styles.container}>

        <TouchableHighlight 
            onPress={this.onChangeTheme} 
            underlayColor="#FFA726"
            style={this.state.darkMode ? styles.themeButtonDark : styles.themeButton}
        >
          <Text style={styles.buttonText}>{this.state.buttonText}</Text>
        </TouchableHighlight>

        <View>
          <Text style={this.state.darkMode ? styles.countTextDark : styles.countText}> 
            Count : {this.state.count}
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableHighlight 
              onPress={this.onAddNumber} 
              underlayColor="#B3E5FC"
              style={this.state.darkMode ? styles.actionButtonDark : styles.actionButton}
            >
              <Text style={styles.buttonText}>+1</Text>
            </TouchableHighlight>

            <TouchableHighlight 
              onPress={this.onSubtractNumber} 
              underlayColor="#B3E5FC"
              style={this.state.darkMode ? styles.actionButtonDark : styles.actionButton}
            >
              <Text style={styles.buttonText}>-1</Text>
            </TouchableHighlight>

            <TouchableHighlight 
              onPress={this.onReset} 
              underlayColor="#B3E5FC"
              style={this.state.darkMode ? styles.actionButtonDark : styles.actionButton}
            >
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableHighlight>        
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  containerDark: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  themeButton: {
    backgroundColor: '#FF9800',
    alignSelf: 'baseline',
    position: 'absolute',
    top: 100,
    marginLeft: 45,
  },
  themeButtonDark: {
    backgroundColor: '#FFB74D',
    alignSelf: 'baseline',
    position: 'absolute',
    top: 100,
    marginLeft: 45,
  },
  countText: {
    fontSize: 36,
    color: '#313131',
    textAlign: 'center'
  },
  countTextDark: {
    fontSize: 36,
    color: '#f0f0f0',
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50
  },
  actionButton: {
    margin: 10,
    backgroundColor: '#03A9F4',
    width: 100,
  },
  actionButtonDark: {
    margin: 10,
    backgroundColor: '#4FC3F7',
    width: 100,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    fontSize: 18
  },

});

{/* <View style={styles.container}>
    <Text style={styles.welcome}>Welcome to React Native! This is my first app!</Text>
    <Text style={styles.instructions}>To get started, edit App.js</Text>
    <Text style={styles.instructions}>{instructions}</Text>
</View> */}
