import fs from 'node:fs'
import path from 'node:path'
import yaml from 'js-yaml'

const parseJsonFile = (filepath) => {
  const data = fs.readFileSync(path.resolve(process.cwd(), filepath), { encoding: 'utf8', flag: 'r' })
  const obj = JSON.parse(data)
  return obj
}

const parseYamlFile = (filepath) => {
  const data = fs.readFileSync(path.resolve(process.cwd(), filepath), { encoding: 'utf8', flag: 'r' })
  const obj = yaml.load(data)
  return obj
}

const parseFile = (filepath) => {
  if (path.extname(filepath) === '.json') { // Парсинг JSON-файлов
    return parseJsonFile(filepath)
  }
  else if (path.extname(filepath) === '.yaml' || path.extname(filepath) === '.yml') { // Парсинг YAML-файлов
    return parseYamlFile(filepath)
  }
}

export default parseFile
