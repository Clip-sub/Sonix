import _ from 'lodash'

export function refineContent (str) {
  const phase1 = _.escapeRegExp(str).replace(/\\/g, '').replace(/<[^>]+>/g, '')
  return phase1.replace(/&/g, '')
}
