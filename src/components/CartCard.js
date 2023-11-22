import { FlatList, StyleSheet, Text, View, Icon, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { imageorder } from '../Constant';
import { useNavigation } from "@react-navigation/native";

const CartCard = ({ item}) => {
  const navigation = useNavigation();
  return (
    
    <View style={styles.cartcard}>
      <View style={{
        height: 100,
        // paddingVertical: 20,
        flex: 1
      }}>
        <View style={{ flexDirection: 'row',}}>
          <Image style={{ width: 100, height: 100, borderRadius: 10, resizeMode: 'cover' }} source={imageorder.image} />
          <View style={{ flexDirection: 'column' , padding:15}}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
              {/* name order  */}
              Burger
            </Text>
            {/* order id */}
            <Text>Order ID (#009291)</Text>
          </View>
        </View>
      </View>
      <View style={{ marginRight: 20, alignItems: 'center',  padding: 10, borderRadius: 25, backgroundColor: '#79c989' }}>
        <View>
          <TouchableOpacity onPress={()=>navigation.navigate("Feedback",{})}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 , color:'white'}}>Review</Text>
          </TouchableOpacity>
        </View>
      </View>
   </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  cartcard: {
    height: 120,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginHorizontal: 20,
    marginVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'

  },
  actionButton: {
    width: 80,
    height: 30,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center'
  }
});
