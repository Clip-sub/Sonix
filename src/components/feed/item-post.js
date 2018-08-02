import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Colors, Metrics } from 'sonix-common'

class ItemPost extends Component {
  static defaultProps = {
    title: 'Title'
  }

  render () {
    const { title } = this.props

    return (
      <View style={styles.container}>
        <Image style={styles.thumbnail} source={{ uri: 'https://sonixgvn.net/wp-content/uploads/2018/08/manyo-works-best-2.jpg' }} />
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{title}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    marginBottom: 12,
    marginHorizontal: 6
  },
  title: {
    color: Colors.GREYISH_BROWN,
    fontSize: 14,
    marginTop: 10,
    textAlign: 'left'
  },
  subtitle: {
    color: Colors.GRAY_MEDIUM,
    fontSize: 11
  },
  titleWrapper: {
    width: '100%',
    paddingHorizontal: 6,
    paddingBottom: 10,
    alignItems: 'stretch'
  },
  thumbnail: {
    width: Metrics.WINDOW_WIDTH * 0.45,
    height: Metrics.WINDOW_WIDTH * 0.45
  }
})

export {ItemPost}
