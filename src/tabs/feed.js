import React, { Component } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { Colors } from 'sonix-common'
import { ItemPost } from '../components/feed/item-post'

export class Feed extends Component {
  static get options () {
    return {
      topBar: {
        title: {
          text: 'My Screen'
        },
        visible: true,
        animate: true,
        background: {
          color: Colors.ORANGE
        }
      }
    }
  }

  render () {
    return (
      <FlatList
        data={[1, 1, 1, 1, 1, 1, 1, 1]}
        numColumns={2}
        keyExtractor={item => String(Math.random())}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => <ItemPost />} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  }
})
