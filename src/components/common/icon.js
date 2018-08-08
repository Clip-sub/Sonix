import React from 'react'
import PropTypes from 'prop-types'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export const Icon = ({ name, size, color, ...rest }) => {
  switch (name) {
    case 'qr':
      return (
        <MaterialCommunityIcons name='qrcode' {...{ size, color, ...rest }} />
      )
    case 'cart':
      return (
        <MaterialCommunityIcons name='cart' {...{ size, color, ...rest }} />
      )
    case 'search':
      return <Ionicons name='ios-search' {...{ size, color, ...rest }} />
    case 'open-in-browser':
      return <MaterialIcons name='open-in-browser' {...{ size, color, ...rest }} />
    default:
      return <Ionicons name='ios-qr-scanner' {...{ size, color, ...rest }} />
  }
}

Icon.propTypes = {
  name: PropTypes.oneOf(['qr', 'cart', 'search', 'home', 'open-in-browser'])
}
