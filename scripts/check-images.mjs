#!/usr/bin/env node
/**
 * Scans every file in src/data/*.ts for `image: '/images/...'` references
 * and confirms each one resolves to a real file in public/. Run before
 * every deploy: `node scripts/check-images.mjs`.
 *
 * This will legitimately report every image as "missing" until real,
 * verified photos are dropped into public/images/** — that's expected
 * during content setup. SmartImage renders a designed placeholder for any
 * image this script flags, so nothing ever shows up broken to a visitor;
 * this script just tells you what's still left to source.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const dataDir = join(root, 'src', 'data')
const publicDir = join(root, 'public')

const imagePattern = /image:\s*'([^']+)'/g
const seen = new Map() // path -> [files referencing it]

for (const file of readdirSync(dataDir)) {
  if (!file.endsWith('.ts')) continue
  const content = readFileSync(join(dataDir, file), 'utf-8')
  let match
  while ((match = imagePattern.exec(content))) {
    const imgPath = match[1]
    if (!seen.has(imgPath)) seen.set(imgPath, [])
    seen.get(imgPath).push(file)
  }
}

let missing = 0
const duplicateTargets = new Map() // resolved path -> count (sanity check against accidental reuse)

for (const [imgPath, files] of seen) {
  const onDisk = existsSync(join(publicDir, imgPath.replace(/^\//, '')))
  duplicateTargets.set(imgPath, (duplicateTargets.get(imgPath) ?? 0) + files.length)
  if (!onDisk) {
    missing += 1
    console.log(`MISSING  ${imgPath}  (referenced in ${files.join(', ')})`)
  }
}

console.log('')
console.log(`Checked ${seen.size} unique image paths across ${readdirSync(dataDir).length} data files.`)
console.log(`${missing} not yet present in /public — these render as a designed placeholder, never a broken image.`)

if (missing > 0) {
  console.log('Add verified photos at the paths above before final launch.')
}
