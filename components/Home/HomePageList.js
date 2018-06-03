import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import ListItem from './ListItem';

class HomePageList extends Component {
  render() {
    return (
      <View>
        <View style={{ marginBottom: 20 }}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </View>
       
      </View>
    );
  }
}

export default HomePageList;
