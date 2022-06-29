import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Contents from '../components/Contents'

const Home = () => {
  return (
        <View>
            <Header />
            <Contents />
        </View>
  )
}

export default Home

const styles = StyleSheet.create({
})