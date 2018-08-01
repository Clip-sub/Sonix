import { Navigation } from 'react-native-navigation'
import { Feed } from './feed'
import { Comments } from './comments'

export function registerScreens () {
  Navigation.registerComponent(`screen.Feed`, () => Feed)
  Navigation.registerComponent(`screen.Comments`, () => Comments)
}
