import parseJsonFile from './parse.js'
import _ from 'lodash'

const genDiffs = (filepath1, filepath2) => {
  const parsedFile1 = parseJsonFile(filepath1)
  const parsedFile2 = parseJsonFile(filepath2)

  const objKeys1 = Object.keys(parsedFile1)
  const objKeys2 = Object.keys(parsedFile2)
  const objKeys = (_.union(objKeys1, objKeys2)).sort()

  let diffs = {}
  const getDiffs = objKeys.reduce((acc, key) => {
    if (!Object.hasOwn(parsedFile1, key) && Object.hasOwn(parsedFile2, key)) {
      acc[`+ ${key}`] = parsedFile2[key]
    }
    else if (Object.hasOwn(parsedFile1, key) && !Object.hasOwn(parsedFile2, key)) {
      acc[`- ${key}`] = parsedFile1[key]
    }
    else if (parsedFile1[key] !== parsedFile2[key]) {
      acc[`- ${key}`] = parsedFile1[key]
      acc[`+ ${key}`] = parsedFile2[key]
    }
    else if (parsedFile1[key] === parsedFile2[key]) {
      acc[`  ${key}`] = parsedFile2[key]
    }
    return acc
  }, diffs)

  diffs = getDiffs

  const conc = (obj) => {
    const objEntries = Object.entries(obj)
    const mapped = objEntries.map(el => `  ${el.join(': ')}`)
    const spaced = mapped.join('\n')
    return `{\n${spaced}\n}`
  }

  return conc(diffs)
}

export default genDiffs
