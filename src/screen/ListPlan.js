import React, { Component } from 'react'
import { Container, Header, Title, Content, Right, Body, } from 'native-base';
import PointIcon from '../components/Icon'
import ListCardRating from '../components/ListContainer'


export default class ListPlan extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>List Plan</Title>
          </Body>
          <Right>
            <PointIcon light/>
          </Right>
        </Header>
        <Content>
          <ListCardRating />
        </Content>
      </Container>
    )
  }
}