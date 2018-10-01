import React, { Component } from 'react'
import {  Content } from 'native-base'

import ItemCardRating , {ImageCaption} from './SingleItem'



export default class ListCardRating extends Component {
  static defaultProps = {
    items      : [
      {
        title      : 'Bandung',
        rating     : 4,
        items      : ["gasibu", "Banda Pos"],
        onClickCopy: () => alert('hello')
      },
      {
        title      : 'Jakarta',
        rating     : 3.5,
        items      : ["monas", "Dufan"],
        onClickCopy: () => alert('jakarte')      }
    ]
  }

  render() {
      const mapped = this.props.items.map((el, i)=> <ItemCardRating key={i.toString()} title={el.title} rating={el.rating} items={el.items} onClickCopy={el.onClickCopy}/>)
      return (
        <Content>
          {mapped}
        </Content>
      )
  }
}

export class ListTourGuide extends React.Component {
  static defaultProps = {
    datas: [
      {
        nama:'agus', 
        foto: 'https://www.morpht.com/sites/morpht/files/styles/landscape_medium/public/dalibor-matura_1.jpg'
      },
      {
        nama:'Dian', 
        foto: 'https://s3.amazonaws.com/abn-prod/wp-content/uploads/sites/3/2018/09/Greenberger_.png'
      },
      {
        nama:'Cahyono', 
        foto: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
      },
  ]
  }
  
  render(){
    const  Images = this.props.datas.map((data, i) => <ImageCaption  key={i} nama={data.nama} uri={data.foto}/>)
    return(
      <Content style={{padding:20, flexDirection:'row'}}>
        {Images}
      </Content>
    )
  }
} 