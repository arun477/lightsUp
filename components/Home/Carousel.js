import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const datacarousel = [
  {
    "id": 339964,
    "title": "Valerian and the City of a Thousand Planets",
    "imagePath": "https://orig00.deviantart.net/21a7/f/2015/199/0/c/x_men__apocalypse__2016____poster_by_camw1n-d91s5x4.png",
  },
  {
    "id": 315635,
    "imagePath": "https://image.tmdb.org/t/p/w780/fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg",
  },
  {
    "id": 339403,
    "title": "Baby Driver",
    "subtitle": "More than just a trend",
    "imagePath": "https://image.tmdb.org/t/p/w780/xWPXlLKSLGUNYzPqxDyhfij7bBi.jpg",
  },
];


class Carousel extends Component {
  render() {
    return (
      <View>
        <View style={{ flex: 1 }}>
          <SwipeableParallaxCarousel
            style={{ height: 500 }}
            data={datacarousel}
            navigationType={'bars'}
            navigation={true}
            titleColor={'white'}
            height={250}
          />
        </View>

        <View
          style={{
            backgroundColor: '#ea3a4f',
            padding: 10, width: 60, height: 60,
            borderRadius: 100, alignItems: 'center',
            justifyContent: 'center', position: 'absolute',
            top: 215, right: 10
          }}>
          <Icon style={{ color: 'white', marginLeft: 5 }} name={'control-play'} size={30} />
        </View>
      </View>
    );
  }
}

export default Carousel;
