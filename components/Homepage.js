import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Homepage extends Component {



goToEvent = () => {
    Actions.event()
}
goToAnnouncement = () => {
    Actions.announcement()
}
goToLibrary = () => {
    Actions.library()
}
goToLeader = () => {
    Actions.leaders()
}
goToProfile = () => {
    Actions.profile()
}
  render() {
    return (
      <View style={styles.container}>
            <View  style={styles.item_carder}>
              <Image source={require('./../assets/search.png')} style={{width:100, height:100}}/>
              <Text> Search </Text>
          </View>
          <TouchableOpacity  onPress = {this.goToEvent} style={styles.item_carder}>
                  <Image source={require('./../assets/calendar.png')} style={{width:100, height:100}}/>
                  <Text > Event</Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress = {this.goToAnnouncement}  style={styles.item_carder}>
              <Image source={require('./../assets/announcement.png')} style={{width:100, height:100}} />
              <Text>Announcement</Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress = {this.goToLibrary}  style={styles.item_carder}  >
              <Image source={require('./../assets/library.png')} style={{width:100, height:100}}/>
              <Text>Library</Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress = {this.goToLeader} style={styles.item_carder}>
              <Image source={require('./../assets/leaders.png')} style={{width:100, height:100}}/>
              <Text>Leaders</Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress = {this.goToProfile}  style={styles.item_carder}>
              <Image source={require('./../assets/profile.png')} style={{width:100, height:100}}/>
              <Text>Profile</Text>
          </TouchableOpacity>
      </View>
    );
  }
}


 const styles = StyleSheet.create({
        container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        marginTop: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        },
        item_carder:{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        padding: 10,
        borderRadius: 10,
        marginLeft: 20,
        marginTop: 5,
        marginBottom: 20,
        backgroundColor: '#e2e2e2',
        elevation: 10
        }
});
