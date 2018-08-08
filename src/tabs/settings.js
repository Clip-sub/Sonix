import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'
import { Colors } from 'sonix-common'

export class Settings extends Component {
  static get options () {
    return {
      topBar: {
        visible: true,
        background: {
          color: Colors.RED
        },
        title: {
          text: 'Settings',
          color: Colors.WHITE
        }
      }
    }
  }

  render () {
    return (
      <View style={styles.settingSection}>
        <Text style={{ color: Colors.GRAY_MEDIUM }}>Enable Notifications</Text>
        <Switch onTintColor={Colors.RED} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE
  },
  settingSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: Colors.SILVER,
    borderBottomWidth: 0.5,
    width: '100%'
  }
})
