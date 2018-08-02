import React, { Component } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Metrics, Colors } from 'sonix-common'
// import { Icon } from 'sonix-components'

export class HeaderWithSearchBar extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TextInput style={styles.searchInput} placeholder='Search' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 32,
    borderRadius: 16,
    paddingHorizontal: 8,
    backgroundColor: Colors.WHITE,
    width: Metrics.WINDOW_WIDTH * 0.75,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  searchInput: {
    marginLeft: 12
  }
})
