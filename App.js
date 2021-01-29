//import stuff
import React from 'react';
import {View,Text,TextInput,Button,TouchableOpacity} from 'react-native';


//create stuff
class App extends React.Component{
  state = {
    text: "",
    todo: []
  }
  addTodo = () =>{
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo: arr, text: ""});
  }
  deleteTodo = (t) =>{
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({todo: arr});
  }
  renderTodos = () =>{
    return this.state.todo.map(t=>{
      return (
        <TouchableOpacity key={t}>
          <Text
            style={styles.todo}
            onPress={()=>{this.deleteTodo(t)}}
          >{t}</Text>
        </TouchableOpacity>
      )
    })
  }
  render(){
    return(
      <View style={styles.wholeStyle}>
        <View style={styles.viewStyle}>
          <Text style={styles.header}>        To Do List         </Text>
          <TextInput 
            style={styles.inputStyle}
            onChangeText={(text)=>this.setState({text})}
            value={this.state.text}
          />
          <Button 
            title="Add Todo"
            color="white"
            onPress={this.addTodo}
          />
          <View style={{marginTop: 100}}/>
          {this.renderTodos()}
        </View>
      </View>
    )
  }
}

const styles = {
  wholeStyle: {
    backgroundColor: "#7d7dff",
    flex:1
  },
  Button: {
   fontSize:40,
   fontWeight: 'bold',
  },
  viewStyle: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    
  },
  inputStyle:{
    marginTop: 35,
    fontSize: 40,
    height: 60,
    borderColor: "#e8e8ff",
    borderWidth: 2,
    color: 'white'
  },
  header:{
    marginTop: 20,
    fontSize: 50,
    color: '#7d7dff',
    backgroundColor: "#e8e8ff",
    borderColor: "#e8e8ff",
    fontWeight: 'bold'
  },
  todo: {
    fontSize: 40,
    color: 'white'
  }
}

//export stuff
export default App;

