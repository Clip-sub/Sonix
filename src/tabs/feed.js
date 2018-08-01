import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { ItemPost } from '../components/feed/item-post'

export class Feed extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ItemPost />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  }
})
