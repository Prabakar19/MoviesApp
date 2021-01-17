/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PopularMovies from './src/Components/Popular';
import TopMovies from './src/Components/Top Movies';
import UpcomingMovies from './src/Components/Upcoming';
import MovieDetails from './src/Components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';
import {faStar, faClock, faHome} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="popular"
      activeColor="#000"
      inactiveColor="#3e2465"
      barStyle={{
        backgroundColor: '#DDDDDD',
        height: '7%',
        fontWeight: 'bold',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        shadowOffset: 4,
        shadowColor: 'black',
      }}>
      <Tab.Screen
        name="Popular"
        component={PopularMovies}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon
              icon={faHome}
              size={28}
              style={{color: 'orange'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Top Rated"
        component={TopMovies}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon
              icon={faStar}
              size={28}
              style={{color: 'orange'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={UpcomingMovies}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon
              icon={faClock}
              size={28}
              style={{color: 'orange'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const HomeStack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <HomeStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home">
          <HomeStack.Screen name="Home" component={HomeTabs} />
          <HomeStack.Screen name="Details" component={MovieDetails} />
        </HomeStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
