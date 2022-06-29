import { StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import PublicScreen from "../screens/PublicScreen"
const Contents = () => {
  return (
    <View style = {styles.container}>
            <TouchableOpacity 
                style = {styles.content}
                onPress = {<PublicScreen />}
            >
                <Text>Public Meeting</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.content}><Text>Private Meeting</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.content}><Text>Notifcations</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.content}><Text>Settings</Text></TouchableOpacity>
    </View>
  )
}

export default Contents

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        padding: 10,
        backgroundColor: '#f5f5f5',
        fontSize: "20",
    },
    content: {
        padding: 10,
        fontSize: "20",
        backgroundColor: '#fff',
        margin: 10,
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,

    }
})