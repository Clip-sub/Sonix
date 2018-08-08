import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Colors, Metrics, dayjs } from 'sonix-common'
import _ from 'lodash'

type ItemCommentType = {
  content: string,
  authorName: string,
  date: string,
  avatarUrl: string,
  onPress: Function
}

export class ItemComment extends Component<ItemCommentType> {
  render () {
    const { content, authorName, date, avatarUrl, onPress } = this.props

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.avatar} source={{ uri: avatarUrl }} />
          <View style={styles.titleWrapper}>
            <Text style={styles.authorName} numberOfLines={2}>{_.escape(authorName)}</Text>
            <Text style={styles.content}>{content}</Text>
            <Text style={styles.date}>{dayjs(date).format('MMMM DD[,] YYYY')}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.SILVER,
    marginBottom: 12,
    marginHorizontal: 6
  },
  authorName: {
    maxWidth: Metrics.WINDOW_WIDTH * 0.42,
    color: Colors.GREYISH_BROWN,
    fontSize: 14,
    height: 34,
    marginTop: 10,
    textAlign: 'left'
  },
  content: {
    color: Colors.GRAY_MEDIUM,
    fontSize: 11
  },
  date: {
    fontSize: 11,
    marginTop: 8,
    color: Colors.SILVER
  },
  avatar: {
    maxWidth: Metrics.WINDOW_WIDTH * 0.45,
    width: Metrics.WINDOW_WIDTH * 0.45,
    height: Metrics.WINDOW_WIDTH * 0.45
  }
})
