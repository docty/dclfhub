import React, { Component } from 'react';
import {ScrollView,View,Text,StyleSheet, Image} from 'react-native';

class Leaderspage extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View onPress={this.goToSummary} style={styles.item_carder}>
            <Image source={require('./../assets/search.png')} style={{width:100, height:100}}/>
            <View style={styles.details}>
                <Text style={styles.title}>Asiedu Henry Kwasi</Text>
                <Text style={styles.date}>0501430076</Text>
                <Text style={styles.date}>General Coordinator</Text>
            </View>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
   },
  item_carder : {
    flex: 2,
    flexDirection: 'row',
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
  details:{
    flex : 3,
    flexDirection: 'column'
  },
  title : {
    fontWeight:  'bold',
    fontSize: 15,
    padding: 5
  },
  date :{
    fontStyle: 'italic',
    padding: 5
  }
});

export default Leaderspage
