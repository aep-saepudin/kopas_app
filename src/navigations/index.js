// import React from 'react'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'

import Profile from "../screen/Profile"
import Login from "../screen/Login"
import List from "../screen/ListPlan"
import Home from "../screen/Home"
import ChooseInterest from '../screen/ChooseInterest'

const AppStack = createStackNavigator({ 
  Home  ,
  List  ,
  Profile,
  ChooseInterest,
},{
  initialRouteName: 'Home'
})

export default createSwitchNavigator(
  {
    App        : AppStack,
    Auth       : Login,
  },
  {
    initialRouteName: 'App',
  }
)