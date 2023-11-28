import { FlatList, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { images, item } from '../Constant'
import * as Icon from "react-native-feather";
import UserCard from '../components/UserCard'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons/build/Icons';
import { useSelector } from 'react-redux';
import { getUserByID } from '../Api';
import TabViewSession from '../components/TabViewSession';

const UserProfileScreen = ({ navigation ,route}) => {
  const user = useSelector(state => state.user.user) 
  const [profile, setProfile] = useState()

  const fectProfileByCustomerId = () => {
    getUserByID(user?.userId).then((res) => {
      setProfile(res)
    })
  }
  useEffect(() => {
    fectProfileByCustomerId()
  }, [])


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ justifyContent: "center", alignItems: "center", width: 40, height: 40, backgroundColor: 'orange', borderRadius: 28, marginTop: 42 }}
        >
          <Icon.ArrowLeft style={{ color: 'white' }} strokeWidth={3} />
        </TouchableOpacity>
        <Text style={styles.Text}>
          User Profile
        </Text>
        <TouchableOpacity
          // onPress={() => navigation.navigate("OrderCart")}
          style={{ justifyContent: "center", alignItems: "center", width: 40, height: 40, borderRadius: 28, marginTop: 42 }}
        >
          <Icon.CreditCard style={{}} strokeWidth={3} />
        </TouchableOpacity>
      </View>
      {/* <TabViewSession/> */}
      <ScrollView>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, marginHorizontal: 30 }}>
          <Image
          source={require('../../assets/images/avatar.jpg')}
            style={{ borderRadius: 50, width: 200, height: 200, resizeMode: "cover" }}
          />
          <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 26, color: 'orange' }}>{profile?.name} #{profile?.userId}</Text>
          <View style={styles.cartcard}>
            <View style={{
              height: 250,
              marginLeft: 10,
              paddingVertical: 25,
              marginHorizontal: 20,
              justifyContent: 'space-between',
              fontWeight: "",
              flex: 1
            }}>
              <Ionicons name='wallet-outline' size={20} paddingHorizontal={5}> Address : {profile?.address}</Ionicons>
              <Ionicons name='wallet-outline' size={20} paddingHorizontal={5}> Phone : {profile?.phone} </Ionicons>
              <TouchableOpacity>
                <Ionicons name='wallet-outline' size={20} paddingHorizontal={5}> Email : {profile?.email}</Ionicons>
              </TouchableOpacity>
              <TouchableOpacity
                // onPress={() => navigation.navigate("Wallet", item={profile})}
                onPress={() => navigation.navigate("Wallet", { item: profile })}
              >
                <View style={{ flexDirection: 'row', alignItems:'center' }}
                >
                  <Ionicons
                    name='wallet-outline' size={20} paddingHorizontal={5}> Wallet : 
                  </Ionicons>
                  <Text style={{ fontSize: 20 }}>{profile?.walletDto?.balance} vnd</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* <FlatList
        data={profile}
        renderItem={({ item }) =>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, marginHorizontal: 30 }}>
            <Image
              source={item.image}
              style={{ borderRadius: 50, width: 200, height: 200, resizeMode: "cover" }}
            />
            <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 26, color: 'orange' }}>{item.name}</Text>
            <View style={styles.cartcard}>
              <View style={{
                height: 250,
                marginLeft: 10,
                paddingVertical: 20,
                marginHorizontal: 50,
                justifyContent: 'space-between',
                fontWeight: "",
                flex: 1
              }}>
                <TouchableOpacity>
                  <Ionicons name='wallet-outline' size={25} paddingHorizontal={5}> Name {item.name} </Ionicons>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name='wallet-outline' size={25} paddingHorizontal={5}> Help {item.email} </Ionicons>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name='wallet-outline' size={25} paddingHorizontal={5}> Term & Policy {item.phone}</Ionicons>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Wallet")}
                >
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                  >
                    <Ionicons
                      name='wallet-outline' size={25} paddingHorizontal={5}> Wallet
                    </Ionicons>
                    <Text style={{ fontSize: 20 }}>{item.walletDto}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        }
      >
      </FlatList> */}
      <View style={{
        justifyContent: 'center',
        alignItems: "center",
      }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{
            backgroundColor: "#f96163",
            borderRadius: 29,
            paddingVertical: 18,
            width: "60%",
            marginBottom: 20
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 18, color: "#fff", fontWeight: "700", }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  )
}
const styles = StyleSheet.create({
  Text: {
    fontWeight: '600',
    fontSize: 24,
    textAlign: 'center',
    color: '#e65332',
    borderColor: 'white',
    backgroundColor: '#fab3a2',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    marginTop: 40,
    width: '40%',
    borderRadius: 20,
    borderWidth: 2
  },
  cartcard: {
    height: 250,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
})
export default UserProfileScreen
