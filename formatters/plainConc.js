const plainConc = (val) => {
  let result = ''

  const returnValue = (value) => {
    const typeCheck = typeof value

    if (value != null && typeCheck === 'object') {
      return `[complex value]`
    }
    else if (typeCheck === 'string') {
      return `'${value}'`
    }
    else {
      return value
    }
  }

  let pathBuild = []
  const forEachEl = (obj) => {
    obj.forEach((el) => {
      if (el['type'] === 'nested') {
        pathBuild.push(el['key'])
        forEachEl(el['children'])
        pathBuild.pop()
      }
      else if (el['type'] === 'added') {
        pathBuild.push(el['key'])
        result += `Property '${pathBuild.join('.')}' was added with value: ${returnValue(el['value'])}\n`
        pathBuild.pop()
      }
      else if (el['type'] === 'deleted') {
        pathBuild.push(el['key'])
        result += `Property '${pathBuild.join('.')}' was removed\n`
        pathBuild.pop()
      }
      else if (el['type'] === 'changed') {
        pathBuild.push(el['key'])
        result += `Property '${pathBuild.join('.')}' was updated. From ${returnValue(el['oldValue'])} to ${returnValue(el['newValue'])}\n`
        pathBuild.pop()
      }
    })
  }
  forEachEl(val)
  return result.slice(0, -1)
}

export default plainConc
