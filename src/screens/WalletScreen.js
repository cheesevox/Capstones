import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import OptionCard from '../components/OptionCard'
import * as Icon from "react-native-feather";


const WalletScreen = ({ navigation }) => {
  return (
    <View style={{flex:1}}>
       <View style={{flexDirection:'row'}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ justifyContent: "center", alignItems: "center", width: 40, height: 40, position: 'absolute', marginLeft: 24, backgroundColor: 'orange', borderRadius: 28, marginTop:42 }}
        >
          <Icon.ArrowLeft style={{ color: 'white' }} strokeWidth={3} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("OrderCart")}
          style={{ justifyContent: "center", alignItems: "center", width: 40, height: 40, position: 'absolute', marginLeft: 410, backgroundColor: 'orange', borderRadius: 28, marginTop: 42 }}
        >
          <Icon.CreditCard style={{ color: 'white' }} strokeWidth={3} />
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => navigation.navigate("OrderCart")}
          style={{ justifyContent: "center", alignItems: "center", width: 40, height: 40, position: 'absolute', marginLeft: 24, backgroundColor: 'orange', borderRadius: 28, marginTop:42 }}
        >
          <Icon. style={{ color: 'white' }} strokeWidth={3} />
        </TouchableOpacity> */}
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.walletText}>
          Wallet
        </Text>
      </View>

      <View>
        <Text style={{ marginLeft:20,marginTop:20,fontWeight: '500', fontSize: 20, color: 'blue', }}>
          Your Balance
        </Text>
      </View >

      <View style={styles.wallet}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>100.000</Text>
          <Text style={{ paddingLeft: 3, fontWeight: 'bold', color: 'white' }}>vnđ</Text>
        </View>
        <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 40, textAlign: 'center', fontSize: 15 }}>See More</Text>
        <TouchableOpacity
          style={{ color: 'white' }}
        >
          <Ionicons style={{ alignContent: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', textAlignVertical: 'center', alignItems: 'center', fontSize: 20 }} name='caret-down-circle-outline' ></Ionicons>
        </TouchableOpacity>
      </View>
      <View style={{}}>
				<OptionCard />
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center', flex:1  }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Order")}
          style={{
            backgroundColor: "#f96163",
            borderRadius: 29,
            paddingVertical: 18,
            justifyContent: 'center',
            alignItems: 'center',
            width: "60%",
            alignContent: 'space-between',
            alignItems: "center",
            marginTop:60
          }}
        >
          <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
            Payment with Wallet
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wallet: {
    backgroundColor: 'rgba(98, 83, 196, 0.8)',
    borderRadius: 29,
    paddingVertical: 18,
    width: '80%',
    height: '30%',
    justifyContent:'center',
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal:50
  },
  walletText: {
    fontWeight: '600',
    justifyContent: 'center',
    fontSize: 26,
    alignContent: 'center',
    textAlign:'center',
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