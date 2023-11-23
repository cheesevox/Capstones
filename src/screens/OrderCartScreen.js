import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Ionicons } from '@expo/vector-icons'
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux'
import { createOrderUser } from '../Api'

const OrderCartScreen = ({ navigation, route }) => {
  const { item } = route.params;
  console.log(" CArt SCreen : ",item);
  const user = useSelector((state)=>state.user.user)
  console.log("USER NEWEEEEEEEEEEE",user)
  const [quantity,setQuantity] = useState(1)
  const [values,setValues] = useState({
    customerId:user.userId,
    mealSessionId:item.mealSessionId,
    quantity:quantity,

  })
  const createOrder = ()=>{
    createOrderUser({...values,quantity:quantity})
  }
  const increase = ()=>{
    setQuantity(quantity+1)
  }
  const decrease = ()=>{
    if(quantity >0){
      setQuantity(quantity-1)
    }else{
      setQuantity(0)
    }
  }
  const CartCard = ({ item }) => {
    console.log("+++++++++++",item)
    return <View style={styles.cartcard}>
      <View style={{
        height: 100,
        marginLeft: 10,
        paddingVertical: 20,
        flex: 1
      }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={{uri: item?.mealDtoForMealSession?.image}}
            style={{ width: 50, height: 50, resizeMode: "cover" }}
          />
          <View style={{ justifyContent: 'center', flexDirection: 'column', marginLeft: 20 }}>
            <Text style={styles.textItem}>{item?.mealDtoForMealSession?.name}</Text>
            <Text style={styles.textItem}>Description: {item?.mealDtoForMealSession.description}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {/* <Text style={styles.textItem}>Price: {item.price}</Text> */}
            </View>
          </View>
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <View style={styles.actionButton}>
          <TouchableOpacity onPress={()=>increase()}>
          <Ionicons name="add-circle-outline" size={25} color={Colors.black}></Ionicons>
          </TouchableOpacity>
          <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>{quantity}</Text>
          <TouchableOpacity onPress={()=>decrease()}>
          <Ionicons name="remove-circle-outline" size={25} color={Colors.black}></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  }

  return (
    <SafeAreaView style={{ backgroundColor: Colors.white, flex: 1 }}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ justifyContent: "center", alignItems: "center", width: 40, height: 40, position: 'absolute', marginLeft: 24, backgroundColor: 'orange', borderRadius: 28, marginTop: 42 }}
        >
          <Icon.ArrowLeft style={{ color: 'white' }} strokeWidth={3} />
        </TouchableOpacity>

      </View>
      <View style={{ marginBottom: 30, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.titleText}>
          Cart
        </Text>
      </View>
      <View style={{ padding: 30, backgroundColor: '#f7e4ad' }}>
        <TouchableOpacity style={{ flexDirection: 'row-reverse', justifyContent:'space-between' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#de8407' }}>Change</Text>
          <Text style={{fontSize:16, marginLeft:40}}>Chef is prepare food for 30minus</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView>
        {
          quantity == 0 ? null :<CartCard item={item}/>
        }
      </ScrollView>
      <View style={{ }}>
        <View
          style={{
            width:'100%',
            backgroundColor: '#f7e4ad',
            borderTopLeftRadius: 36,
            borderTopRightRadius: 36,
            padding:20,
            paddingTop:30,
            display : quantity == 0 ? 'none' : 'block'
          }}>
            {/* <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Text>
                Subtotal
              </Text>
              <Text>
                {item.price}
              </Text>
            </View> */}
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Text style={{fontWeight:'bold', fontSize:20}}>
                Order Total
              </Text>
              <Text style={{fontWeight:'bold', fontSize:20}}>
                {item.price*quantity}
              </Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity
            onPress={() => {
              createOrder()  
              navigation.navigate("FoodList")}
            }
            style={{
              backgroundColor: "#f96163",
              borderRadius: 29,
              paddingVertical: 18,
              marginTop:30,
              width: "80%",
              alignItems: "center",
            }}
            disabled={quantity === 0 }
          >
            <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
              Place Holder
            </Text>
          </TouchableOpacity>
            </View>
        </View>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  textItem: {
    fontWeight: 'bold', fontSize: 17,
  },

  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20
  },
  cartcard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleText: {
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
  },
  actionButton: {
    width: 80,
    height: 30,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center'
  }
})
export default OrderCartScreen;