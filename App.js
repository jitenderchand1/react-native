import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './screens/login.screen';
import Listing from './screens/listing.screen';
import Detail from './screens/detail.screen';
import { Provider } from 'react-redux';
import configureStore from './store'
import { createStore, applyMiddleware } from 'redux';
const store = configureStore();


const routes = {
  Login:{
    screen: Login,
    navigationOptions:{
      title:'Landing Screen'
    }
  },
  Listing:{
    screen: Listing,
    title:'Listing',
    navigationOptions:{
      title:'listing Screen'
    }
  },
  Detail:{
    screen: Detail,
    navigationOptions:{
      title:'Detail Screen'
    }
  }
}


const Stacks = StackNavigator(routes,{
  initialRouteName:'Login'
})




export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <Stacks />
      </Provider>
    )
  }
}

