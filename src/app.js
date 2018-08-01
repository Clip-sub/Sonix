/**
 * @format
 * @flow
 */
import { Navigation } from 'react-native-navigation'
import { registerScreens } from './screens/_registry'

registerScreens()

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
                icon: require('../images/two.png'),
                testID: 'SECOND_TAB_BAR_BUTTON'
              }
            }
          }
        },
        {
          component: {
            name: 'tab.Categogies',
            passProps: {
              text: 'This is tab 2'
            },
            options: {
              bottomTab: {
                text: 'Tab 2',
                icon: require('../images/two.png'),
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
                icon: require('../images/two.png'),
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
