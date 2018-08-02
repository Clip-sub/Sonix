import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const TAB_ICON_SIZE = 20

export function loadIconAssets () {
  return new Promise((resolve, reject) => {
    Promise.all([
      Ionicons.getImageSource('ios-home', TAB_ICON_SIZE),
      MaterialCommunityIcons.getImageSource('library', TAB_ICON_SIZE),
      MaterialCommunityIcons.getImageSource('comment-text-multiple-outline', TAB_ICON_SIZE),
      Ionicons.getImageSource('ios-notifications', TAB_ICON_SIZE),
      Ionicons.getImageSource('ios-person', TAB_ICON_SIZE)
    ])
      .then(values => {
        resolve(values)
      })
      .catch(e => reject(e))
  })
}
