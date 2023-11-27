import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Icon from "react-native-feather";
import { getAllSessionByAreaId } from '../Api';
import MealSessionCard from '../components/MealSessionCard';

const MealSession = ({ navigation, route }) => {
    const { areaId } = route.params;
    console.log("meall session page : ", areaId)
    const [session, setSession] = useState([])

    const fetchAllSessionByAreaId = (id) => {
        getAllSessionByAreaId(areaId ? areaId : area[0]).then((res) => {
            console.log("tra ve session tao tesrtttttttttttttttttttt", res)
            setSession(res)
        }).catch(error => console.log(error))
    }

    useEffect(() => {
        fetchAllSessionByAreaId()
    }, [areaId])


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ justifyContent: "center", alignItems: "center", width: 40, height: 40, backgroundColor: 'orange', borderRadius: 28, marginTop: 42 }}
                    >
                        <Icon.ArrowLeft style={{ color: 'white' }} strokeWidth={3} />
                    </TouchableOpacity>
                    <Text style={styles.Text}>
                        Meal In Session
                    </Text>
                    <TouchableOpacity
                        // onPress={() => navigation.navigate("OrderCart")}
                        style={{ justifyContent: "center", alignItems: "center", width: 40, height: 40, borderRadius: 28, marginTop: 42 }}
                    >
                        <Icon.CreditCard style={{}} strokeWidth={3} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.body}>
                {session?.map((item, index) => (
                    <ScrollView key={index}>
                        {
                            item.status == true &&
                            (
                                <View>
                                    <Text
                                        style={{
                                            fontSize: 25,
                                            fontWeight: "bold",
                                            elevation: 2
                                        }}>Session {item.sessionType}</Text>
                                    <MealSessionCard key={index} sessionId={item.sessionId} />
                                </View>
                            )
                        }
                    </ScrollView>
                ))
                }
            </View>
            <View style={styles.footer}>

            </View>
        </View>
    )
}

export default MealSession

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    header: {
        flex: 1,
    },
    body: {
        flex: 5,
        // backgroundColor: 'green'
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
        borderWidth: 2,
        paddingVertical: 5
    },
    footer: {
        flex: 1,
        // backgroundColor: 'blue'
    }


})