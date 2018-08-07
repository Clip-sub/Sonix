import React, { Component, Fragment } from 'react'
import { View, Text, StyleSheet, Image, WebView } from 'react-native'
import { Colors, NavigationHelper } from 'sonix-common'
import { apiPost } from '../api/api-post'

// create a component
class PostContent extends Component {
  static get options () {
    return {
      topBar: {
        visible: true,
        background: {
          color: Colors.ORANGE
        },
        title: {
          text: 'dddf'
        }
      }
    }
  }

  state = {}

  toReset () {
    NavigationHelper.showModal({
      stack: {
        children: [{
          component: {
            name: 'screen.PostContent',
            passProps: {
              text: 'stack with one child'
            },
            options: {
              topBar: {
                title: {
                  text: 'Modal'
                }
              }
            }
          }
        }]
      }
    })
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
    const { id, excerpt } = this.state

    return (
      id ? (
        <View style={styles.container}>
          <Image style={styles.thumbnail} source={{ uri: this.state._embedded['wp:featuredmedia'][0].source_url }} />
          <Text onPress={() => this.toReset()}>PostContent</Text>

          <WebView style={styles.webView} originWhitelist={['*']} source={{ html: excerpt.rendered }} />
        </View>
      ) : <Fragment />
    )
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.WHITE
  },
  thumbnail: {
    width: 220,
    height: 220
  },
  webView: {
    flex: 1, height: 10
  }
})

export {PostContent}
