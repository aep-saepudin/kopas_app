import React from 'react'
import { View } from 'react-native'
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin'

GoogleSignin.configure()

export default class LoginScreen  extends React.Component {
  
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()
      this.setState({ userInfo })
      console.log(userInfo)

    } catch (error) {
      this.props.navigation.navigate('Home')
  } 
}

  render(){
    console.log('hai')
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <GoogleSigninButton
          style    = {{ width: 48, height: 48 }}
          size     = {GoogleSigninButton.Size.Icon}
          color    = {GoogleSigninButton.Color.Dark}
          onPress  = {this.signIn}
          disabled = {false} />
      </View>
    )
  }
}