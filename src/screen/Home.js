import React from 'react'
import Trophies from "../components/Icon"
import Axios from "axios"
import { Container, Button, List, ListItem, Text,  Content, Header, Left, Right, Thumbnail, Body } from 'native-base'


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Dashboard',
    headerRight: <Trophies/>,
  }

  state = { 
    data:null 
  } 

  async componentDidMount(){
    const data = await Axios.get('http://malesnyari.com/index.php/category/loadCategoryDetail/arsitektur')
    this.setState({
      data:data.data.params
    })
  }

  render() {
    const { data } = this.state
    const data_ = data ? data.map((v,i) => (
      <ListItem thumbnail key={i}>
              <Left>
                <Thumbnail square source={{ uri: v.tenant_logo }} />
              </Left>
              <Body>
                <Text>{v.tenant_name}</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
    )) : null

    return (
      <Container>
        <Header>
          <Button>
            <Text> Create Plan </Text>
          </Button>
        </Header>
        <Content>
          <List>
            <ListItem itemHeader >
              <Text>arsitektur</Text>
            </ListItem>
            {data_}
            <ListItem itemHeader >
              <Text>aplikasi game</Text>
            </ListItem>
            {data_}
          </List>
        </Content>
      </Container>
    )
  }
}