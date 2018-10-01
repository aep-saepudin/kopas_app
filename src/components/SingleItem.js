import React, { Component } from 'react'
import { View } from 'react-native'
import { Card, CardItem, Text, Body, Icon, List, ListItem, Thumbnail } from 'native-base'


export default class ItemCardRating extends Component {
  static defaultProps = {
    title      : 'Jalan-jalan Bandung',
    rating     : 4.3,
    items      : ['Gedung Sate', 'Gasibu', 'UpNormal'],
    onClickCopy: () => alert('clicked')
  }

  render() {
      return (
          <View style={{margin:10}}>
            <Card >
              <CardItem header>
                <Text style={{flex:1}}>{this.props.title}</Text>
                <View style={{flexDirection:'row', alignSelf:'flex-end'}}>
                  <Icon type="MaterialIcons" name="star" />
                  <Text style={{textAlignVertical:'center'}}>{this.props.rating}</Text>
                </View>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <List 
                    style={{ width:'100%'}}
                    dataArray={this.props.items}
                    renderRow={(item)=> 
                      <ListItem >
                        <Icon type="MaterialIcons" name="keyboard-arrow-right"/>
                        <Text>{item}</Text>
                      </ListItem>
                    }
                  >
                  </List>
                  </Body>
              </CardItem>
              <CardItem footer bordered style={{justifyContent:'center'}} button onPress={this.props.onClickCopy}>
                <Text>Copy</Text>
              </CardItem>
            </Card>
          </View>

      )
  }
}


export function ImageCaption(props){
  return (
    <View style={{alignItems:'center'}}>
      <Thumbnail source={{
        uri: props.uri
      }}/>
      <Text>{props.nama}</Text>
    </View>
  )
} 