const fs = require('fs')
const path = require('path')

const src = path.resolve(__dirname, '../electron.d.ts')
const target = process.argv[2]

if (!target) return

fs.writeFileSync(target, fs.readFileSync(src))
