import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, TextInput, SafeAreaView } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { imageorder } from '../Constant';
import { Ionicons } from '@expo/vector-icons';

export default function FeedBackScreen({navigation , item}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headder}>
        <View style={{
          // padding:30
          flexDirection: 'row', marginTop: 25,
        }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              justifyContent: "center", alignItems: "center",
              width: '10%', height: '100%', backgroundColor: 'orange', borderRadius: 28,
              position: 'relative'
            }}
          >
            <Icon.ArrowLeft style={{ color: 'white' }} strokeWidth={3} />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row-reverse', margin: 'auto' }}>
            <Text style={{
              alignItems: 'center', width: '60%', textAlign: 'center',
              fontWeight: 'bold', fontSize: 26
            }}>Review</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginHorizontal: 40}}>
          <Image source={{uri: item?.mealSessionDto2?.mealDto2?.image}} style={{ height: 250, width: 400, resizeMode: 'center', borderRadius: 10 }}></Image>
        </View>
        <View style={{ marginHorizontal: 40 }}>
          {/* name */}
          <Text style={{ fontWeight: 'bold', fontSize: 26 }}>Pizza</Text>
          {/* order id */}
          <Text style={{ fontWeight: 200, fontSize: 15 }}>{item}</Text>
          {/* price */}
          <Text style={{ color: 'green', fontSize: 17 }}>Price: 25000vnd</Text>
          {/* addres */}
          <Text><Ionicons name='location-outline' size={20}>Address: Go Vap</Ionicons></Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', 
          backgroundColor: 'grey', borderRadius: 30, paddingVertical: 16, width: '80%' 
          }}
          onPress={()=>navigation.navigate("OrderCart")}
          >
            <Text style={{ color: 'white' }}>Re-Order</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 2}}>
          <View style={{ marginHorizontal:20, borderRadius:20, paddingHorizontal:20,  }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Rate The Food</Text>
            <View style={{ borderWidth: 2, borderRadius: 10, borderBlockColor: 'green' }}>
              <View >
                <TextInput placeholder='Write a comment' style={{ marginLeft: 10, height: '75%', flexDirection: 'row' }}></TextInput>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', borderRadius: 30, paddingVertical: 16, width: '80%' }}>
          <Text style={{ color: 'white', fontSize:18 }}>Submit</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 4
  },
  headder: {
    flex: 1,
  },
  body: {
    flex: 6,
    display: 'flex'
  },
  footer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  }
})