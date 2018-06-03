import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'native-base';



class ListItem extends Component {
    render() {
        return (
            <View style={{ flex: 1, height: 235, paddingLeft: 10, paddingRight: 10, }}>

                <View style={{ zIndex: 5, height: 220, position: 'absolute', bottom: 0, marginLeft: 10 }}>
                    <Image source={{ uri: 'https://orig00.deviantart.net/21a7/f/2015/199/0/c/x_men__apocalypse__2016____poster_by_camw1n-d91s5x4.png' }}
                        style={{ width: 120, height: 220, borderRadius: 5 }}
                    />
                </View>
                <View style={{ zIndex: 3, height: 200, marginTop: 40 }}>
                    <Card >
                        <View style={{ zIndex: 5, position: 'absolute', right: 3, backgroundColor: '#f73859', padding: 5, paddingLeft: 8, paddingRight: 8, borderRadius: 4, top: 3, }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 10 }}>NEW</Text>
                        </View>
                        <View style={{ marginLeft: 120, padding: 10 }}>
                            <View style={{}}>
                                <Text style={{ fontSize: 19, color: 'black', letterSpacing: 2, flexWrap: 'wrap', }}>X-Men </Text>
                            </View>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 4 }}>
                                <Text>Reactjs | </Text>
                                <Text>Web development | </Text>
                                <Text>Basics</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 6 }}>
                                <Text style={{ color: 'gray', flexWrap: 'wrap', }}>27 july 2018  </Text>
                                <Text style={{ color: 'black', flexWrap: 'wrap', }}>8pm</Text>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text numberOfLines={2} style={{ color: 'gray', flexWrap: 'wrap', }}>React.js, a comprehensive JavaScript library for building user interfaces, has changed the way we think about front-end development. ... </Text>
                            </View>
                        </View>
                    </Card>
                </View>

            </View>
        );
    }
}

export default ListItem;
