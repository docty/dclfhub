import React, { Component } from 'react';
import {ScrollView, View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Librarypage extends Component {


goToSummary = () => {
      Actions.librarysummary()
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={this.goToSummary} style={styles.item_carder}>
            <Text style={styles.title}>This is our book</Text>
            <Text style={styles.date}>Asiedu Henry Kwasi</Text>
            <Text style={styles.date}>published in, 2015</Text>
        </TouchableOpacity>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
   },
  item_carder : {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#e2e2e2',
    elevation: 10,
    padding: 2
  },
  title : {
    fontWeight:  'bold',
    fontSize: 20,
    padding: 5
  },
  date :{
    fontStyle: 'italic',
    padding: 5
  }
});

export default Librarypage
