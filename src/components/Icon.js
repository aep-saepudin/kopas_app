import React from "react"
import { View } from "react-native"
import { Icon, Text } from "native-base"

export default class PointIcon extends React.Component{
  static defaultProps = {
      value:300,
      light:false
    }

  render(){
    return (<View style={{alignItems:'center'}}>
      <Icon name="trophy" type="EvilIcons" style={{color:this.props.light ? 'white' : 'black'}} />
      <Text style={{color:this.props.light ? 'white' : 'black'}}> {this.props.value}p </Text>
    </View>)
  }
}



