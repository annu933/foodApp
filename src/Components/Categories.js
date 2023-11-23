import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../globals/styles';

export default function Categories() {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.box}>
          <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myicon} />
          <Text style={styles.mytext}>sandwitch</Text>
        </View>
        <View style={styles.box}>
          <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myicon} />
          <Text style={styles.mytext}>Burger</Text>
        </View>
        <View style={styles.box}>
          <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myicon} />
          <Text style={styles.mytext}>Burger</Text>
        </View>
        <View style={styles.box}>
          <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myicon} />
          <Text style={styles.mytext}>Burger</Text>
        </View>
        <View style={styles.box}>
          <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myicon} />
          <Text style={styles.mytext}>Burger</Text>
        </View>
        <View style={styles.box}>
          <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myicon} />
          <Text style={styles.mytext}>Nudles</Text>
        </View>
        <View style={styles.box}>
          <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myicon} />
          <Text style={styles.mytext}>pizza</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.col1,
    width:'90%',
    borderRadius:10,
    elevation:10
  },
  head:{
    color:colors.text1,
    fontSize:25,
    fontWeight:'300',
    margin:10,
    alignSelf:'center',
    paddingBottom:5,
    borderBottomColor:colors.text1,
    borderBottomWidth:1
  },
  box:{
    backgroundColor:colors.col1,
    margin:10,
    padding:10,
    elevation:20,
    borderRadius:10,
    flexDirection:'row'
  },
  myicon:{
    marginRight:10,
    color:colors.text3
  }
})