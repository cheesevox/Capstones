import { FlatList, ScrollView, StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { user } from '../Constant'
import UserCard from '../components/UserCard'

const UserProfileScreen = ({navigation}) => {
  return (
    <View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.Text}>
          User Profile
        </Text>
      </View>
        <FlatList
          data={user}
         renderItem={({item}) => <UserCard item={item}/>}

        >
        </FlatList>
        <View style={{ justifyContent:'center',
							alignItems: "center",}}>
        <TouchableOpacity
							onPress={() => navigation.navigate("Login")}
							style={{
							backgroundColor: "#f96163",
							borderRadius: 18,
							paddingVertical: 18,
							marginTop:15,
							width: "60%",
                
							}}
						>
							<Text style={{ textAlign:'center',fontSize: 18, color: "#fff", fontWeight: "700" }}>
								Logout
							</Text>
						</TouchableOpacity>
            </View>
    </View>
  )
}
const styles = StyleSheet.create({
  Text: {
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
export default UserProfileScreen
