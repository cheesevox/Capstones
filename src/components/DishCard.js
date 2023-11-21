import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const DishCard = ({ item }) => {
    return (
        <View style={styles.cartcard}>
            <Image style={{ height: 100, width: 100, marginLeft:20, borderRadius:20 }} source={item.image} />
            <View style={{
                height: 120,
                marginLeft: 10,
                paddingVertical: 20,
                flex: 1,
                justifyContent:'center',
                borderRadius:20
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{item.price} vnd</Text>
            </View>
        </View>
    )
}

export default DishCard

const styles = StyleSheet.create({
    cartcard: {
        height: 160,
        backgroundColor:'F2FFFE',
        borderRadius: 20,
        marginHorizontal: 20,
        marginBottom:20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    }
})