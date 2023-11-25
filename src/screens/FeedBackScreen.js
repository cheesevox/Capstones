import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, TextInput, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Icon from "react-native-feather";
import { imageorder, item } from '../Constant';
import { Ionicons } from '@expo/vector-icons';
import { getOrderByID, createFeedBackOrder, getAllFeedbackByKitchenId } from '../Api';
import { useDispatch, useSelector } from 'react-redux'

export default function FeedBackScreen({navigation , route}) {
  const [orderdetail, setOrderdetail] = useState([])
  const [description, setDescription] = useState('')
  const handleDescriptionChange = (text) => {
    setDescription(text);
  };
  const { item } = route.params;
  console.log("item feedback",item)
  console.log("kitchenID ,,," ,item?.mealSessionDto2?.mealDto2?.kitchenDto2?.kitchenId)

  const [feedback, setfeedback] = useState([])

  const fectAllFeedbackByKitchenId =() =>{
    getAllFeedbackByKitchenId(item?.mealSessionDto2?.mealDto2?.kitchenDto2?.kitchenId).then((res)=>{
      console.log("res for feedback", res)
      setfeedback(res)
    })
  }

  useEffect(()=>{
    fectAllFeedbackByKitchenId()
  },[item?.mealSessionDto2?.mealDto2?.kitchenDto2?.kitchenId])

const createFeedack = () =>{
createFeedBackOrder({ ...values, description : description})
}
const [values, setValues] = useState({
  customerId: item?.customerDto2?.customerId,
  kitchenId: item?.mealSessionDto2?.mealDto2?.kitchenDto2?.kitchenId,
  description : description
})

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
          {/* <Image source={{uri: order?.mealSessionDto2?.mealDto2?.image}} style={{ height: 250, width: 400, resizeMode: 'center', borderRadius: 10 }}></Image> */}
        </View>
        <View style={{ marginHorizontal: 40 }}>
          {/* name */}
          <Text style={{ fontWeight: 'bold', fontSize: 26 }}>{}</Text>
          {/* order id */}
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>order id : {item?.orderId}</Text>
          {/* price */}
          <Text style={{ color: 'green', fontSize: 17 }}>Total Price: {item?.totalPrice} vnd</Text>
          {/* addres */}

          <Text style={{fontSize:22}}><Ionicons name='location-outline' size={20}>Kitchen :</Ionicons> {item?.mealSessionDto2?.mealDto2?.kitchenDto2?.name}</Text>
          
          {/* <Text style={{fontSize:22}}><Ionicons name='location-outline' size={20}>Feed Back DE :</Ionicons> {feedback?.feedbackId?.}</Text> */}
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        </View>
        <View style={{ flex: 2}}>
          <View style={{ marginHorizontal:20, borderRadius:20, paddingHorizontal:20,  }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Rate The Food</Text>
            <View style={{ borderWidth: 2, borderRadius: 10, borderBlockColor: 'green' }}>
              <View >
                <TextInput 
                placeholder='Write a comment' 
                style={{ marginLeft: 10, height: '75%', flexDirection: 'row' }} 
                onChangeText={handleDescriptionChange} 
                value={description}
                ></TextInput>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
        <TouchableOpacity 
        onPress={
          createFeedack()
        }
        style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', borderRadius: 30, paddingVertical: 16, width: '80%' }}>
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