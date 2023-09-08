import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, Pressable, Image, FlatList, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {

  const initialState = [
    { id: 1, text:"Te"},
    { id: 2, text:"Cafe"},
    { id: 3, text:"Mate"},
  ];

  const [text, setText] = useState("");
  const [list, setList] = useState(initialState);

  const [isModalVisible, setModalVisible] = useState(false);
  const addItem = () => {
    list.push({
      id: Math.random(),
      text: text,
    });

    setList(list);
    setText("");
  }

  const clearList = () => {
    setList([]);
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>

    <Modal animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!isModalVisible);
        }}>
      <View style={styles.centeredView}>
          <View style={styles.modalView}>
           <Text style={styles.modalText}>¿Desea Eliminar la lista?</Text> 
           <View style={styles.buttonContainer}>
           <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => clearList()}>
              <Text style={styles.textStyle}>Si</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.textStyle}>No</Text>
            </Pressable>
           </View>
          </View>
        </View>
    </Modal>

      <Image style={styles.imagen} 
        source={{
          uri: "https://img.freepik.com/vector-premium/ilustracion-vectorial-icono-lista-compras-icono-gestion-compras_550971-18.jpg?w=2000",
        }}
      />
      <Text style={styles.titulo}>Lista de compras</Text>
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
      <FlatList data = {list} keyExtractor={item => item.id} renderItem={({item}) => (<Text tyle={styles.parrafo}> {item.text}</Text>)} />
      <Pressable 
            style={styles.estiloBoton} 
            onPress={()=> setModalVisible(true)} >
          <Ionicons name="trash" size={30} color="green" />
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    borderBottomColor: "green",
    borderBottomWidth: 4,
  },
  input: {
    padding:5,
    fontSize:18,
    width:200,
  },
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
  estiloBoton: {
    marginTop: 15,
    marginLeft: 10,
    marginBottom: 10,
  },
  parrafo: {
    fontSize:14,
    marginVertical:1,
  },
  imagen:{
    marginTop: 40,
    height:100,
    width: 100,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    margin: 5,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row', // Alinea los botones horizontalmente
  },
});
