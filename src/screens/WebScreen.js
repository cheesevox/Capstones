import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';


const WebScreen = ({ route }) => {
    const {link} = route.params;
    return <WebView source={{ uri: link }} style={{ flex: 1 }} />;
}

export default WebScreen

const styles = StyleSheet.create({})