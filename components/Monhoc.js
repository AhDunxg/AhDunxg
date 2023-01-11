import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

const Monhoc = ()=>{
    return(
        <View>
            <Text> React Native</Text>
            <Image
        style={styles.img}
        source={require('./assets/img/danang.jpg')}/>
        </View>
    );
}
export default Monhoc;