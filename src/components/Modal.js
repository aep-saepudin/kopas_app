import React, {Component} from 'react'
import {Modal, Text, Alert, Button} from 'react-native'
import { Container, Header, Content, ListItem, CheckBox, Body } from 'native-base'

class CheckBoxExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Daily Stand Up</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Discussion with Client</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green"/>
            <Body>
              <Text>Finish list Screen</Text>
            </Body>
          </ListItem>

          <Button title="Next"  onPress={this.props.onPress}/>
        </Content>
      </Container>
    )
  }
}


export class ModalTest extends Component {

  render() {
    return (
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.visible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
          }}>
          <CheckBoxExample onPress={this.props.onPress}/>
        </Modal>
    )
  }
}