import React, { Component } from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

class Announcementpage extends Component {
  state = {
    empty : false
  }
  render() {
    if(this.state.empty){
      return  (
        <View style={styles.noevent}>
          <Text>Sorry, No Announcement available at the moment</Text>
       </View>
      );
    }else{
      return (
        <ScrollView style={styles.container}>
          <View style={styles.item_carder}>
              <Text style={styles.message}>This is our message</Text>
              <Text style={styles.date}>2nd December, 2019</Text>
              <Text style={styles.date}>10:00am</Text>
          </View>

        </ScrollView>
      );
    }

  }
  }

const styles = StyleSheet.create({
  noevent : {
    flex : 1,
    justifyContent:   'center',
    alignContent: 'center',
    alignItems: 'center'
  },
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
    elevation: 10
  },
  message : {
    fontWeight:  'bold',
    fontSize: 20,
    padding: 5
  },
  date :{
    fontStyle: 'italic',
    padding: 5
  }
});

export default Announcementpage
