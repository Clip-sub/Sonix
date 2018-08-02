/**
 * @format
 * @flow
 */
import { Navigation } from 'react-native-navigation'
import { registerTabs } from './tabs/_tab-registry'
import { registerHeaders } from './components/header/_header-registry'

export function start (iconAssets) {
  registerTabs()
  registerHeaders()

  Navigation.setRoot({
    root: {
      bottomTabs: {
        animations: {
          enable: true
        },
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'tab.Feed',
                    passProps: {
                      text: 'This is tab 1'
                    }
                  }
                }
              ],
              options: {
                bottomTab: {
                  text: 'Home',
                  icon: iconAssets[0],
                  testID: 'FIRST_TAB_BAR_BUTTON',
                  iconColor: 'gray',
                  selectedIconColor: '#d6ba12',
                  textColor: 'gray',
                  selectedTextColor: '#d6ba12'
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
                  testID: 'SECOND_TAB_BAR_BUTTON'
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
                  testID: 'SECOND_TAB_BAR_BUTTON'
                }
              }
            }
          }
        ]
      },
      component: {
        name: 'screen.PostContent',
        options: {},
        passProps: {
          text: 'This is Post Content'
        }
      }
    }
  })
}
