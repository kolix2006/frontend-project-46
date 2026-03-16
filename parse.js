import fs from 'node:fs'
import path from 'node:path'

const parseJsonFile = (filepath) => {
  const data = fs.readFileSync(path.resolve(process.cwd(), filepath), { encoding: 'utf8', flag: 'r' })
  const obj = JSON.parse(data)
  return obj
}

export default parseJsonFile
