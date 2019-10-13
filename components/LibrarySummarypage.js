

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class LibrarySummarypage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the LibrarySummary component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default LibrarySummarypage
