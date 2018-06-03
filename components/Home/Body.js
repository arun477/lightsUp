import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import HomePageList from './HomePageList';
import Carousel from './Carousel';


class Body extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Carousel />
          <HomePageList />
        </View>
      </ScrollView>
    );
  }
}

export default Body;
