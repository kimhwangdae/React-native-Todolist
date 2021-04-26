import React,{useEffect, useState} from 'react';
import {StyleSheet,Text,TextInput,Button,View} from 'react-native';



export default function AddTodo({submitHandler}){

    const [text,setText]=useState('');

    const ChangeHendler=(val)=>{
        setText(val)
    }


    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new Todo...'
                onChangeText={ChangeHendler}
            />
            <Button onPress={()=>submitHandler(text)} title='Add Todo' color='coral'/>
        </View>
    )
}

const styles=StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor: '#ddd'
    }
})