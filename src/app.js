/**
 * @format
 * @flow
 */
import { Navigation } from 'react-native-navigation'
import { Colors } from 'sonix-common'
import OneSignal from 'react-native-onesignal'
import { registerTabs } from './tabs/_tab-registry'
import { registerHeaders } from './components/header/_header-registry'
import { registerScreens } from './screens/_screen-registry'

export function start (iconAssets) {
  OneSignal.init('f08264b2-3b73-4111-9c1a-b9199d3ce1cc')

  registerTabs()
  registerHeaders()
  registerScreens()

  Navigation.setDefaultOptions({
    topBar: {
      visible: true,
      buttonColor: 'black',
      title: {
        fontWeight: 'bold',
        fontSize: 16
      },
      subtitle: {
        fontSize: 12,
        color: Colors.GREYISH_BROWN
      }
    }
  })

  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'mainBottomTabs',
        options: {
          bottomTabs: {
            titleDisplayMode: 'showWhenActive'
          }
        },
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'tab.Feed',
                    options: {
                      bottomTab: {
                        text: 'Feed',
                        icon: iconAssets[0],
                        iconColor: 'gray',
                        textColor: 'gray',
                        selectedIconColor: Colors.ORANGE,
                        selectedTextColor: Colors.ORANGE
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'tab.Comments',
                    passProps: {
                      text: ''
                    },
                    options: {
                      bottomTab: {
                        text: 'Comments',
                        icon: iconAssets[2],
                        iconColor: 'gray',
                        textColor: 'gray',
                        selectedIconColor: Colors.BLUE_FACEBOOK,
                        selectedTextColor: Colors.BLUE_FACEBOOK
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'tab.Settings',
                    passProps: {},
                    options: {
                      bottomTab: {
                        text: 'Settings',
                        icon: iconAssets[5],
                        iconColor: 'gray',
                        textColor: 'gray',
                        selectedIconColor: Colors.RED,
                        selectedTextColor: Colors.RED
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      }
    }
  })
}
