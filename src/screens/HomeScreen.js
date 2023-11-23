import { View, Text,StatusBar,TextInput,StyleSheet } from 'react-native'
import React from 'react'
import HomeHeadNav from '../Components/HomeHeadNav'
import Categories from '../Components/Categories'
import OfferSlider from '../Components/OfferSlider'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../globals/styles'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <StatusBar />
        <HomeHeadNav />
        <View style={styles.searchbox}>
        <Ionicons name="search-sharp" size={24} color="black" style={styles.searchIcon} />
        <TextInput placeholder='Search' style={styles.input}/>
        </View>
        <Categories />
        <OfferSlider/>
        
        <Text>HomeScreen</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.col1,
        alignItems:'center',
        width:'100%'
    },
    searchbox:{
        flexDirection:'row',
        width:'90%',
        backgroundColor:colors.col1,
        borderRadius:30,
        alignItems:'center',
        padding:10,
        margin:20,
        elevation:10
    },
    searchIcon:{
        color:colors.text1
    },
    input:{
        marginLeft:10,
        maxWidth:'90%',
        fontSize:18,
        color:colors.text1
    },
 
})