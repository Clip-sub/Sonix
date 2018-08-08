import _ from 'lodash'

export function refineContent (str) {
  return _.escapeRegExp(str).replace(/\\/g, '').replace(/<[^>]+>/g, '')
}
