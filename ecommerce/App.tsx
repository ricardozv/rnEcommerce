/**
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/HomeScreen';
import { showNavigationBar } from 'react-native-navigation-bar-color';



const App = () => {
 
  return (
    
    <>
    
      <StatusBar barStyle="light-content" backgroundColor= 'pink'/>
     
      <SafeAreaView>
      <ScrollView>
       <HomeScreen/>
       <HomeScreen/>
       <HomeScreen/>
       <HomeScreen/>
       <HomeScreen/>
       </ScrollView>
      </SafeAreaView>
     
    </>
  );
};


export default App;
