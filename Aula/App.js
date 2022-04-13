import React,{Component} from 'react';
import type {Node} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  FlatList,
  Text,
} from 'react-native';
import Pessoas from './src/Pessoas';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      feed:[
        {id:1,nome:'Miqueias',idade:22,email:'miqueias@miqueias.com'},
        {id:2,nome:'Joao',idade:39,email:'Joao@miqueias.com'},
        {id:3,nome:'Henrique',idade:10,email:'Henrique@miqueias.com'},
        {id:4,nome:'Paulo',idade:16,email:'Paulo@miqueias.com'},
      ]
    };
  }


  render(){
    return(
      <View style={styles.container}>
        <FlatList 
          keyExtractor={(item)=>item.id}
          data={this.state.feed}
          renderItem={({item})=> <Pessoas data={item} />}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});

export default App;


