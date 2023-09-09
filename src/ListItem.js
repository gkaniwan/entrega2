import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ListItem = ({item}) => {
  return (
    <View>
      <Text tyle={styles.parrafo}> {item.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    parrafo: {
        fontSize:14,
        marginVertical:1,
      },
});

export default ListItem