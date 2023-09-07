import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.imagen} 
        source={{
          uri: "https://img.freepik.com/vector-premium/ilustracion-vectorial-icono-lista-compras-icono-gestion-compras_550971-18.jpg?w=2000",
        }}
      />
      <Text style={styles.titulo}>Lista de compras</Text>
      <View style={styles.contenedorLista}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Ingrese aqui un item..."/>
        </View>
        <Pressable style={styles.estiloBoton} onPress={()=>console.log("BOTON PRESIONADO")}>
          <Ionicons name="add-circle" size={30} color="green" />
        </Pressable>
      </View>
      <Text style={styles.parrafo}>Te</Text>
      <Text style={styles.parrafo}>Cafe</Text>
      <Text style={styles.parrafo}>Mate</Text>
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
  }
});
