import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class imgcomponents extends Component {
  render() {
    return (
      <View>
        <Image
        style={styles.img}
        source={require('./assets/img/danang.jpg')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    img:{
        width:300,
        height:200,
    }
})