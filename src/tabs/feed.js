import React, { Component } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { Colors, NavigationHelper } from 'sonix-common'
import { ItemPost } from '../components/feed/item-post'
import { apiPost } from '../api/api-post'

export class Feed extends Component {
  static get options () {
    return {
      topBar: {
        title: {
          text: 'Back Handler',
          color: 'black',
          fontSize: 16
        },
        subtitle: {
          text: 'fd'
        },
        background: {
          color: Colors.ORANGE
        }
      }
    }
  }

  constructor (props) {
    super(props)
    console.log(props)
    this.page = 1
    this.posts = []
  }

  componentDidMount () {
    this.loadData(this.page)
  }

  loadData (page: number) {
    apiPost.getLatestPosts()
      .then(resp => {
        console.log(resp)
        resp.length > 1 && this.posts++

        if (page === 1) {
          this.posts = resp
        } else {
          this.posts = this.posts.concat(resp)
        }

        this.forceUpdate()
      })
      .catch(e => console.log(e))
  }

  toPostContent () {
    NavigationHelper.push('mainBottomTabs', {
      component: {
        name: 'screen.PostContent',
        passProps: {
          text: 'Pushed screen'
        },
        options: {
          topBar: {
            title: {
              text: 'Pushed screen title'
            }
          }
        }
      }
    })
  }

  render () {
    return (
      <FlatList
        data={this.posts}
        numColumns={2}
        keyExtractor={item => String(Math.random())}
        contentContainerStyle={styles.container}
        renderItem={({ item }) =>
          <ItemPost
            onPress={() => this.toPostContent()}
            imageUrl={item._embedded['wp:featuredmedia'][0].source_url}
            title={item.title.rendered}
            date={item.date} />} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 12,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  }
})
