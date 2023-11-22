import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import * as Icon from "react-native-feather";
import { Ionicons } from '@expo/vector-icons';
import DishCard from '../components/DishCard';
import { order } from '../Constant';
import { SafeAreaView } from 'react-native-safe-area-context';
import CartCard from '../components/CartCard';


const OrderScreen = ({ navigation }) => {
    const [activeMenu, setActiveMenu] = useState('Order');

    return (
        // <SafeAreaView>
        <View style={styles.container}>
            <View style={styles.headder}>
                <View style={{
                    // padding:30
                    flexDirection: 'row', marginTop: 25,
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            justifyContent: "center", alignItems: "center",
                            width: '10%', height: '100%', backgroundColor: 'orange', borderRadius: 28,
                            position: 'relative'
                        }}
                    >
                        <Icon.ArrowLeft style={{ color: 'white' }} strokeWidth={3} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row-reverse', margin: 'auto' }}>
                        <Text style={{
                            alignItems: 'center', width: '60%', textAlign: 'center',
                            fontWeight: 'bold', fontSize: 26, borderRadius: 5, borderWidth: 1
                        }}>Order Detail</Text>
                    </View>
                </View>
            </View>
            <View style={styles.secsion1}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
                    padding: 5, backgroundColor: ' white'
                }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: activeMenu == 'Order' ? '#1d5eff' : '#fff',
                            borderRadius: 5,
                            // elevation: clickActive == 'Order History' ? 2 : 0
                        }}
                        onPress={() => setActiveMenu('Order')}
                    >
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            // color : 'white'
                            color: activeMenu == 'Order' ? '#FFFFFF' : '#9ea3b0'
                        }}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor: activeMenu == 'FeedBack' ? '#1d5eff' : '#fff',
                        borderRadius: 5,
                        
                    }}
                        onPress={() => setActiveMenu('FeedBack') && navigation.natigate("FeedbackScreen")}
                    >
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: activeMenu == 'FeedBack' ? '#FFFFFF' : '#9ea3b0'
                        }}>Review</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.body}>
                <ScrollView>
                    <CartCard />
                </ScrollView>
            </View>
            <View style={styles.footer}>
            </View>
        </View>
    )
}

export default OrderScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 4
    },
    headder: {
        flex: 1,
    },
    secsion1: {
        flex: 0.4,
    },
    body: {
        flex: 6,
        display: 'flex'
    },
    footer: {
        flex: 1,
        backgroundColor: 'red'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})