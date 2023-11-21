import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { Ionicons } from '@expo/vector-icons';
import DishCard from '../components/DishCard';
import { order } from '../Constant';

const OrderScreen = ({ navigation }) => {

    return (
            <ScrollView>
                <View style={{
                    position: "relative",
                }}>
                    <Image
                        source={order.image}
                        style={{
                            width: 500,
                            height: 360,
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ justifyContent: "center", alignItems: "center", width: 40, height: 40, position: 'absolute', marginTop: 40, marginLeft: 24, backgroundColor: 'white', borderRadius: 28 }}
                    >
                        <Icon.ArrowLeft style={{ color: 'orange' }} strokeWidth={3} />
                    </TouchableOpacity>
                    <View style={{
                        position: 'absolute', marginTop: 260,
                        width: '100%',
                        backgroundColor: "#fff",
                        borderTopLeftRadius: 60,
                        borderTopRightRadius: 50,
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,marginLeft: 50,}}>
                            <Text style={{ fontSize: 30, fontWeight: 'bold',  marginTop: 10}}>
                                {order.name}
                            </Text>
                            <View style={{marginRight:20}}>
                            
                            </View>
                           
                        </View>
                        <View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                style={{ justifyContent: "center", alignItems: "center", width: 40, height: 40, position: 'absolute', marginTop: 24, marginLeft: 24, backgroundColor: 'white', borderRadius: 28 }}
                            >
                                <Icon.ArrowLeft style={{ color: 'orange' }} strokeWidth={3} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 50, paddingBottom: 2, alignItems: 'center' }}>
                            <Ionicons name='star-outline' size={15} style={{ color: 'orange' }} />
                            {/* <Text style={styles.text}> {order.rating}</Text> */}
                            <Text style={styles.text}> Đánh Giá (4.6k review)</Text>
                            </View>
                    </View>
                </View>
            </ScrollView>
    )
}

export default OrderScreen

const styles = StyleSheet.create({
    text: {
        fontSize: 15
    }

})