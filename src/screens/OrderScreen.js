import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { Ionicons } from '@expo/vector-icons';
import DishCard from '../components/DishCard';
import { order } from '../Constant';
import { SafeAreaView } from 'react-native-safe-area-context';

const OrderScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={{
                position: "relative"
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ justifyContent: "center", alignItems: "center", width: 40, height: 40, backgroundColor: 'orange', borderRadius: 28, marginTop: 42 }}
                    >
                        <Icon.ArrowLeft style={{ color: 'white' }} strokeWidth={3} />
                    </TouchableOpacity>
                    <Text style={styles.Text}>
                        Order Detail
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("OrderCart")}
                        style={{ justifyContent: "center", alignItems: "center", width: 40, height: 40, backgroundColor: 'orange', borderRadius: 28, marginTop: 42 }}
                    >
                        <Icon.CreditCard style={{ color: 'white' }} strokeWidth={3} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 40, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <View style={{ flex: 1, alignItems: 'center', padding: 10, borderWidth: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30 }} >
                        <TouchableOpacity>
                            <Text>Order Detail</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', padding: 10, borderWidth: 1, borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
                        <TouchableOpacity>
                            <Text>
                                Order Hitory
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
        </SafeAreaView>
    )
}

export default OrderScreen

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

})