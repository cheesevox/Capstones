import { FlatList, StyleSheet, Text, View, Icon} from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const CartCard =({item})=>{
    return (
    <View style={styles.cartcard}>
        <View style={{
          height:100, 
          marginLeft:10,
          paddingVertical:20,
          flex:1
          }}>
            {/* <Text style={{fontWeight:'bold', fontSize:16}}>{item.name}</Text>
            <Text style={{fontWeight:'bold', fontSize:16}}>{item.quantity}</Text>
            <Text style={{fontSize:17,fontWeight:'bold'}}>{item.price}</Text> */}
        </View>
        <View style={{marginRight:20,alignItems:'center'}}>
          <Text style={{fontWeight:'bold',fontSize:18}}>1</Text>
          <View style={styles.actionButton}>
            <Icon name="remove" size={25} color={Colors.white}></Icon>
            <Icon name="add" size={25} color={Colors.white}></Icon>
          </View>
        </View>
      </View>
    );
  };
  
export default CartCard;

const styles = StyleSheet.create({
    cartcard:{
        height:100,
        elevation:15,
        borderRadius:10,
        backgroundColor:Colors.white,
        marginHorizontal:20,
        marginVertical:10,
        paddingHorizontal:10,
        flexDirection:'row',
        alignItems:'center'
      },
      actionButton:{
        width:80,
        height:30,
        borderRadius:30,
        paddingHorizontal:5,
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center'
      }
});
