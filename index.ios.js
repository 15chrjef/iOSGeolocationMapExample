/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Text,
  View
} from 'react-native';
import PlaceMap from './components/placeMap';
import AddPlace from './components/AddPlace';

export default class places extends Component {
  constructor(){
    super()
    this.state = {
      selectedTab: 0,
      annotations: [
        {
          title: 'Smithsonian Museum',
          latitude: 38.8908,
          longitude: -77.0230
        },
        {
          title: 'UMCP',
          latitude: 38.9869,
          longitude: -76.9426
        },
        {
          title: 'Arlington',
          latitude: 38.8783,
          longitude: -77.0687
        }
      ]
    }
  }
  handleTabPress(tab) {
    this.setState({ selectedTab: tab })
  }
  handleAddPlace(annotation) {
    const annotations = this.state.annotations.slice();
    annotations.push(annotation);
    this.setState({ annotations });
  }
  render() {
    return (
     <TabBarIOS>
      <TabBarIOS.Item
        systemIcon='favorites'
        selected={this.state.selectedTab === 0}
        onPress={this.handleTabPress.bind(this, 0)}
      >
        <PlaceMap annotations={this.state.annotations}/>
      </TabBarIOS.Item>
      <TabBarIOS.Item
        title="Place"
        selected={this.state.selectedTab === 1}
        systemIcon='more'
        onPress={this.handleTabPress.bind(this, 1)}
      >
        <AddPlace onAddPlace={this.handleAddPlace.bind(this)}/>
      </TabBarIOS.Item>
     </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
   text: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 50,
  },
  view: {
    backgroundColor: '#fed',
    flex: 1
  }
});

AppRegistry.registerComponent('places', () => places);
