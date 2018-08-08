import { Navigation } from 'react-native-navigation'
import { Feed } from './feed'
import { Comments } from './comments'
import { Categories } from './categories'
import { Settings } from './settings'
import { withUser } from '../contexts/user-context'

export function registerTabs () {
  Navigation.registerComponent(`tab.Feed`, () => withUser(Feed))
  Navigation.registerComponent(`tab.Comments`, () => Comments)
  Navigation.registerComponent(`tab.Categories`, () => Categories)
  Navigation.registerComponent(`tab.Settings`, () => Settings)
}
