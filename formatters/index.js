import plainConc from './plainConc.js'
import stylishConc from './stylishConc.js'
import jsonConc from './jsonConc.js'

const chooseFormatter = (formatter) => {
  if (formatter === 'stylish') {
    return stylishConc
  }
  else if (formatter === 'plain') {
    return plainConc
  }
  else if (formatter === 'json') {
    return jsonConc
  }
}

export default chooseFormatter
