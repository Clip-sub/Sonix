import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Colors, Metrics, dayjs } from 'sonix-common'
import _ from 'lodash'

type ItemPostType = {
  title: string,
  subtitle: string,
  date: string,
  imageUrl: string
}

class ItemPost extends Component<ItemPostType> {
  static defaultProps = {
    title: 'Title',
    subtitle: ''
  }

  render () {
    const { title, subtitle, date, imageUrl } = this.props

    return (
      <View style={styles.container}>
        <Image style={styles.thumbnail} source={{ uri: imageUrl }} />
        <View style={styles.titleWrapper}>
          <Text style={styles.title} numberOfLines={2}>{_.escape(title)}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.date}>{dayjs(date).format('MMMM DD[,] YYYY')}</Text>
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
    maxWidth: Metrics.WINDOW_WIDTH * 0.42,
    color: Colors.GREYISH_BROWN,
    fontSize: 14,
    marginTop: 10,
    textAlign: 'left'
  },
  subtitle: {
    color: Colors.GRAY_MEDIUM,
    fontSize: 11
  },
  date: {
    fontSize: 11,
    marginTop: 8,
    color: Colors.SILVER
  },
  titleWrapper: {
    width: '100%',
    paddingHorizontal: 6,
    paddingBottom: 10,
    alignItems: 'stretch'
  },
  thumbnail: {
    maxWidth: Metrics.WINDOW_WIDTH * 0.45,
    width: Metrics.WINDOW_WIDTH * 0.45,
    height: Metrics.WINDOW_WIDTH * 0.45
  }
})

export {ItemPost}
