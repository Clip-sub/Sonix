import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors, NavigationHelper } from 'sonix-common'

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

  render () {
    return (
      <View style={styles.container}>
        <Text onPress={() => this.toReset()}>PostContent</Text>
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
