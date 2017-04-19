import _ from 'lodash'
import validator from 'validator'

const camelToLabel = camelCase =>  {
  return camelCase.replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
}

const isNumeric = number => {
  if (typeof number !== 'string') throw new Error('isNumeric only accepts strings')
  return validator.isNumeric(number) || validator.isDecimal(number)
}

const isEmpty = value => {
  return (
    value === null ||
    value === undefined ||
    (typeof value === 'string' && value.trim() === '') ||
    (Array.isArray(value) && value.length === 0) ||
    (_.isPlainObject(value) && Object.keys(value).length === 0)
  )
}

export { camelToLabel, isNumeric, isEmpty }
