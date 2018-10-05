import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { ModalTest } from '../components/Modal'
import Trophies from "../components/Icon"


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Dashboard',
    headerRight: <Trophies/>,
  };

  state = { 
    visibleModal:true 
  } 

  render() {
    const style ={
      container :  { flex: 1,  padding: 20 }
    }

    return (
      <View style={[style.container , {justifyContent:'flex-start', alignItems:'flex-start'}]}>

        <TouchableOpacity 
          style = {{ 
            borderStyle: 'dashed',
            borderWidth: 1
          }}
        >
          <Text>Juara</Text>
        </TouchableOpacity>

        <Button 
          title="List"
          onPress={()=>this.props.navigation.navigate('List')}
        />
        <Button 
          title="Profile"
          onPress={()=>this.props.navigation.navigate('Profile')}
        />
        <ModalTest visible={this.state.visibleModal}  onPress={()=>{this.setState({visibleModal: false})}}/>
      </View>
    )
  }
}