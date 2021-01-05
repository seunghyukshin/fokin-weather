import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';

const weatherOptions = {
    
    Thunderstorm : {
        iconName : "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"
    },
    Drizzle : {
        iconName : "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay 🏳️‍🌈"
    },
    Rain : {
        iconName : "weather-rainy",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Raining like a MF",
        subtitle: "For more info look outside"
    },
    Snow : {
        iconName : "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no."
    },
    Atmosphere : {
        iconName : "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Hello",
        subtitle: "React Native !!"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#2980B9", "#6DD5FA"],
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#2c3e50", "#bdc3c7"],
        title: "Clouds",
        subtitle: "I know, fucking boring"
    },
    Dust : {
        iconName : "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dusty",
        subtitle: "Thanks a lot China 🖕🏻"
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Just don't go outside."
    },
    Mist : {
        iconName : "weather-hurricane",
        gradient: ["#FF0099", "#493240"],
        title: "Mist!",
        subtitle: "It's like you have no glasses on."
    },
    Fog : {
        iconName : "weather-hurricane",
        gradient: ["#FF0099", "#493240"],
        title: "Hello",
        subtitle: "React Native !!"
    },
    Smoke : {
        iconName : "weather-hurricane",
        gradient: ["#FF0099", "#493240"],
        title: "Hello",
        subtitle: "React Native !!"
    },
    Sand : {
        iconName : "weather-hurricane",
        gradient: ["#FF0099", "#493240"],
        title: "Hello",
        subtitle: "React Native !!"
    },
    Ash : {
        iconName : "weather-hurricane",
        gradient: ["#FF0099", "#493240"],
        title: "Hello",
        subtitle: "React Native !!"
    },
    Squall : {
        iconName : "weather-hurricane",
        gradient: ["#FF0099", "#493240"],
        title: "Hello",
        subtitle: "React Native !!"
    },
    Tornado : {
        iconName : "weather-hurricane",
        gradient: ["#FF0099", "#493240"],
        title: "Hello",
        subtitle: "React Native !!"
    },
};

export default function Weather ({ temp, condition }) {
    return (
            <LinearGradient
                // Background Linear Gradient
                colors={weatherOptions[condition].gradient} 
                style={styles.container}
            >
                <StatusBar 
                    barStyle="light-content"
                    backgroundColor={weatherOptions[condition].gradient[0]}
                />
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons 
                        size={96}
                        name={weatherOptions[condition].iconName} 
                        color="white"
                        />
                    <Text style={styles.temp}>
                        {temp} ℃
                    </Text>
                </View>
                <View style={{...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subTitle}>{weatherOptions[condition].subtitle}</Text>
                </View>
            </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Dust",
        "Haze",
        "Mist",
        "Fog",
        "Smoke",
        "Sand",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent : 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 42,
        color: 'white',
    },
    halfContainer: {
        flex: 1,
        justifyContent : 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: "300",
        textAlign: "left",
        marginBottom: 10
    },
    subTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: "600",
        textAlign: "left",
    },
    textContainer: {
        alignItems: 'flex-start', // 왼쪽 정렬
        paddingHorizontal: 40,
        justifyContent:'center',
        flex: 1,
    }
})


//https://uigradients.com/