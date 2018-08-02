/**
 * @format
 * @flow
 */
import { Navigation } from 'react-native-navigation'
import { Colors } from 'sonix-common'
import { registerTabs } from './tabs/_tab-registry'
import { registerHeaders } from './components/header/_header-registry'
import { registerScreens } from './screens/_screen-registry'

export function start (iconAssets) {
  registerTabs()
  registerHeaders()
  registerScreens()

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          // {
          //   component: {
          //     name: 'screen.PostContent',
          //     options: {
          //       topBar: {
          //         visible: true,
          //         title: {
          //           text: 'Feedsdd'
          //         }
          //       }
          //     }
          //   }
          // },
          {
            bottomTabs: {
              id: 'mainBottomTabs',
              animations: {
                enable: true
              },
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
                      },
                      topBar: {
                        visible: true,
                        title: {
                          text: 'Feed'
                        }
                      }
                    }
                  }
                },
                {
                  component: {
                    name: 'tab.Categories',
                    passProps: {
                      text: ''
                    },
                    options: {
                      bottomTab: {
                        text: 'Categories',
                        icon: iconAssets[1],
                        testID: 'SECOND_TAB_BAR_BUTTON',
                        iconColor: 'gray',
                        textColor: 'gray',
                        selectedIconColor: Colors.ORANGE,
                        selectedTextColor: Colors.ORANGE
                      }
                    }
                  }
                },
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
                        testID: 'SECOND_TAB_BAR_BUTTON',
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
          }
        ]
      }
    }
  })
}
