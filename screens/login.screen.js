import React, { Component} from 'react';
import { View, Text, TouchableHighlight } from 'react-native';



class Login extends Component{
  goToListing = () => {
    const { navigate } = this.props.navigation;
    navigate('Listing');
  }

  render(){

    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <TouchableHighlight onPress={this.goToListing} style={{backgroundColor:'blue', padding:10}}>
          <Text style={{color:'#fff'}}>Go to listing Page</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Login;