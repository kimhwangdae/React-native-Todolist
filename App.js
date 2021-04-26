import React, { useState } from 'react';
import {StyleSheet,Text,View,FlatList,Alert} from 'react-native';
import Header from './components/header'
import TodoItem from './components/Todoitems'
import AddTodo from './components/addTodo'
function App(){

  const [todos,setTodos]=useState([
    {text:'buy coffee',key:'1'},
    {text:'create an app',key:'2'},
    {text:'paly on the switch',key:'3'}
  ]);

  const [todos1,setTodos1]=useState([
    {text:'buy mcmuhyun',key:'1'},
    {text:'create an mcmuhyun',key:'2'},
    {text:'paly on the unji&letmego',key:'3'}
  ]);

  const pressHandler=(key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key!=key)
    })
  }

  const submitHandler=(text)=>{
    
    if(text.length>3){  
     setTodos((prevTodos)=>{
        return[
       {text: text,key: Math.random().toString() },
       ...prevTodos
       ]
      })
   }
   else{
     Alert.alert('OOPS!','todos must be over 3 chars long',[
       {text: 'Uederstood',onPress:()=>console.log('alert closed')}
     ])
   }
  }

  return (
    <View style={styles.container}>
        <Header/>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item})=><TodoItem item={item} pressHandler={pressHandler}/>}
          />
        </View>
      </View >
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  content:{
    padding :40 ,
  },
  list:{
    marginTop: 20,
  }
})

export default App