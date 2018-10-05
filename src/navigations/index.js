import React from 'react'
import { View, Text, Button } from 'react-native'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'

import Profile from "../screen/Profile"
import Login from "../screen/Login"
import List from "../screen/ListPlan"
import Home from "../screen/Home"



const AppStack = createStackNavigator({ 
  Home  ,
  List  ,
  Profile,
})

export default createSwitchNavigator(
  {
    App        : AppStack,
    Auth       : Login,
  },
  {
    initialRouteName: 'Auth',
  }
)