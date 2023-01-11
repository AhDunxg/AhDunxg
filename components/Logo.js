import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

const Logo = ()=>{
    return(
        <View>
              <Image
          style={styles.tinyLogo}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        </View>
    );
}
export default Logo;