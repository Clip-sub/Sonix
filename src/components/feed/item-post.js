import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Colors, Metrics } from 'sonix-common'

class ItemPost extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image style={styles.thumbnail} source={{ uri: 'https://sonixgvn.net/wp-content/uploads/2018/08/manyo-works-best-2.jpg' }} />
        <Text>ItemPost</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE
  },
  thumbnail: {
    width: Metrics.WINDOW_WIDTH * 0.45,
    height: Metrics.WINDOW_HEIGHT * 0.45
  }
})

export {ItemPost}
