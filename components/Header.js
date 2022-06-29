import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      <Text style = {styles.heading}>Dashboard</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    heading: {
        marginTop: 30,
        padding: 20,
        fontWeight: "900",
        fontSize: 25,
    }
})