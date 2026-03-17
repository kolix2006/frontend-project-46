import genDiffs from '../genDiffs.js'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fs from 'node:fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')

describe('Проверка работоспособности проекта', () => {
  test('Сравнение плоских JSON-файлов', () => {
    expect(genDiffs(getFixturePath('file1.json'), getFixturePath('file2.json'))).toBe(readFile('expectedFile.txt').trim())
  })
  test('Сравнение плоских YAML-файлов', () => {
    expect(genDiffs(getFixturePath('yamlfile1.yaml'), getFixturePath('yamlfile2.yaml'))).toBe(readFile('expectedFile.txt').trim())
    expect(genDiffs(getFixturePath('file1.yml'), getFixturePath('file2.yml'))).toBe(readFile('expectedFile.txt').trim())
  })
})
