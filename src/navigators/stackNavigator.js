import React, { Component, FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TestScreen from '../screens/TestScreen';

const MyStack= createStackNavigator();

const StackNavigator =()=>{
    return (
      <MyStack.Navigator initialRouteName={''} screenOptions={{headerShown:false}}>
          <MyStack.Screen name="TestScreen" component={TestScreen} />
      </MyStack.Navigator>
    )
}

export default StackNavigator;