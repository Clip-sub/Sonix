import React, { Component, Fragment } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
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
        if (resp.id) {
          alert(this.state._embedded['wp:featuredmedia'][0].source_url)
          this.setState(resp)
        }
      }).catch(e => console.log(e))
  }

  render () {
    const { id } = this.state

    return (
      id ? (<View style={styles.container}>
        <Image style={{ width: 50, height: 50 }} source={{ uri: this.state._embedded['wp:featuredmedia'][0].source_url }} />
        <Text onPress={() => this.toReset()}>PostContent</Text>
      </View>) : <Fragment />
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
