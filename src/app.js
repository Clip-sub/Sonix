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
                text: 'This is tab 2'
              },
              options: {
                bottomTab: {
                  text: 'Tab 2',
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
                text: 'This is tab 2'
              },
              options: {
                bottomTab: {
                  text: 'Tab 2',
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
                text: 'This is tab 2'
              },
              options: {
                bottomTab: {
                  text: 'Tab 2',
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
