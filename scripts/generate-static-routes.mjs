import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const DIST_DIR = path.resolve(process.cwd(), 'dist')
const INDEX_FILE = path.join(DIST_DIR, 'index.html')

const ROUTE_PATHS = [
  'id',
  'en',
  'id/privacy-policy',
  'en/privacy-policy',
  'id/terms-of-service',
  'en/terms-of-service',
  'id/changelog',
  'en/changelog',
  // Legacy paths still exist in router and should not return 404 on direct visits.
  'privacy-policy',
  'terms-of-service',
  'changelog',
]

async function generateStaticRoutes() {
  const indexHtml = await readFile(INDEX_FILE, 'utf8')

  await Promise.all(
    ROUTE_PATHS.map(async (routePath) => {
      const routeDir = path.join(DIST_DIR, routePath)
      const routeIndexPath = path.join(routeDir, 'index.html')

      await mkdir(routeDir, { recursive: true })
      await writeFile(routeIndexPath, indexHtml, 'utf8')
    }),
  )

  console.log(`Generated static route files for ${ROUTE_PATHS.length} paths.`)
}

generateStaticRoutes().catch((error) => {
  console.error('Failed to generate static route files:', error)
  process.exitCode = 1
})
