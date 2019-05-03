import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label,Button,Text,Left,Right,Body } from 'native-base';
import {connect} from 'react-redux';

const validUser = {
"username":"prashant@gmail.com",
"password" :'prashant123'
}

class Login extends React.Component {
    constructor(...args) {
    super(...args);

    this.state = { validated: false,userName:"",password:"",error:"" };
  }

   handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
  }


  checkValidity = () => {
    let error = "";
        if(!this.state.userName || !this.state.password){
           error = "Please fill all the fields"
        }
        else if(this.state.userName !== validUser.username || this.state.password !== validUser.password)
        {
          error = "Invalid Username/Password"
        }
        else if(this.state.userName && this.state.password)
        {
           error = ""
        }
    this.setState({error})

    if(this.state.userName === validUser.username && this.state.password === validUser.password)
    {
       this.props.navigation.navigate('Dashboard')
    }
  }

  render() {
return (<Container>
          <Header>
            <Left>
              <Text style={{fontSize:20,color:"#FFF"}}>Login</Text>
              </Left>
              <Body/>
              <Right/>
          </Header>
        <Content>
          <Form>
            <Item fixedLabel>
              <Input placeholder="UserName"  onChangeText={(userName)=>{this.setState({userName})}}/>
            </Item>
            <Item fixedLabel last>
              <Input type="password" placeholder="Password"  onChangeText={(password)=>{this.setState({password})}}/>
            </Item>
          </Form>
             <Button style={{marginTop:10,alignSelf:'center'}} hasText onPress={()=>{this.checkValidity()}}>
              <Text>Login</Text>
            </Button>
            
           <Text style={{color:"red",fontSize:14,textAlign:"center"}}>{this.state.error}</Text>
        </Content>
      </Container>
    );
  }
}

export default Login;