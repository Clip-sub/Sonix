import { AsyncStorage } from 'react-native'

const Keys = {
  NOTIFICATION: '_notification'
}

export function enableNotification (isEnable: boolean = true) {
  return AsyncStorage.setItem(Keys.NOTIFICATION, isEnable)
}

export function getNotificationSetting () {
  return AsyncStorage.getItem(Keys.NOTIFICATION)
}
