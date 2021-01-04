import React from 'react';
import {Alert} from 'react-native'

import * as Location from 'expo-location';
import axios from 'axios';

import Loading from './Loading';
import {API_KEY} from './ApiConfig';

export default class App extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async (latitude, longitude) => {
    try {
      const {data} = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
      console.log(data);
      
      
    } catch (error) {
      
      Alert.alert("Can't you", "so sad");
    }
  }
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      
      const {
        coords : {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({isLoading : false});
    } catch (error) {
      Alert.alert("Can't find you", "so sad");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading} = this.state;
    return isLoading ?  <Loading /> : null;
  }
}
