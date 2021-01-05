import React from "react";
import { Alert } from "react-native";

import * as Location from "expo-location";
import axios from "axios";

import Loading from "./Loading";
import { API_KEY } from "./ApiConfig";
import Weather from "./Weather";

export default class App extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    try {
      const {
        data: {
          main: { temp },
          weather,
        },
      } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      // console.log(data);
      this.setState({
        isLoading: false,
        condition: weather[0].main,
        temp,
      });
    } catch (error) {
      Alert.alert("Can't find weather", "so sad");
    }
  };
  getLocation = async () => {
    try {
      // 사용자에게 위치정보 허가받기
      await Location.requestPermissionsAsync();

      // 위도 경도
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();

      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you", "so sad");
    }
  };
  componentDidMount() {
    // console.log("rendered");
    this.getLocation();
  }
  render() {
    // console.log("i am rendering");
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
