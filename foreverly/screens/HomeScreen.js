import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { TextInput, RectButton } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>FOREVERLY</Text>
        </View>

        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>Welcome to Foreverly</Text>
          <Text style={styles.getStartedText}>Foreverly is a new way to form relationships and meet people with anyone around the world through the power of games</Text>
        </View>

        <View style={styles.loginContainer}>
          <RectButton>Login</RectButton>
          <RectButton>Register</RectButton>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoText: {
    fontSize: 41,
    color: 'rgba(255,155,0,1)',
    textAlign: 'center',
    margin: 70
  },

  logoContainer: {
    // @todo
  },
  
  contentContainer: {
    paddingTop: 30,
  },
  
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  loginContainer: {
    alignItems: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },

  navigationFilename: {
    marginTop: 5,
  },
});
