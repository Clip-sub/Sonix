import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// create a component
class PostContent extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>PostContent</Text>
      </View>
    )
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  }
})

export {PostContent}
