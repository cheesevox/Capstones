import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Icon from "react-native-feather";
import { Ionicons } from '@expo/vector-icons';
import CartCard from '../components/CartCard';
import { getAllOrderByCutomerId } from '../Api';
import { useSelector } from 'react-redux';


const OrderScreen = ({ navigation }) => {
    const [order, setOrder] = useState([])
    const [activeMenu, setActiveMenu] = useState('Order');
    const user = useSelector((state) => state.user.user)
    const fectOrderByCustomerId = () => {
        getAllOrderByCutomerId(user.userId).then((res) => {
            console.log("Ress order by cutoer", res)
            setOrder(res)
        })
        console.log("111111111111111:", user.userId)
    }
    useEffect(() => {
        fectOrderByCustomerId()
    }, [user.userId])

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
          fectOrderByCustomerId();
          console.log("Data refreshed!");
        });
    
        // Clean up the listener when the component is unmounted
        return unsubscribe;
      }, [navigation]);
    

    return (
        // <SafeAreaView>
        <View style={styles.container}>
            <View style={styles.headder}>
                {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
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
                </View> */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop:12 }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ justifyContent: "center", alignItems: "center",
                         width: 40, height: 40, backgroundColor: 'orange', 
                         borderRadius: 28, marginTop: 42 }}
                    >
                        <Icon.ArrowLeft style={{ color: 'white' }} strokeWidth={3} />
                    </TouchableOpacity>
                    <Text style={styles.Text}>
                        User Order
                    </Text>
                    <TouchableOpacity
                        // onPress={() => navigation.navigate("OrderCart")}
                        style={{ justifyContent: "center", 
                        alignItems: "center", width: 40, 
                        height: 40, borderRadius: 28, marginTop: 42 }}
                    >
                        <Icon.CreditCard style={{}} strokeWidth={3} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.secsion1}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
                    padding: 5, backgroundColor: ' white'
                }}>
                    <TouchableOpacity
                        style={{
                            // backgroundColor: activeMenu == 'Order' ? '#1d5eff' : '#fff',
                            borderRadius: 5,
                            // elevation: clickActive == 'Order History' ? 2 : 0
                        }}
                        onPress={() => setActiveMenu('Order')}
                    >
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            textDecorationLine: 'underline',

                            // color : 'white'
                            color: activeMenu == 'Order' ? 'green' : '#9ea3b0'
                        }}>Order History</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        // backgroundColor: activeMenu == 'FeedBack' ? '#1d5eff' : '#fff',
                        borderRadius: 5,
                    }}
                        onPress={() => setActiveMenu('FeedBack') }
                    >
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            textDecorationLine: 'underline',
                            color: activeMenu == 'FeedBack' ? 'green' : '#9ea3b0'
                        }}>Re-Charge History</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={styles.body}>
                <ScrollView>
                    {
                        order?.map((item) => (
                            <CartCard key={item.orderId} item={item} />
                        )
                        )
                    }
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
        gap: 4, marginTop:10
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

    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    textItem: {
        fontWeight: 'bold', fontSize: 17,
    },

    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        flex: 1
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
    },
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
})