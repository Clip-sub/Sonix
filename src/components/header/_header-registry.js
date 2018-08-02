import { Navigation } from 'react-native-navigation'
import { HeaderWithSearchBar } from './header-with-searchbar'

export const HeaderNames = {
  HEADER_WITH_SEARCHBAR: 'header.HeaderSearchBar'
}

export const registerHeaders = () => {
  Navigation.registerComponent(HeaderNames.HEADER_WITH_SEARCHBAR, () => HeaderWithSearchBar)
}
