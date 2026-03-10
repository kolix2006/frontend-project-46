#!/usr/bin/env node

import { Command } from 'commander'
import parseJsonFile from './parse.js'

const program = new Command

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    const parsedFile1 = parseJsonFile(filepath1)
    const parsedFile2 = parseJsonFile(filepath2)
    console.log(parsedFile1)
    console.log(parsedFile2)
  })

program.parse()
