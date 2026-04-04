const stylishConc = (val) => {
  const stringifyValue = (obj, depth = 1) => {
    // gap = depth * 4
    const objEntries = Object.entries(obj)
    const mapped = objEntries.map((el) => {
      if (el[1] === null || typeof el[1] !== 'object') {
        if (el[1] === null) {
          el[1] = 'null'
        }
        return `${' '.repeat(depth * 4)}${el.join(': ')}`
      }
      else {
        return `${' '.repeat(depth * 4)}${el[0]}: ${stringifyValue(el[1], (depth + 1))}`
      }
    })
    const spaced = mapped.join('\n')
    return `{\n${spaced}\n${' '.repeat((depth - 1) * 4)}}`
  }

  const conc = (obj, depth = 1) => {
    // gap = depth * 4 - 2
    const objEntries = Object.entries(obj)
    const mapped = objEntries.map((el) => {
      if (el[1] === null || typeof el[1] !== 'object') {
        if (el[1] === null) el[1] = 'null'
        const isDiffKey = el[0].startsWith('+ ') || el[0].startsWith('- ') || el[0].startsWith('  ')
        const indent = isDiffKey ? depth * 4 - 2 : depth * 4
        return `${' '.repeat(indent)}${el.join(': ')}`
      }
      else if (!el[0].startsWith('+ ') && !el[0].startsWith('- ') && !el[0].startsWith('  ')) {
        return `${' '.repeat(depth * 4)}${el[0]}: ${stringifyValue(el[1], (depth + 1))}`
      }
      else if (el[0].startsWith('+ ') || el[0].startsWith('- ') || el[0].startsWith('  ')) {
        return `${' '.repeat(depth * 4 - 2)}${el[0]}: ${conc(el[1], (depth + 1))}`
      }
    })
    const spaced = mapped.join('\n')
    return `{\n${spaced}\n${' '.repeat(depth * 4 - 4)}}`
  }

  return conc(val)
}

export default stylishConc
