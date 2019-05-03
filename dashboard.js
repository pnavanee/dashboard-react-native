import React from 'react';
import {connect} from 'react-redux'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import {getData} from './action';


class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        data :[]
    }
  }
   
   componentDidMount()
   {
      this.props.dispatch(getData())
   }

  render() {
    let trArray = [];
    if(this.props.data && this.props.data.length > 0)
    {
       this.props.data.map((item)=>{
          trArray.push(  <ListItem>
              <Left/>
              <Body>
          <Text>Id     : {item.id}</Text>
          <Text>Name   : {item.name}</Text>
          <Text>Age    : {item.age}</Text>
          <Text>Gender :{item.gender}</Text>
          <Text>Email  : {item.email}</Text>
          <Text>Phone  : {item.phoneNo}</Text>
              </Body>
              <Right/>
            </ListItem>)
        })
    }
    return (
   <Container>
          <Header>
            <Left>
              <Text style={{fontSize:20,color:"#FFF"}}>Dashboard</Text>
              </Left>
              <Body/>
              <Right/>
          </Header>
        <Content>
          <List>
           {trArray}
          </List>
        </Content>
      </Container>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
      data : state.user.dashboardData
  }
}

export default connect(mapStateToProps)(Dashboard);