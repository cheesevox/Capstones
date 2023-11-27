import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Linking } from 'react-native'
import * as Icon from "react-native-feather";
import { SafeAreaView } from 'react-native-safe-area-context';
import { createPayment } from '../Api';
import { userimage } from '../Constant';
import { CheckBox } from 'react-native-elements'
import { rows } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';

const WalletScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const [link, setLink] = useState('')

  console.log("item wallet $$$$$$", item)
  const [balance, setBalance] = useState('')
  const [isSelected, setSelection] = useState(false);
  const [values, setValues] = useState({
    userId: item?.userId,
    balance: null,
  })
  const createPaymentCustomer = () => {
    createPayment(values).then((res) => {
      console.log("link vnpayu: ", res)
      setLink(res)
    })
  }
  console.log("link", link)
  // console.log("balance", item?.walletDto?.balance)

  const openLink = async () => {
    const url = link;
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
      console.log(" open succes : ", url);
    } else {
      console.error(`Cannot open URL: ${url}`);
    }
  };

  const handlePress = async () => {
    // Call createPaymentCustomer first
    await createPaymentCustomer();
    // Then open the link
    //  openLink();
    setSelection(!isSelected);
  };

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
      <View style={{ flex: 4, marginHorizontal: 30 }}>
        {/* <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Balance :</Text> */}
        <Text style={{ fontSize: 21, fontWeight: 'bold', color: 'orange' }}>
          Balance : {item.walletDto?.balance} vnd</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Input For Reacharge</Text>
        <View style={{ borderWidth: 2, padding: 20, borderRadius: 30, width: '100%', marginTop: 10 }}>
          <TextInput placeholder='Input monney incomming'
            onChangeText={(text) => setValues({ ...values, balance: text })}
          ></TextInput>
        </View>
        <View style={{ justifyContent: 'center', marginTop: 10 }}>
          <View style={{
            width: '100%',
            borderWidth: 2,
            borderRadius: 30,
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Image style={{ width: 40, height: 40 }} source={require("../../assets/images/Icon.png")}></Image>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}> VN Pay</Text>
            </View>
            {/* <Ionicons style={{ fontSize: 30 }} name='checkmark-circle-outline'></Ionicons> */}
            <CheckBox
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              // checked={this.st.ate.checked}
              checked={isSelected}
              onPress={handlePress}
            />
          </View>
        </View>

      </View>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <TouchableOpacity
          onPress={openLink}
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