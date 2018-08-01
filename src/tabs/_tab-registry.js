import { Navigation } from 'react-native-navigation'
import { Feed } from './feed'
import { Comments } from './comments'
import { Categories } from './categories'

export function registerTabs () {
  Navigation.registerComponent(`tab.Feed`, () => Feed)
  Navigation.registerComponent(`tab.Comments`, () => Comments)
  Navigation.registerComponent(`tab.Categories`, () => Categories)
}
