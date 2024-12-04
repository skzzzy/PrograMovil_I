/* PROYECTO 3ER PARCIAL - Programacion Movil 1 - III 2024
Integrantes: 
- Diego Varela
- Jimena Castro
- Karla Sierra
- Khenen Isaac Giron
- Kimberly Reyes
- Lizzy Sauceda
- Marcela Suazo
- Marvin Espinal
- Nahun Morales
- Vanessa Valladares
- Wendy Mencía
*/
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cuestionario1 from './src/screens/Cuestionario1';
import Cuestionario2 from './src/screens/Cuestionario2';

const Stack = createNativeStackNavigator();
const App=()=> {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.red,flex:1
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cuestionario1">
        <Stack.Screen name="Cuestionario1" component={Cuestionario1} />
        <Stack.Screen name="Cuestionario2" component={Cuestionario2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;