import { View, StyleSheet, TextInput, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'

const AddItem = ({text, setText, addItem}) => {
  return (
    <View style={styles.contenedorLista}>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="Ingrese aqui un item..." 
            value={text} 
            onChangeText={(value) => setText(value)}/>
        </View>
        <Pressable 
            style={styles.estiloBoton} 
            onPress={()=> addItem()} >
          <Ionicons name="add-circle" size={30} color="green" />
        </Pressable>
      </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
      marginTop: 15,
      borderColor:"green",
      borderWidth:1,
      marginBottom: 10,
    },
    contenedorLista: {
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
        padding:5,
        fontSize:18,
        width:200,
      },
      estiloBoton: {
        marginTop: 15,
        marginLeft: 10,
        marginBottom: 10,
      },
});

export default AddItem