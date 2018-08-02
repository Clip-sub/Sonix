/**
 * @format
 * @flow
 */
import { Navigation } from 'react-native-navigation'
import { registerTabs } from './tabs/_tab-registry'

registerTabs()

export function start (iconAssets) {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            component: {
              name: 'tab.Feed',
              passProps: {
                text: ''
              },
              options: {
                bottomTab: {
                  text: 'Feed',
                  icon: iconAssets[0],
                  testID: 'SECOND_TAB_BAR_BUTTON'
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
