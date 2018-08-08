import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Colors, Metrics, dayjs } from 'sonix-common'
import _ from 'lodash'
import { refineContent } from '../../common/utils'

type ItemCommentType = {
  content: string,
  authorName: string,
  date: string,
  avatarUrl: string,
  onPress: Function
}

export class ItemComment extends Component<ItemCommentType> {
  render () {
    const { content, authorName, date, avatarUrl, onPress, odd } = this.props

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.container, odd ? styles.odd : {}]}>
          <Image style={styles.avatar} source={{ uri: avatarUrl }} />
          <View style={styles.wrapper}>
            <Text style={styles.authorName} numberOfLines={2}>{_.escape(authorName)}</Text>
            <Text style={styles.content}>{refineContent(content)}</Text>
            <Text style={styles.date}>{dayjs(date).format('MMMM DD[,] YYYY')}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const AVATAR_SIZE = 50

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    maxWidth: Metrics.WINDOW_WIDTH,
    width: Metrics.WINDOW_WIDTH,
    backgroundColor: Colors.WHITE,
    paddingLeft: 12,
    paddingBottom: 12
  },
  odd: {
    backgroundColor: Colors.BLUE_ULTRALIGHT
  },
  wrapper: {
    marginLeft: 18,
    maxWidth: Metrics.WINDOW_WIDTH * 0.75
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
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2
  }
})
