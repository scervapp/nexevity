
import { StyleSheet, Text, View } from 'react-native';
import firebaseConfig from './firebaseConfig';
import {initializeApp} from "firebase/app"

import { createStackNavigator } from '@react-navigation/stack';

import RegisterScreen from './components/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';



const app = initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export default function App() {

  
  return (
    
    <NavigationContainer>
        <Stack.Navigator>  
          <Stack.Screen  name="Register" component={RegisterScreen}/>
          
          </Stack.Navigator>
    </NavigationContainer>

  );
}


