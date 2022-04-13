import React,{Component} from 'react';
import type {Node} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  FlatList,
  Text,
} from 'react-native';

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
          renderItem={({item})=> <Pessoa data={item} />}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  areaPessoa:{
    backgroundColor:'#222',
    height:200,
    marginBottom:15,
  },
  textoPessoa:{
    color:'#FFF',
    fontSize:20,
  }
});

export default App;

class Pessoa extends Component{
  render(){
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>Nome:{this.props.data.nome}</Text>
        <Text style={styles.textoPessoa}>Idade:{this.props.data.idade}</Text>
        <Text style={styles.textoPessoa}>Email:{this.props.data.email}</Text>
      </View>
    );
  }
}
