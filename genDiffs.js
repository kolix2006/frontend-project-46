import parseFile from './parsers.js'
import stylishConc from './formatters/stylishConc.js'
import _ from 'lodash'

const genDiffs = (filepath1, filepath2, formatter = 'stylish') => {
  const parsedFile1 = parseFile(filepath1)
  const parsedFile2 = parseFile(filepath2)

  const getGendiff = (parsedFile1, parsedFile2) => {
    const objKeys1 = Object.keys(parsedFile1)
    const objKeys2 = Object.keys(parsedFile2)
    const objKeys = (_.union(objKeys1, objKeys2)).sort()

    let diffs = {}
    const getDiffs = objKeys.reduce((acc, key) => {
      const isAdded = !Object.hasOwn(parsedFile1, key) && Object.hasOwn(parsedFile2, key)
      const isDeleted = Object.hasOwn(parsedFile1, key) && !Object.hasOwn(parsedFile2, key)
      const isChanged = parsedFile1[key] !== parsedFile2[key]
      const isUnchanged = parsedFile1[key] === parsedFile2[key]
      const isNested = (typeof parsedFile1[key] === 'object' && typeof parsedFile2[key] === 'object') && (parsedFile1[key] !== null && parsedFile2[key] !== null)

      if (isNested && isChanged) {
        acc[`  ${key}`] = getGendiff(parsedFile1[key], parsedFile2[key])
      }
      else if (isAdded) {
        acc[`+ ${key}`] = parsedFile2[key]
      }
      else if (isDeleted) {
        acc[`- ${key}`] = parsedFile1[key]
      }
      else if (isChanged) {
        acc[`- ${key}`] = parsedFile1[key]
        acc[`+ ${key}`] = parsedFile2[key]
      }
      else if (isUnchanged) {
        acc[`  ${key}`] = parsedFile2[key]
      }
      return acc
    }, diffs)

    diffs = getDiffs
    return diffs
  }

  if (formatter === 'stylish') {
    return stylishConc(getGendiff(parsedFile1, parsedFile2))
  }
}

export default genDiffs
