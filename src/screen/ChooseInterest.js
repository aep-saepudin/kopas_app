import React from "react"
import Axios from "axios"
import { Container, Button, List, ListItem, Text, Footer, Content } from 'native-base'


export default class ChooseInterest extends React.Component{
  static navigationOptions = {
    title: 'Choose Interest',
  }

  state = {
    data : null
  }

  async componentDidMount(){
    const data = await Axios.get('http://malesnyari.com/index.php/category/loadCategory')
    this.setState({
      data: data.data.params
    })
  }

  render(){
    const { data } = this.state
    const data_ = data ? data.map((v,i) => (<ListItem key={i}><Text>{v.name}</Text></ListItem>)) : null

    return(
      <Container>
        <Content>
          <List>
            {data_}
          </List>
        </Content>
          <Footer>
            <Button full>
              <Text>Save Interest</Text>
            </Button>
          </Footer>
      </Container>
    )
  }
}