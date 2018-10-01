import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { Container, Header, Text, Thumbnail, Content, Button, Footer, FooterTab } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Profile extends Component {
  render() {
    return (
      <Container>
        <Header />
          <Grid>
            <Row style={{flexGrow:6}}>
            <Col style={{  justifyContent:'center', alignItems:'center'}}>
              <Thumbnail large source={{uri:'https://cap.stanford.edu/profiles/viewImage?profileId=19141&type=square&ts=1509532892453'}} style={{width:150, height:150}}/>
            </Col>
            <Col>
            <Content>
              <Text>
              Now you have a stand alone xcode project.Start build in device or release ipa after signing with certificate and provisioning profile or start building in simulator without running a package server.
              Now you have a stand alone xcode project.Start build in device or release ipa after signing with certificate and provisioning profile or start building in simulator without running a package server.
              Now you have a stand alone xcode project.Start build in device or release ipa after signing with certificate and provisioning profile or start building in simulator without running a package server.
              Now you have a stand alone xcode project.Start build in device or release ipa after signing with certificate and provisioning profile or start building in simulator without running a package server.
              Now you have a stand alone xcode project.Start build in device or release ipa after signing with certificate and provisioning profile or start building in simulator without running a package server.
              </Text>
              </Content>
            </Col>
            </Row>
            <Row >
              <Button bordered style={{alignSelf:'center', marginLeft:40}}>
                <Text>1/day</Text>
              </Button>
            </Row>
          </Grid>
          <Footer>
          <FooterTab>
            <Button full>
              <Text>Save</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}


const styles = StyleSheet.create({ 
  kotak : {
    borderColor: 'black', 
    borderWidth:1, 
    borderStyle:"dotted", 
    alignItems:'center', 
    justifyContent:'center'
  }
})