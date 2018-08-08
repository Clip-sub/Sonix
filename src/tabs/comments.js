import React, { Component, Fragment } from 'react'
import { StyleSheet, FlatList, StatusBar } from 'react-native'
import { Colors, NavigationHelper } from 'sonix-common'
import { ItemComment } from '../components/comments/item-comment'
import { apiComment } from '../api/api-comment'

export class Comments extends Component {
  constructor (props) {
    super(props)
    NavigationHelper.mergeOptions(this.props.componentId, {
      topBar: {
        visible: true,
        background: {
          color: Colors.BLUE_FACEBOOK
        },
        title: {
          text: 'Comments',
          color: Colors.WHITE
        },
        subtitle: {
          text: 'Find the latest comments',
          color: Colors.GRAY_ULTRALIGHT
        }
      }
    })

    console.log(props)
    this.page = 1
    this.data = []
  }

  componentDidMount () {
    this.loadData(this.page)
  }

  loadData (page: number) {
    apiComment.getLatestComments()
      .then(resp => {
        resp.length > 1 && this.page++

        if (page === 1) {
          this.data = resp
        } else {
          this.data = this.data.concat(resp)
        }

        this.forceUpdate()
      })
      .catch(e => console.log(e))
  }

  render () {
    return (
      <Fragment>
        <StatusBar barStyle='light-content' />
        <FlatList
          data={this.data}
          keyExtractor={item => String(Math.random())}
          contentContainerStyle={styles.container}
          renderItem={({ item, index }) => <ItemComment odd={index % 2 !== 0} authorName={item.author_name} content={item.content.rendered} avatarUrl={item.author_avatar_urls['96']} />} />
      </Fragment>
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
