import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigator from './src/navigators/stackNavigator';
import TestScreen from './src/screens/TestScreen';

const App=(props)=>{
  return(
    // <NavigationContainer>
    //   <StackNavigator />
    // </NavigationContainer>
    <TestScreen />
  )
}
export default App;
