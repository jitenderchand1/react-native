import React, { Component} from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from "react-redux";

class Detail extends Component{

  render(){
    const { detail } = this.props;
    const personDetail = detail.personDetail;
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <View style={{backgroundColor:'#fff', padding:10}}>
        <View style={{flexDirection:'row', borderBottomWidth:1, padding:10}}>
          <Text>Name : </Text>
          <Text>{personDetail.name}</Text>
        </View>
        <View style={{flexDirection:'row',borderBottomWidth:1, padding:10}}>
          <Text>Address : </Text>
          <Text>{personDetail.address}</Text>
        </View>
        <View style={{flexDirection:'row',borderBottomWidth:1, padding:10}}>
          <Text>Company : </Text>
          <Text>{personDetail.company}</Text>
        </View>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    detail: state.personDetail
  }

}

export default connect(mapStateToProps)(Detail);