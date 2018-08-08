import React, { Component } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { Colors, NavigationHelper } from 'sonix-common'
import { ItemPost } from '../components/feed/item-post'
import { apiPost } from '../api/api-post'

export class Feed extends Component {
  constructor (props) {
    super(props)
    NavigationHelper.mergeOptions(this.props.componentId, {
      topBar: {
        visible: true,
        background: {
          color: Colors.ORANGE
        },
        title: {
          text: 'Feed'
        },
        subtitle: {
          text: 'Listing all latest music'
        }
      }
    })

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

  toPostContent (item) {
    NavigationHelper.push(this.props.componentId, {
      component: {
        name: 'screen.PostContent',
        passProps: {
          postId: item.id
        },
        options: {
          topBar: {
            title: {
              text: item.title.rendered
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
            onPress={() => this.toPostContent(item)}
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
    alignItems: 'center'
  }
})
