import React, { Component, Fragment } from 'react'
import { StyleSheet, View, Image, WebView, Text, ScrollView, TouchableOpacity, Linking } from 'react-native'
import { Colors, Metrics } from 'sonix-common'
import { apiPost } from '../api/api-post'
import { Icon } from '../components/common/icon'

// create a component
class PostContent extends Component {
  static get options () {
    return {
      topBar: {
        visible: true,
        background: {
          color: Colors.ORANGE
        }
      }
    }
  }

  state = {}

  openInBrowser (link) {
    Linking.openURL(link || '')
  }

  componentDidMount () {
    const { postId } = this.props
    apiPost.getSinglePost(postId)
      .then(resp => {
        console.log(resp)
        if (resp.id) {
          this.setState(resp)
        }
      }).catch(e => console.log(e))
  }

  render () {
    const { id, excerpt, link } = this.state

    return (
      id ? (
        <ScrollView contentContainerStyle={styles.container}>
          <Image style={styles.thumbnail} source={{ uri: this.state._embedded['wp:featuredmedia'][0].source_url }} />

          <WebView style={styles.webView} originWhitelist={['*']} source={{ html: excerpt.rendered }} />

          <TouchableOpacity style={styles.bottomButton} onPress={() => this.openInBrowser(link)}>
            <View style={styles.bottomWrapper}>
              <Icon color={Colors.WHITE} size={24} name='open-in-browser' />
              <Text style={styles.bottomText}>Open in browser</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      ) : <Fragment />
    )
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingBottom: 56,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.WHITE
  },
  thumbnail: {
    width: 220,
    height: 220
  },
  webView: {
    flex: 1,
    width: Metrics.WINDOW_WIDTH * 0.96,
    marginTop: 24,
    backgroundColor: Colors.WHITE
  },
  bottomButton: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    paddingVertical: 12,
    width: Metrics.WINDOW_WIDTH,
    backgroundColor: Colors.RED
  },
  bottomWrapper: {
    flexDirection: 'row', alignItems: 'center'
  },
  bottomText: {
    color: Colors.WHITE, marginLeft: 12
  }
})

export {PostContent}
