import { FlatList, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { user } from '../Constant'
import * as Icon from "react-native-feather";
import UserCard from '../components/UserCard'
import { SafeAreaView } from 'react-native-safe-area-context';

const UserProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex:1}}>
       <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ justifyContent: "center", alignItems: "center", width: 40, height: 40, position: 'absolute', marginLeft: 24, backgroundColor: 'orange', borderRadius: 28, marginTop: 42 }}
        >
          <Icon.ArrowLeft style={{ color: 'white' }} strokeWidth={3} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("OrderCart")}
          style={{ justifyContent: "center", alignItems: "center", width: 40, height: 40, position: 'absolute', marginLeft: 350, backgroundColor: 'orange', borderRadius: 28, marginTop: 42 }}
        >
          <Icon.CreditCard style={{ color: 'white' }} strokeWidth={3} />
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.Text}>
          User Profile
        </Text>
      </View>
     
      <FlatList
        data={user}
        renderItem={({ item }) => <UserCard item={item} />}
      >
      </FlatList>
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
            marginBottom:20
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 18, color: "#fff", fontWeight: "700", }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  Text: {
    fontWeight: '600',
    justifyContent: 'center',
    fontSize: 24,
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
export default UserProfileScreen
