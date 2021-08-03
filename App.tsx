import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import { ReactQueryConfigProvider } from 'react-query';


const Stack = createStackNavigator();

export default function App() {
  enableScreens()
  let [fontsLoaded] = useFonts({
    'Cereal-Light': require('./assets/fonts/AirbnbCerealLight.ttf'),
    'Cereal-Bold': require('./assets/fonts/AirbnbCerealBold.ttf'),
    'Cereal-Medium': require('./assets/fonts/AirbnbCerealMedium.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  const queryConfig = { queries: { refetchOnWindowFocus: false, infinite: false } };

  return (
    <ReactQueryConfigProvider config={queryConfig}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown : false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </ReactQueryConfigProvider>
  );
}


