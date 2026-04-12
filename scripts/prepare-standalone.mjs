import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs"
import path from "node:path"

const root = process.cwd()
const standaloneDir = path.join(root, ".next", "standalone")
const standaloneNextDir = path.join(standaloneDir, ".next")

if (!existsSync(standaloneDir)) {
  throw new Error("Missing .next/standalone. Run `npm run build` first.")
}

mkdirSync(standaloneNextDir, { recursive: true })

for (const [source, target] of [
  [path.join(root, "public"), path.join(standaloneDir, "public")],
  [path.join(root, ".next", "static"), path.join(standaloneNextDir, "static")],
]) {
  rmSync(target, { recursive: true, force: true })
  cpSync(source, target, { recursive: true })
}
