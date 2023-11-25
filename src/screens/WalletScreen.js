import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import * as Icon from "react-native-feather";
import { SafeAreaView } from 'react-native-safe-area-context';
import { CheckBox } from 'react-native-elements';
import { createPayment } from '../Api';

const WalletScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const handleDescriptionChange = (text) => {
    setDescription(text);
  };
  console.log("item wallet $$$$$$", item)
  const [balance, setBalance] = useState('')
  const [values, setValues] = useState({
    customerId: item?.userId,
    balance: balance
  })
  const createPaymentCustomer = () =>{
    createPayment({ ...values, description : description})
    }
  console.log("balance", item?.walletDto?.balance)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ justifyContent: "center", alignItems: "center", width: 40, height: 40, position: 'relative', backgroundColor: 'orange', borderRadius: 28, marginTop: 42 }}
          >
            <Icon.ArrowLeft style={{ color: 'white' }} strokeWidth={3} />
          </TouchableOpacity>
          <Text style={styles.walletText}>
            Wallet
          </Text>
          <TouchableOpacity
            // onPress={() => navigation.navigate("OrderCart")}
            style={{ justifyContent: "center", alignItems: "center", width: 40, height: 40, position: 'relative', borderRadius: 28, marginTop: 42 }}
          >
            <Icon.CreditCard style={{}} strokeWidth={3} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 3, alignItems: 'center' }}>
        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 20,
            width: '80%',
            justifyContent: 'center',
            height: '80%',
            backgroundColor: '#9d63db',
            borderRadius: 30,
            padding: 15,
          }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <MaterialCommunityIcons name='integrated-circuit-chip' color={'yellow'} size={50}></MaterialCommunityIcons>
            <Image source={require("../../assets/images/mastercard.png")} style={{ width: 50, height: 50 }}></Image>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 2, justifyContent: 'space-evenly' }}>
            <Text style={{ fontSize: 20, color: 'white' }}> XXXX</Text>
            <Text style={{ fontSize: 20, color: 'white' }}> XXXX</Text>
            <Text style={{ fontSize: 20, color: 'white' }}> XXXX</Text>
            <Text style={{ fontSize: 20, color: 'white' }}> XXXX</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                CARD HOLDER NAME
              </Text>
              <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                CHEESE VOX NEE
              </Text>
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>12/25</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 4 }}>
        <View style={{ margin: 30, flexDirection: 'row', alignItems: 'center' }}>
          {/* <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Balance :</Text> */}
          <Text style={{ fontSize: 21, fontWeight: 'bold', color: 'orange' }}> Balance : {item.walletDto.balance} vnd</Text>
        </View>
        <View style={{ justifyContent: 'center', paddingLeft: 10 }}>
          <View style={{
            width: '60%',
            borderWidth: 2,
            borderRadius: 30,
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <View>
              <Image style={{ width: 40, height: 40 }} source={require("../../assets/images/Icon.png")}></Image>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}> VN Pay</Text>
            </View>
            <Ionicons style={{ fontSize: 30 }} name='checkmark-circle-outline'></Ionicons>
          </View>
          <Text style={{ padding: 10, fontWeight: 'bold', fontSize: 18 }}>Input For Reacharge</Text>
          <View style={{ borderWidth: 2, padding: 20, borderRadius: 30, width: '60%', marginTop: 10 }}>
            <TextInput onChangeText={handleDescriptionChange} value={balance}></TextInput>
          </View>
        </View>
      </View>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <TouchableOpacity
          onPress={createPayment()}
          style={{
            backgroundColor: "#f96163",
            borderRadius: 29,
            paddingVertical: 18,
            width: "60%",
            marginBottom: 20
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 18, color: "#fff", fontWeight: "700", }}>
            Re-Charge Wallet
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wallet: {
    backgroundColor: 'rgba(98, 83, 196, 0.8)',
    borderRadius: 29,
    paddingVertical: 18,
    width: '80%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 30,
    marginHorizontal: 50,
    marginTop: 20,
  },
  walletText: {
    fontWeight: '600',
    justifyContent: 'center',
    fontSize: 26,
    alignContent: 'center',
    textAlign: 'center',
    color: '#e65332',
    borderColor: 'white',
    backgroundColor: '#fab3a2',
    fontWeight: 'bold',
    marginTop: 40,
    width: '40%',
    borderRadius: 20,
    borderWidth: 2
  }
})

export default WalletScreen