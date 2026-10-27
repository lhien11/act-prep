// Turns dist-artifact/index.html into page.html, the fragment published as a claude.ai artifact.
import { readFileSync, writeFileSync } from 'node:fs'

const html = readFileSync('dist-artifact/index.html', 'utf8')
const js = html.match(/src="\.\/(assets\/[^"]+\.js)"/)?.[1]
const css = html.match(/href="\.\/(assets\/[^"]+\.css)"/)?.[1]
if (!js || !css) throw new Error('Could not find built asset names in dist-artifact/index.html')

writeFileSync(
  'dist-artifact/page.html',
  `<title>Andy's ACT Prep</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="${css}">
<style>html,body{margin:0;padding:0}</style>
<div id="root"></div>
<script type="module" src="${js}"></script>
`,
)
console.log(`page.html -> ${js}, ${css}`)
